import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) =>
    css` && {
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        background: ${theme.colors.background};
        font-family: Arial, Helvetica, sans-serif;
        image-rendering: optimizeQuality;
        fill: url(#linear-gradient);
      }
    }`};
`;
 
export const Header = styled.header`
  ${({ theme }) =>
    css` && {
      background: ${theme.colors.secondary};
      text-align: center;
      height: 90px;
    }`};
`;

export const ContainerHeader = styled.div`
  max-width: 1200px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  img {
    height: 60px;
    margin-right: 15px;
  }
`;
