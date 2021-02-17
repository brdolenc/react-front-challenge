import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { saveProducts } from '../../../store/actions/products';

import Button from '../../atoms/button';

import * as S from './styles';

const CardProduct = ({ image, title, id, price }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.Products);

  const addProduct = (id) => {
    const arrayProducts = products ? products : [];

    dispatch(saveProducts([ ...arrayProducts, id]));
  }

  const removeProduct = (id) => {
    const arrayProducts = products ? products : [];

    const filterProducts = arrayProducts.filter((product) => product !== id);

    dispatch(saveProducts(filterProducts));
  }

  const findProduct = (id) => {
    const arrayProducts = products ? products : [];
    return arrayProducts.find((product) => product === id);
  }

  const isAddProduct = findProduct(id);

  return (
    <S.CardProduct>
      <S.CardProductImage>
        <img src={image} />
      </S.CardProductImage>
      <S.CardProductInfo>
        <h3>{title}</h3>
        <p>R$ {price}</p>
      </S.CardProductInfo>
      <S.CardProductButton>
        {!isAddProduct && <Button text="Adicionar" color="dark" onClickButton={() => addProduct(id)}/>}
        {isAddProduct && <Button text="Adicionado" color="yellow" onClickButton={() => {}}/>}
        {isAddProduct && <Button text="Remover" color="default" onClickButton={() => removeProduct(id)}/>}
      </S.CardProductButton>
    </S.CardProduct>
  )
};

export default CardProduct;