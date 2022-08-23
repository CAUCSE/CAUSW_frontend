import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ClearButton } from '@/components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ScrollArea = styled.div`
  flex: 1 0 0;
  padding: 0 20px 20px;
  overflow-y: scroll;
`;

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
  isActive?: boolean;
  isMine?: boolean;
  isSelected?: boolean;
}
const boxStyle = ({ isSelected, isMine, isActive }: CellProps) => css`
  border-radius: 2px;
  border: 1px solid;
  border-color: ${isSelected ? '#312ed7' : isMine ? '#ea4545' : isActive ? '#3f4040' : '#dadada'};
  background-color: ${isSelected
    ? '#312ed7'
    : isMine
    ? '#ea4545'
    : isActive
    ? '#fbfbfb'
    : '#dfdfdf'};

  span {
    color: ${isSelected || isMine ? '#fff' : null};
  }
`;

export const Cell = styled(ClearButton)<CellProps>`
  position: relative;
  padding-bottom: 100%;
  ${props => boxStyle(props)}
`;

export const Legend = styled.div`
  display: flex;
  margin: 0 0 15px;
  padding: 0 20px;
  font-size: 11px;
  line-height: 13px;
  text-align: center;

  > div {
    flex: 1 0 0;
  }
`;

export const LegendBox = styled.div<CellProps>`
  display: inline-block;
  margin-right: 5px;
  width: 10px;
  height: 10px;
  ${props => boxStyle(props)}
`;
