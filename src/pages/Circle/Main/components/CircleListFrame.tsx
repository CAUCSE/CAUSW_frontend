import { memo } from 'react';
import { EmptyList } from '.';

interface ListProps {
  readonly items: unknown[];
}
export type ListComponent = React.FC<ListProps>;

interface Props extends ListProps {
  ListComponent: ListComponent;
  emptyText: string;
}

export const CircleListFrame: React.FC<Props> = memo(({ items, emptyText, ListComponent }) =>
  items.length ? <ListComponent items={items} /> : <EmptyList text={emptyText} />,
);
