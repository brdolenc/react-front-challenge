import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  border-bottom: 1px solid #CCCCCC;
  box-sizing: border-box;
  padding: 5px 10px;
  outline: none;
  color: #999999;
  display: flex;
  align-items: baseline;
  font-size: 12px;
  justify-content: flex-start;
  text-align: left;
  cursor: pointer;

  &:last-child {
    border-bottom: 0px;
  }

  &:hover {
    background: #f4f4f4;
  }

  svg {
    margin-right: 15px;
  }
`;
