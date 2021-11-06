import React, { memo } from 'react';
import styled from 'styled-components';

interface Props<T> {
  title: string;
  items: T[];
  ItemComponent: React.FC<{ model: T }>;
}

function ListBoxComponent<T extends { id: string }>({ title, items, ItemComponent }: Props<T>) {
  return (
    <Box>
      <Title>{title}</Title>
      {items.map(item => (
        <ItemComponent key={item.id} model={item} />
      ))}
    </Box>
  );
}

export const ListBox = memo(ListBoxComponent) as typeof ListBoxComponent;

const Box = styled.section`
  padding: 12px 16px 18px;
  border: 0.5px solid #f5f5f5;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
  background: #fff;
  overflow: hidden;

  & + & {
    margin-top: 20px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
`;
