import styled from 'styled-components';

export const ContainerPage = styled.div`
  max-width: 1200px;
  padding: 15px;
  box-sizing: border-box;
  margin: 0 auto;

  p {
    font-size: 13px; 
    color: #666666;
  }
`;


export const ListCategories = styled.div`
  display: flex;
  margin-left: -5px;
  margin-right: -5px;

  @media (max-width: 900px) {
    display: block;
  }

  & > span {
    display: flex;
    width: 100%;

    @media (max-width: 900px) {
      display: block;
    }

    & > span {
      width: 100%;
      margin: 5px;

      @media (max-width: 900px) {
        width: calc(50% - 10px);
        display: inline-block;
      }
    }
  }

  button {
    width: 100%;

    @media (max-width: 900px) {
      width: calc(50% - 10px);
      display: inline-block;
    }
  }
`;


export const ListProducts = styled.div`
  display: flex;
  margin-left: -5px;
  margin-right: -5px;
  flex-wrap: wrap;

  & > span {
    display: flex;
    width: 100%;

    @media (max-width: 900px) {
      display: block;
    }

    & > span {
      width: 100%;
      margin: 5px;

      @media (max-width: 900px) {
        width: calc(50% - 10px);
        display: inline-block;
      }
    }
  }

  p {
    margin: 5px;
  }

  & > div {
    flex: 1;
  }
`;


