import { memo } from 'react';

import { Wrapper } from '../styled';

import { EmptyList } from '@/components';

interface ListProps {
  readonly items: Model.Circle[];
}
export type ListComponent = React.FC<ListProps>;

interface Props extends ListProps {
  ListComponent: ListComponent;
  emptyText: string;
}

export const CircleListFrame: React.FC<Props> = memo(({ items, emptyText, ListComponent }) =>
  items.length ? (
    <ListComponent items={items} />
  ) : (
    <Wrapper>
      <EmptyList text={emptyText} />
    </Wrapper>
  ),
);
