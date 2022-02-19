import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

import { BoardListItem } from './BoardListItem';

import { ListBox } from '@/components/regacy/ListBox';
import { useRootStore } from '@/stores/RootStore';

export const Boards: React.FC = observer(() => {
  const {
    board: { boards },
  } = useRootStore();

  return (
    <Wrapper>
      {Array.from(boards).map(([category, items]) => (
        <ListBox<Model.Board> key={category} title={category} items={items} ItemComponent={BoardListItem} />
      ))}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin-top: 24px;
`;
