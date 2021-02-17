import styled, { css } from 'styled-components';

export const Box = styled.button`
  ${({ theme, active }) =>
    css` && {
      text-align: center;
      font-size: 13px;
      padding: 15px;
      border-radius: 5px;
      background-color: ${active ? theme.colors.primary : '#FFFFFF'};
      border: 1px solid #f4f4f4;
      color: #666666;
      cursor: pointer;
      margin: 5px;
      outline: none;

      &:hover {
        background-color: ${theme.colors.primary};
        color: #000000;
      }
    }`};
`;


