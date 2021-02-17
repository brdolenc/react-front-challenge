import React from 'react';

import Loading from '../../atoms/loading';
import Logo from '../../atoms/logo';

import * as S from './styles';

const BlockScreen = () => {
  return (
    <S.BlockContainer>
      <Logo/>
      <Loading colorType="white"/>
    </S.BlockContainer>
  )
};

export default BlockScreen;