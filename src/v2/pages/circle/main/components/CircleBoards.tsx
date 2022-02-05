import { observer } from 'mobx-react-lite';

import { CircleBoardListItem } from './CircleBoardListItem';

import { ListBox } from '@/components/ListBox';
import { useRootStore } from '@/stores/RootStore';

export type Model = NonNullable<Model.CircleBoard['post']>;

export const CircleBoards: React.FC = observer(() => {
  const {
    circle: { boards },
  } = useRootStore();

  return (
    <>
      {boards.map(({ board: { id, name }, post }) => (
        <ListBox<Model> key={id} title={name} items={post ? [post] : []} ItemComponent={CircleBoardListItem} />
      ))}
    </>
  );
});
