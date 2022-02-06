import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PostCreateButton } from './components';
import { Posts } from './components/Posts';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { Header } from '@/v2/components';

export const PagePostList: React.FC = observer(() => {
  const { boardId } = useParams<{ boardId: string }>();
  const {
    post: { boardName, fetch, reset },
  } = useRootStore();

  useEffect(() => {
    fetch(boardId);

    return () => reset();
  }, [boardId]);

  return (
    <>
      <Header title={boardName} withBack={PAGE_URL.Board} RightComponent={PostCreateButton} />
      <Posts />
    </>
  );
});
