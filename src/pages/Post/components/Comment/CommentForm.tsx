import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useRootStore } from '@/stores/RootStore';
import { SendIcon } from '@/components/atoms/Icon';
import { ClearButton } from '@/components/atoms/clear';

export const CommentForm: React.FC = () => {
  const {
    ui: {
      commentUi: { create },
    },
    post,
  } = useRootStore();
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(
    async ({ content }: { content: string }) => {
      const { post: currentPost } = post;

      try {
        if (currentPost) {
          await create({
            postId: currentPost.id,
            content,
          });
          setValue('content', '');
          currentPost.upCommentCount();
          // TODO: 댓글 신규 추가 된 경우 해당 댓글로 스크롤 이동
        }
      } catch (e) {
        // TODO: Toast 처리
        alert('잠시 후에 시도해주세요.');
      }
    },
    [post, create, setValue],
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Textarea rows={1} placeholder="댓글 내용 입력" {...register('content', { required: true })} />
      </Wrapper>
      <SendButton>
        <SendIcon />
      </SendButton>
    </Form>
  );
};

const Form = styled.form`
  box-sizing: border-box;
  display: flex;
`;

const Wrapper = styled.div`
  margin: 5px 0 5px 8px;
  padding: 0.75rem;
  flex: 1 1 0;
  border-radius: 15px;
  background: #f3f3f3;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 0;
  outline: none;
  resize: none;
  font-size: 13px;
  line-height: 15px;
  background: inherit;
  &::placeholder {
    color: '#BDBDBD';
  }
`;

const SendButton = styled(ClearButton)`
  width: 50px;
`;
