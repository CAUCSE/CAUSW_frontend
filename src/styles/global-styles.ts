import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  // NOTE: 전역 스타일링, 외부 라이브러리 스타일링 변형 추가
  body, #root {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
