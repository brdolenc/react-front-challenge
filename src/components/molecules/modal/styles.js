import styled, { css } from 'styled-components';

export const Modal = styled.div`
  ${({ theme }) =>
    css` && {
      width: 400px;
      background: #FFFFFF;
      padding: 50px 20px 20px 20px;
      border-radius: 5px;
      position: relative;

      @media (max-width: 500px) {
        width: 90%;
      }

      & > svg {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 30px;
        color: ${theme.colors.secondary};
        cursor: pointer;
      }
    }`};
`;


export const LayerModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  background-color: rgba(0,0,0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;
