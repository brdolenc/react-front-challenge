import styled, { css } from 'styled-components';

export const SearchPage = styled.div`
  ${({ theme }) =>
    css` && {
      background: ${theme.colors.secondary};
      text-align: center;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }`};
`;

export const ContainerSearch = styled.div`
  img {
    height: 80px;
    margin-bottom: 30px;
  }
`;
