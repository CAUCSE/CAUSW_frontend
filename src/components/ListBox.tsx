import React, { memo } from 'react';
import styled from 'styled-components';

interface Props<T> {
  title: string;
  items: T[];
  ItemComponent: React.FC<{ model: T }>;
  EmptyComponent?: React.FC;
}

function ListBoxComponent<T extends { id: string }>({
  title,
  items,
  ItemComponent,
  EmptyComponent = DefaultEmptyComponent,
}: Props<T>) {
  return (
    <Box>
      <Title>{title}</Title>
      {items.length ? items.map(item => <ItemComponent key={item.id} model={item} />) : <EmptyComponent />}
    </Box>
  );
}

export const ListBox = memo(ListBoxComponent) as typeof ListBoxComponent;

export const Box = styled.section`
  padding: 12px 16px 18px;
  border: 0.5px solid #f5f5f5;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 5%);
  background: #fff;
  overflow: hidden;

  & + & {
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
`;

const DefaultEmptyComponent: React.FC = () => (
  <EmptyComponentWrapper>
    <img src="/images/empty.png" alt="Empty list logo" />
    <br />
    작성된 게시글이 없습니다
  </EmptyComponentWrapper>
);

const EmptyComponentWrapper = styled.div`
  margin: 25px 0 7px;
  font-size: 10px;
  line-height: 12px;
  color: #a3a1a1;
  text-align: center;

  > img {
    margin-bottom: 0.15rem;
    width: 15vw;
  }
`;
