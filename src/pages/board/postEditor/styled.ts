import styled from '@emotion/styled';

import { BackButton as _BackButton, ClearButton } from '@/v2/components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  position: relative;
  padding: 20px 55px 15px;
`;

export const BackButton = styled(_BackButton)`
  position: absolute;
  left: 0;
  margin-left: 0;
`;

export const TitleInput = styled.input`
  margin-top: 8px;
  padding: 0%;
  width: 100%;
  border: 0;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  color: #3f4040;

  &::placeholder {
    color: #dadada;
  }
`;

export const SubmitButton = styled(ClearButton)`
  position: absolute;
  top: 15px;
  right: 0;
  padding-right: 10px;
  width: 50px;
  height: 50px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
`;

export const EditorWrapper = styled.div`
  flex: 1 0 0;
  padding: 0 20px;

  .quill {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .ql-toolbar.ql-snow {
    position: fixed;
    z-index: 1;
    padding: 0 0 8px;
    width: 100%;
    border: 0;
    background: #fff;
  }

  .ql-container.ql-snow {
    flex: 1 0 0;
    padding: 32px 0 8px;
    border: 0;
  }

  .ql-editor &.ql-blank::before {
    left: 7px;
    font-size: 14px;
    font-style: normal;
    line-height: 16px;
    color: #dadada;
  }
`;
