import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import withProducts from '../../../containers/withProducts';

import { getDistributor } from '../../../apis/zedelivery';
import ButtonText from '../../molecules/button-text';
import Divider from '../../atoms/divider';
import CardProduct from '../../organisms/card-product';

import * as S from './styles';

const Products = ({ categories, products }) => {
  const [ listCategories, setListCategories ] = useState([]);
  const [ errorProducts, setErrorProducts ] = useState(false);
  const [ listProducts, setListProducts ] = useState([]);
  const [ selectedCategorie, setTelectedCategorie ] = useState(null);
  const { formatted_address: currentAddress, geometry } = useSelector((state) => state.Address);

  const getListProducts = async () => {
    setListProducts([]);
    setErrorProducts(false);
    const getProducts = await products({ categoreId: selectedCategorie });
    if (getProducts.length === 0) {
      setErrorProducts(true);
    }
    setListProducts(getProducts);
  }

  useEffect(async () => {
    const getCategories = await categories();
    setListCategories(getCategories);

    await getListProducts();
    
  }, [currentAddress]);

  useEffect(async () => {
    await getListProducts();

  }, [selectedCategorie]);

  return (
    <S.ContainerPage>
      <p>Filtrar por categorias</p>
      <S.ListCategories>
        {listCategories.length > 1 ? 
          listCategories.map((categorie) => <ButtonText active={selectedCategorie === categorie.id} key={categorie.id} text={categorie.title} onSelect={_ => setTelectedCategorie(categorie.id)}/>)
          : <Skeleton count={7} height={45} />
        }
      </S.ListCategories>
      <Divider />
      <p>Produtos</p>
      <S.ListProducts>
        {listProducts.length > 0 ?
          listProducts.map((product) => <CardProduct title={product.title} key={product.id} id={product.id} title={product.title} image={product.images[0]?.url} price={product.productVariants[0]?.price} />)
          : errorProducts ? <p>Nenhum produto encontrado</p> : <Skeleton count={5} height={230} />
        }
      </S.ListProducts>
    </S.ContainerPage>
  
  )
};

export default withProducts(Products);