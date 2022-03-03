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

export const Title = styled.h3`
  margin: 20px 0 15px;
  font-size: 14px;
  line-height: 16px;
`;

export const Desc = styled.div`
  font-size: 12px;
  line-height: 1.5;
`;

export const Guide = styled.div`
  margin-top: 20px;
  font-size: 12px;
  line-height: 14px;
  color: #a3a1a1;
`;
