import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const GlobalStyle = css`
  ${emotionNormalize}

  * {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    color: #3f4040;
  }

  body {
    position: absolute;
    width: 100vw;
    height: 100%;
    font-family: Roboto;
    letter-spacing: -0.333px;

    #root {
      position: absolute;
      bottom: 0;
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
    word-wrap: break-word;
    text-overflow: ellipsis;
  }

  .absolute-center {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;
