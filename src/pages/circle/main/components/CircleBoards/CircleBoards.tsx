import { observer } from 'mobx-react-lite';
import { generatePath } from 'react-router-dom';

import { CircleBoardListItem } from './CircleBoardListItem';

import { ListBox } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { BoradIdProvider } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

export const CircleBoards: React.FC = observer(() => {
  const { boards } = usePageUiStore<PageUiStore.CircleMain>();

  return (
    <>
      {boards.map(({ board: { id, name }, post }) => (
        <BoradIdProvider key={id} value={id}>
          <ListBox<NonNullable<Model.CircleBoard['post']>>
            title={name}
            titleTo={generatePath(PAGE_URL.PostList, { boardId: id })}
            items={post ? [post] : []}
            ItemComponent={CircleBoardListItem}
          />
        </BoradIdProvider>
      ))}
    </>
  );
});
