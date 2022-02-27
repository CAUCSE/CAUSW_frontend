import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ClearButton, ClearLink } from './Clear';

export const ModalBox = styled.article`
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  user-select: none;
  outline: none;
  width: 280px;
  overflow: hidden;
  box-sizing: border-box;
`;

const MenuItemCSS = css`
  display: block;
  padding: 13px 0;
  width: 100%;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  color: #383743;
`;

export const ModalMenuLink = styled(ClearLink)`
  ${MenuItemCSS}
`;

export const ModalMenuButton = styled(ClearButton)`
  ${MenuItemCSS}
`;

export const ModalAlertTitle = styled.div`
  margin: 26px 0 14px;

  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

export const ModalAlertMessage = styled.div<{ center?: boolean }>`
  margin: 14px 0 20px;
  padding: 0 20px;

  font-size: 12px;
  line-height: 1.5;
  color: #a3a1a1;
  word-break: keep-all;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const ModalFooter = styled.div`
  display: flex;
  border-top: 1px solid #e4e4e4;
`;

export const ModalFooterButton = styled(ClearButton)`
  flex: 1 1 0;
  height: 38px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  & + & {
    border-left: 1px solid #e4e4e4;
  }
`;
