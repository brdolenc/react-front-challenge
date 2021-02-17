import React from 'react';

import { useSelector } from 'react-redux';

import Theme from '../../../themes/ThemeProvider';
import Logo from '../../atoms/logo';
import SearchAddress from '../../organisms/search-address';

import * as S from './styles';

const Layout = ({ children }) => {
  const { currentPage } = useSelector((state) => state.Page);

  return (
    <Theme>
      <S.GlobalStyle />
      {currentPage !== 'search' &&
        <S.Header>
          <S.ContainerHeader>
            <Logo />
            <SearchAddress />
          </S.ContainerHeader>
        </S.Header> 
      }
      <main>
        {children}
      </main>
    </Theme>
  );
};

export default Layout;