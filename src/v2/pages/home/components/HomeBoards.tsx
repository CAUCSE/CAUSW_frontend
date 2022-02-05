import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { HomeBoardListItem } from './HomeBoardListItem';

import { ListBox } from '@/components/ListBox';
import { useRootStore } from '@/stores/RootStore';

export const HomeBoards: React.FC = observer(() => {
  const {
    home: { boards },
  } = useRootStore();

  return (
    <Wrapper>
      {boards.map(({ board: { id, name }, posts }) => (
        <ListBox<Model.Post> key={id} title={name} items={posts} ItemComponent={HomeBoardListItem} />
      ))}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin: 32px 0;
`;
