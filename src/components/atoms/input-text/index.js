import React from 'react';

import * as S from './styles';

const Modal = ({ ...props }) => {
  return (
    <S.InpuText { ...props }/>
  )
};

export default Modal;