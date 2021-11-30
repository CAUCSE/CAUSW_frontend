import { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { FormProvider, useForm } from 'react-hook-form';
import { useRootStore } from '@/stores/RootStore';
import { PostProvider } from '@/stores/PostStore';
import { Breadcrumb } from './components/Detail/Breadcrumb';
import { PostEditor } from './components/Editor/PostEditor';
import { Form, TitleInput, SubmitButton } from './components/Editor/styled';
import { generatePath, useHistory } from 'react-router';
import { PAGE_URL } from '@/configs/path';

export const PagePostEditor: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    board: { boardId },
    post: { create },
  } = useRootStore();
  const methods = useForm();
  const onSubmit = useCallback(
    async data => {
      try {
        const post = (await create(data)) as unknown as Model.Post;

        replace(generatePath(PAGE_URL.PostDetail, { postId: post.id as string }));
      } catch (err) {
        replace(PAGE_URL.Err404);
      }
    },
    [boardId, replace],
  );

  return (
    <PostProvider>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Breadcrumb />
          <SubmitButton>완료</SubmitButton>
          <TitleInput {...methods.register('title')} placeholder="제목을 입력하세요" />
          <PostEditor />
        </Form>
      </FormProvider>
    </PostProvider>
  );
});
