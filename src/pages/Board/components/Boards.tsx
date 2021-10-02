import React from 'react';
import styled from 'styled-components';
import { ClearLink } from '@/components/atoms/clear';
import { NotificationIcon } from '@/components/atoms/NotificationIcon';

export const Boards: React.FC<{ board: Board.Board[] }> = React.memo(({ board }) => (
  <>
    {board.map(({ category, list }) => (
      <Wrapper key={category}>
        <h3>{category}</h3>
        <BoardList items={list} />
      </Wrapper>
    ))}
  </>
));

export const BoardList: React.FC<{ items: Board.List[] }> = React.memo(({ items }) => (
  <ul>
    {items.map(({ key, name, notification }) => (
      <li key={key}>
        <Icon active={notification} />
        <ClearLink to={`#${key}`}>{name}</ClearLink>
      </li>
    ))}
  </ul>
));

const Wrapper = styled.section`
  padding: 0;
  margin-bottom: 13px;

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    margin: 0 0 8px;
    font-size: 16px;
    line-height: 19px;
  }

  ul {
    margin: 0;
    padding: 6px 0;
    list-style: none;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 10px;

    li {
      position: relative;
      padding: 6px 0 6px 50px;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

const Icon = styled(NotificationIcon)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-5px);
  z-index: 1;
`;
