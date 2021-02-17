import React, { useCallback, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import debounce from 'lodash/debounce';
import { useDispatch, useSelector } from 'react-redux';

import { saveAdress } from '../../../store/actions/address';
import { savePage } from '../../../store/actions/page';

import withGetAddress from '../../../containers/withGetAddress';

import Modal from '../../molecules/modal';
import InputText from '../../atoms/input-text';
import Loading from '../../atoms/loading';
import CardAddress from  '../../molecules/card-address';
import BlockScreen from  '../../molecules/block-screen';

import * as S from './styles';

const SearchAddress = ({ getAddress, getAddressById }) => {
  const [ openModal, setOpenModal ] = useState(false);
  const [ addressField, setAddressField ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ listAddress, setListAddress ] = useState([]);
  const [ enableBlockScreen, setEnableBlockScreen ] = useState(false);

  const dispatch = useDispatch();
  const { formatted_address: currentAddress } = useSelector((state) => state.Address);

  const getListAddress = async ({ address }) => {
    const response = await getAddress({ address });
    setIsLoading(false);
    setListAddress(response);
  }

  const getCallback = useCallback(
    debounce(getListAddress, 1000, { leading: false }),
    []
  );

  const handleSearch = (val) => {
    setAddressField(val);
    setIsLoading(true);

    if (val.length > 4) {
      getCallback({
        address: val
      })
    }
  }

  const handleSelectCard = async (e) => {
    setEnableBlockScreen(true);

    const response = await getAddressById({ placeId: e });

    if (response) {
      dispatch(saveAdress(response));
      dispatch(savePage({ currentPage: 'products' }));
      setOpenModal(false);
      setEnableBlockScreen(false);
    }
  }

  return (
    <>
      <S.ButtonAddress onClick={() => setOpenModal(true)}>
        {currentAddress? <p>{currentAddress}</p> : <p>Informe seu endereço</p>}
        <FaMapMarkerAlt />
      </S.ButtonAddress>

      {enableBlockScreen && <BlockScreen/>}
      
      {openModal &&
        <Modal onClose={() => setOpenModal(false)}>
          <InputText placeholder="Digite seu endereço" value={addressField} onChange={(e) => handleSearch(e.target.value)}/>
          { isLoading && <Loading /> }
          {listAddress.length > 0 && 
            listAddress.map((address, key) => <CardAddress address={address.description} placeId={address.placeId} key={key} onSelectCard={address.placeId ? (e) => handleSelectCard(e) : () => {}} />)
          }
        </Modal>
      }
    </>
  )
};

export default withGetAddress(SearchAddress);