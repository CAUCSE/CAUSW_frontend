import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@/stores/RootStore';
import { ListBox } from '@/components/ListBox';
import { HomeBoardListItem } from './HomeBoardListItem';

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
  margin-top: 32px;
`;
