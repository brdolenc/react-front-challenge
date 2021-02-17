import React from 'react';
import { IoCloseCircle } from 'react-icons/io5';

import * as S from './styles';

const Modal = ({ children, onClose }) => {
  const handleClose = () => {
    onClose();
  }

  return (
    <S.LayerModal>
      <S.Modal>
        <IoCloseCircle onClick={handleClose}/>
        {children}
      </S.Modal>
    </S.LayerModal>
  )
};

export default Modal;