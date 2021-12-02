import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  // NOTE: 전역 스타일링, 외부 라이브러리 스타일링 변형 추가
  body {
    position: absolute;
    width: 100vw;
    height: 101vh;
    font-family: Roboto;
    letter-spacing: -0.333px;

    #root {
      position: absolute;
      bottom: 0;
      height: 100vh;
      display: flex;
	    flex-direction: column;
      width: 100%;
      height: 100%;

      + * {
		    display: flex;
		    flex-direction: column;
      }
    }
  }

  .a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }

  .text-ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-wrap:break-word; 
    text-overflow: ellipsis;
  }

  .absolute-center {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
`;
