import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ClearButton } from '@/components';

export const Gird = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  border: 1px solid #fbfbfb;
  border-radius: 3px;
  background: #fbfbfb;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`;

interface CellProps {
  isActive: boolean;
  isMine: boolean;
  isSeleted: boolean;
}
export const Cell = styled(ClearButton)<CellProps>`
  position: relative;
  padding-bottom: 100%;
  border-radius: 2px;
  border: 1px solid;

  ${({ isSeleted, isMine, isActive }) => css`
    border-color: ${isSeleted ? '#312ed7' : isMine ? '#ea4545' : isActive ? '#dadada' : '#3f4040'};
    background-color: ${isSeleted
      ? '#312ed7'
      : isMine
      ? '#ea4545'
      : isActive
      ? '#dfdfdf'
      : '#fbfbfb'};

    span {
      color: ${isSeleted || isMine ? '#fff' : null};
    }
  `}
`;
