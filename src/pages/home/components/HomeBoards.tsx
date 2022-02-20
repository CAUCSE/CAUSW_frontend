import { observer } from 'mobx-react-lite';
import { generatePath } from 'react-router-dom';

import { HomeBoardListItem } from './HomeBoardListItem';

import { BoradIdProvider, ListBox } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const HomeBoards: React.FC = observer(() => {
  const { boards } = usePageUiStore<PageUiStore.Home>();

  return (
    <div style={{ margin: '32px 0' }}>
      {boards.map(({ board: { id, name }, posts }) => (
        <BoradIdProvider key={id} value={id}>
          <ListBox<Model.Post>
            title={name}
            titleTo={generatePath(PAGE_URL.PostList, { boardId: id })}
            items={posts}
            ItemComponent={HomeBoardListItem}
          />
        </BoradIdProvider>
      ))}
    </div>
  );
});
