import styled from '@emotion/styled';

import { ModalBox as _ModalBox } from '@/components';

export const ModalBox = styled(_ModalBox)`
  display: flex;
  flex-direction: column;
  max-height: 80vh;
`;

export const Inner = styled.div`
  padding: 27px 20px;
  overflow: auto;
`;

export const AttachImage = styled.img`
  display: block;
  margin: 0 auto 18px;
  max-width: 100%;
`;

export const Info = styled.div`
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  word-break: break-all;
`;
