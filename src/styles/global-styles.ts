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

  .a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
`;
