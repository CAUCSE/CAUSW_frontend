import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

import { HomeBoardListItem } from './HomeBoardListItem';

import { ListBox } from '@/components/ListBox';
import { useRootStore } from '@/stores/RootStore';
import { BoradIdProvider } from '@/v2/components';

export const HomeBoards: React.FC = observer(() => {
  const {
    home: { boards },
  } = useRootStore();

  return (
    <Wrapper>
      {boards.map(({ board: { id, name }, posts }) => (
        <BoradIdProvider value={id}>
          <ListBox<Model.Post> key={id} title={name} items={posts} ItemComponent={HomeBoardListItem} />
        </BoradIdProvider>
      ))}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin: 32px 0;
`;
