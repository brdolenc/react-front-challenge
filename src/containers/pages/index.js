import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../components/templates/layout';
import Search from '../../components/pages/search';
import Products from '../../components/pages/products';

const Pages = () => {
  const { currentPage } = useSelector((state) => state.Page);

  const pages = {
    'search': <Search />,
    'products': <Products />
  };

  return (
    <Layout>
      {pages[currentPage]}
    </Layout>
  );
};

export default Pages;