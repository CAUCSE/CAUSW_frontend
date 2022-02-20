import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { generatePath, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

import { BackButton, Header, SubmitButton, TitleInput } from '../styled';

import { Breadcrumb } from '@/components';
import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const TitleInputHeader: React.FC = observer(() => {
  const isEdit = !!useRouteMatch(PAGE_URL.PostEdit);
  const { boardId, postId } = useParams<PostParams>();
  const { state } = useLocation<{ prevDetail: boolean }>();
  const { replace, goBack } = useHistory();
  const { post, boardName, edit, create } = usePageUiStore<PageUiStore.PostEditor>();
  const { register, setValue, handleSubmit } = useFormContext();

  const onSubmit = useCallback(
    async data => {
      let curPostId = postId;

      if (isEdit) await edit(postId, data);
      else {
        const post = (await create({ ...data, boardId })) as unknown as Model.Post;
        curPostId = post.id;
      }

      if (state?.prevDetail) goBack();
      else replace(generatePath(PAGE_URL.PostDetail, { boardId, postId: curPostId }));
    },
    [postId, replace, state],
  );

  useEffect(() => {
    if (isEdit && post) setValue('title', post.title);
    return () => setValue('title', '');
  }, [isEdit, post]);

  return (
    <Header>
      <BackButton />
      <Breadcrumb boardId={boardId} boardName={boardName} />
      <TitleInput {...register('title')} placeholder="제목을 입력하세요" />
      <SubmitButton onClick={handleSubmit(onSubmit)}>완료</SubmitButton>
    </Header>
  );
});
