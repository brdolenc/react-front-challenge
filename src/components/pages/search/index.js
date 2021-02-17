import React from 'react';

import SearchAddress from '../../organisms/search-address';
import Logo from '../../atoms/logo';

import * as S from './styles';

const Search = () => {
  return (
    <S.SearchPage>
      <S.ContainerSearch>
        <Logo />
        <SearchAddress />
      </S.ContainerSearch>
    </S.SearchPage>
  );
};

export default Search;