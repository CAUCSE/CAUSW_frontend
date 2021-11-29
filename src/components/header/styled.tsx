import React, { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { ClearButton, ClearUl } from '../atoms/clear';

export const RightButtonWrapper = css`
  position: relative;
  right: -20px;
  display: block;
  width: 50px;
  height: 50px;
`;

export const MenuBox = styled(ClearUl)<{ visiable?: boolean }>`
  position: absolute;
  top: 50px;
  right: 5px;
  background: #fff;
  box-shadow: 1px 2px 4px rgb(0 0 0 / 25%);
  visibility: ${({ visiable }) => (visiable ? 'visible' : 'hidden')};
  opacity: ${({ visiable }) => (visiable ? 1 : 0)};
  transition: visibility 1s, opacity 0.2s ease-in-out;
`;

const StyledMenuButton = styled(ClearButton)`
  padding: 0 15px;
  width: 150px;
  height: 40px;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
`;

export const MenuButton: React.FC<{ onClick?: MouseEventHandler<HTMLButtonElement> }> = ({ children, onClick }) => (
  <li>
    <StyledMenuButton onClick={onClick}>{children}</StyledMenuButton>
  </li>
);
