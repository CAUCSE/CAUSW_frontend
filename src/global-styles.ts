import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const GlobalStyle = css`
  ${emotionNormalize}

  * {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
  }

  html {
    height: -webkit-fill-available;
  }

  body {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    font-family: Roboto;
    letter-spacing: -0.333px;

    #root {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;

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
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .text-ellipsis-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .absolute-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition:
      background-color 600000s 0s,
      color 600000s 0s;
  }
  input[data-autocompleted] {
    background-color: transparent !important;
  }

  .ql-editor {
    padding: 0;
    font-size: 14px;
    line-height: 16px;
    color: #3f4040;
    overflow-y: hidden;
  }
`;
