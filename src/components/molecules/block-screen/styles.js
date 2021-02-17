import styled, { css } from 'styled-components';

export const BlockContainer = styled.div`
  ${({ theme }) =>
    css` && {
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 10;
      background-color: ${theme.colors.secondary};
      display: flex;
      align-items: center;
      justify-content: center;
    }`};
`;
