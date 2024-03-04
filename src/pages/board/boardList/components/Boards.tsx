import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { BoardListItem } from './BoardListItem';

import { ListBox } from '@/components';
import { usePageUiStore } from '@/hooks';

export const Boards: React.FC = observer(() => {
  const { boards, deleteBoardModal } = usePageUiStore<PageUiStore.BoardList>();

  return (
    <div style={{ marginTop: '10px' }}>
      {Array.from(boards).map(([category, items]) => (
        <ListBox<Model.Board>
          key={category}
          title={category}
          items={items}
          ItemComponent={BoardListItem}
        />
      ))}
    </div>
  );
});
