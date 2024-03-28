import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Editor } from './components/Editor';
import { TitleInputHeader } from './components/TitleInputHeader';
import { PageUiStoreImpl } from './PostEditorPageUiStore';

import { PageStoreHOC } from '@/components';
import { PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const PostEditorPage: React.FC = observer(() => {
  const { boardId, postId } = useParams<PostParams>();
  const { fetch, reset } = usePageUiStore<PageUiStore.PostEditor>();
  const methods = useForm();

  useEffect(() => {
    fetch(boardId, postId);
    return () => reset();
  }, [fetch, boardId, postId, reset]);

  return (
    <FormProvider {...methods}>
      <TitleInputHeader />
      <Editor />
    </FormProvider>
  );
});

export default PageStoreHOC(<PostEditorPage />, { store: PageUiStoreImpl });
