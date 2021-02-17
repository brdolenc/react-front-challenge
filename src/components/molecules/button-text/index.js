import React from 'react';

import * as S from './styles';

const BoxText = ({ text, active, onSelect }) => {
  return (
    <S.Box active={active} onClick={_ => onSelect()}>
      {text}
    </S.Box>
  )
};

export default BoxText;