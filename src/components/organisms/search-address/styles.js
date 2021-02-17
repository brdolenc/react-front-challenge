import styled, { css, createGlobalStyle } from 'styled-components';

export const ButtonAddress = styled.button`
  ${({ theme }) =>
    css` && {
      text-align: center;
      height: 40px;
      border-radius: 5px;
      display: flex;
      border: 0;
      align-items: center;
      outline: none;
      padding: 0 15px;
      cursor: pointer;
      transition: all 0.5s ease;

      p {
        width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      &:hover {
        background-color: ${theme.colors.primary};
      }

      svg {
        margin-left: 5px;
      }
    }`};
`;
