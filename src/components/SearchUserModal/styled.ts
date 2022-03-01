import styled from '@emotion/styled';

import { ClearButton, ModalBox as _ModalBox } from '@/components';

export const ModalBox = styled(_ModalBox)`
  padding: 10px 20px;
  max-height: 210px;
  overflow-y: scroll;
`;

export const Button = styled(ClearButton)`
  width: 100%;
  height: 38px;
`;

export const Text = styled.div`
  width: 100%;
  -webkit-line-clamp: 1;
  text-align: left;
`;
