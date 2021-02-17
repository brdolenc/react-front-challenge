import React from 'react';
import { useSelector } from 'react-redux';

import { getDistributor, getCategories, getProducts } from '../../apis/zedelivery';

const withProducts = Component => props => {
  const { formatted_address: currentAddress, geometry } = useSelector((state) => state.Address);

  const categories = async () => {
    const response = await getCategories();
    let returnCategories = [{
      title: 'todos',
      id: null
    }];

    if (response.data?.allCategory?.length > 0) {
      returnCategories = [ ...returnCategories, ...response.data.allCategory ];
    }

    return returnCategories;
  }

  const products = async ({ categoreId }) => {
    const responseDistributor = await getDistributor({ lat: geometry.lat, lng: geometry.lng });
    let returnProduct = [];

    if (responseDistributor.data?.pocSearch?.length > 0) {
      const responseProducts = await getProducts({ distributorId: responseDistributor.data.pocSearch[0].id, categoryId: categoreId });

      if (responseProducts.data?.poc?.products?.length > 0) {
        returnProduct = responseProducts.data.poc.products;
      }
    }

    return returnProduct;
  }

  const setProps = {
    categories: categories,
    products: products
  }

  return <Component { ...setProps } { ...props } />;
};
export default withProducts;