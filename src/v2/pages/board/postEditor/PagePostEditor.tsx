import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { generatePath, useHistory } from 'react-router';
import { useParams } from 'react-router-dom';

import { Breadcrumb } from '../components';
import { PostEditor } from './PostEditor';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { BackButton as _BackButton, ClearButton } from '@/v2/components';
import { useInitPage } from '@/v2/hooks';

export const PagePostEditor: React.FC = observer(() => {
  const { boardId } = useParams<{ boardId: string }>();
  const { replace } = useHistory();
  const {
    post: { create, fetch },
  } = useRootStore();
  const methods = useForm();
  const onSubmit = useCallback(
    async data => {
      try {
        const post = (await create(data)) as unknown as Model.Post;

        replace(generatePath(PAGE_URL.PostDetail, { boardId, postId: post.id }));
      } catch (err) {
        // replace(PAGE_URL.Err404);
      }
    },
    [boardId, replace],
  );

  useInitPage({
    Nav: null,
    effect: () => {
      fetch(boardId);
    },
    deps: [boardId],
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Header>
          <BackButton />
          <Breadcrumb />
          <TitleInput {...methods.register('title')} placeholder="제목을 입력하세요" />
          <SubmitButton type="submit">완료 </SubmitButton>
        </Header>
        <PostEditor />
      </Form>
    </FormProvider>
  );
});

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  position: relative;
  padding: 20px 35px 15px 35px;
`;

const BackButton = styled(_BackButton)`
  position: absolute;
  left: 0;
`;

const TitleInput = styled.input`
  margin-top: 8px;
  padding: 0%;
  width: 100%;
  border: 0;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  color: #3f4040;

  &::placeholder {
    color: #dadada;
  }
`;

const SubmitButton = styled(ClearButton)`
  position: absolute;
  top: 15px;
  right: -20px;
  padding-right: 10px;
  width: 50px;
  height: 50px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
`;
