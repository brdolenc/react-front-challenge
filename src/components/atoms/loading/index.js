
import React from 'react';

import * as S from './styles';

const Loading = ({ colorType }) => {

  const color = colorType === 'white' ? '#FFFFFF' : '#CCCCCC';

  return (
    <S.LoadingContainer>
      <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 30" enableBackground="new 0 0 0 0">
        <circle fill={color} stroke="none" cx="29" cy="25" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>    
        </circle>
        <circle fill={color} stroke="none" cx="49" cy="25" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>       
        </circle>
        <circle fill={color} stroke="none" cx="69" cy="25" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>     
        </circle>
      </svg>
    </S.LoadingContainer>
  )
};

export default Loading;