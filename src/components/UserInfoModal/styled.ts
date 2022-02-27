import styled from '@emotion/styled';

import { ClearButton, ModalBox as _ModalBox } from '..';

export const ModalBox = styled(_ModalBox)`
  padding: 27px 20px;
`;

export const CloseButton = styled(ClearButton)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
`;

export const ProfileImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
`;

export const Info = styled.div`
  margin-top: 18px;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  word-break: break-all;
`;
