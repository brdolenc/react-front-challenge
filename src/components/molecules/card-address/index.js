import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import * as S from './styles';

const CardAddress = ({ address, placeId, onSelectCard }) => {
  const handleSelect = (id) => {
    onSelectCard(id);
  }

  return (
    <S.Card onClick={_ => handleSelect(placeId)}>
      <FaMapMarkerAlt />
      <p>{address}</p>
    </S.Card>
  )
};

export default CardAddress;