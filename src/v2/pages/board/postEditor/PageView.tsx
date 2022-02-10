import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Breadcrumb } from '../components';
import { Editor } from './Editor';

import { useRootStore } from '@/stores/RootStore';
import { BackButton as _BackButton, ClearButton } from '@/v2/components';

interface Porps {
  isEdit: boolean;
  onSubmit: (args: unknown) => void;
}
export const PageView: React.FC<Porps> = observer(({ isEdit, onSubmit }) => {
  const {
    post: { post },
  } = useRootStore();
  const methods = useForm();

  useEffect(() => {
    if (isEdit && post) {
      methods.setValue('title', post.title);
    }

    return () => methods.setValue('title', '');
  }, [isEdit, post]);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Header>
          <BackButton />
          <Breadcrumb />
          <TitleInput {...methods.register('title')} placeholder="제목을 입력하세요" />
          <SubmitButton type="submit">완료 </SubmitButton>
        </Header>
        <Editor content={post?.content ?? ''} />
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
