import React from 'react'

import * as S from './styles';

const Button = ({ text, color, onClickButton }) => {
  return (
    <S.Button onClick={_ => onClickButton()} color={color}>
      {text}
    </S.Button>
  );
}

export default Button