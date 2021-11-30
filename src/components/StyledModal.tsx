import styled, { css } from 'styled-components';
import { ClearButton, ClearLink } from './atoms/clear';

export const Dimmed = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(50, 50, 50, 0.4);
  user-select: none;
`;

export const ModalBox = styled.article`
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  background: #fff;
  border-radius: 10px;
  user-select: none;
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
