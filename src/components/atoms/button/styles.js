import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme, color }) =>
    css` && {
      margin: 3px;
      border: 1px solid transparent;
      padding: 5px 8px;
      cursor: pointer;
      border-radius: 5px;
      background-color: ${color === 'yellow' ? theme.colors.primary : color === 'dark' ? theme.colors.secondary : '#f4f4f4'};
      outline: none;
      color: ${color === 'dark' ? '#FFFFFF' : '#000000'};

      &:hover {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        color: #000000;
      }
    }`};
`;



