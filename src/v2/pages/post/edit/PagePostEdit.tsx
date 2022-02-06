import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { generatePath, useHistory } from 'react-router';

import { Breadcrumb } from '../components';
import { PostEditor } from '../components/Editor/PostEditor';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { ClearButton } from '@/v2/components';
import { useInitPage } from '@/v2/hooks';

export const PagePostEdit: React.FC = observer(() => {
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

        replace(generatePath(PAGE_URL.PostDetail, { boardId, postId: post.id }));
      } catch (err) {
        replace(PAGE_URL.Err404);
      }
    },
    [boardId, replace],
  );

  useInitPage({
    Nav: null,
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* <Breadcrumb /> */}
        {/* <SubmitButton type="submit">완료</SubmitButton> */}
        {/* <TitleInput {...methods.register('title')} placeholder="제목을 입력하세요" />
        <PostEditor /> */}
      </Form>
    </FormProvider>
  );
});

const Form = styled.form`
  position: relative;
`;

// const TitleInput = styled.input`
//   width: 100%;
//   padding: 0%;
//   border: 0;
//   outline: none;
//   font-size: 18px;
//   font-weight: bold;
//   line-height: 21px;
//   color: #3f4040;

//   &::placeholder {
//     color: inherit;
//   }
// `;

// const SubmitButton = styled(ClearButton)`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 42px;
//   height: 23px;
//   font-size: 14px;
//   line-height: 16px;
//   color: #fff;
//   background: #312ed7;
//   border-radius: 30px;
// `;
