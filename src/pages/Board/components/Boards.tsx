import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { ListBox } from '@/components/ListBox';
import { BoardListItem } from './BoardListItem';

export const Boards: React.FC = observer(() => {
  const {
    board: { boards },
  } = useRootStore();

  return (
    <>
      {Array.from(boards).map(([category, items]) => (
        <ListBox<Model.Board> key={category} title={category} items={items} ItemComponent={BoardListItem} />
      ))}
    </>
  );
});
