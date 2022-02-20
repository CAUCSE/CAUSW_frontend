import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { Editor, TitleInputHeader } from './components';
import { PageUiStoreImpl } from './PostEditorPageUiStore';

import { PageBody, PageStoreHOC } from '@/components';
import { PostParams } from '@/configs/path';
import { usePageUiStore } from '@/v2/hooks';

const PostEditorPage: React.FC = observer(() => {
  const { boardId, postId } = useParams<PostParams>();
  const { fetch, reset } = usePageUiStore<PageUiStore.PostEditor>();
  const methods = useForm();

  useEffect(() => {
    fetch(boardId, postId);
    return () => reset();
  }, []);

  return (
    <FormProvider {...methods}>
      <TitleInputHeader />
      <PageBody>
        <Editor />
      </PageBody>
    </FormProvider>
  );
});

export default PageStoreHOC(<PostEditorPage />, { store: PageUiStoreImpl });
