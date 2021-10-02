import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { ClearLink } from '@/components/atoms/clear';
import { NotificationIcon } from '@/components/atoms/NotificationIcon';
import { useRootStore } from '@/stores/RootStore';
import { generatePath } from 'react-router';
import { PAGE_URL } from '@/configs/path';

export const Boards: React.FC = observer(() => {
  const {
    board: { list },
  } = useRootStore();

  return (
    <>
      {list.map(({ category, items }) => (
        <Wrapper key={category}>
          <h3>{category}</h3>
          <BoardList items={items} />
        </Wrapper>
      ))}
    </>
  );
});

export const BoardList: React.FC<{ items: Board.Board['items'] }> = React.memo(({ items }) => (
  <ul>
    {items.map(({ key: boardKey, name, notification }) => (
      <li key={boardKey}>
        <Icon active={notification} />
        <ClearLink to={generatePath(PAGE_URL.Post, { boardKey })}>{name}</ClearLink>
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
