import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useRootStore } from '@/stores/RootStore';
import { SendIcon } from '@/components/atoms/Icon';
import { ClearButton } from '@/components/atoms/clear';

export const CommentForm: React.FC = observer(() => {
  const {
    ui: { commentUi },
    post,
  } = useRootStore();
  const { register, handleSubmit, setValue, setFocus } = useForm();
  const onSubmit = useCallback(
    async ({ content }: { content: string }) => {
      const { post: currentPost } = post;

      try {
        if (currentPost) {
          if (!commentUi.isEdit) {
            await commentUi.create({
              postId: currentPost.id,
              content,
            });
            currentPost.upCommentCount();
          } else if (commentUi.target) {
            await commentUi.update(commentUi.target.id, content);
          }

          setValue('content', '');
          // TODO: 댓글 신규 추가 된 경우 해당 댓글로 스크롤 이동
        }
      } catch (e) {
        // TODO: Toast 처리
        alert('잠시 후에 시도해주세요.');
      }
    },
    [commentUi, post, setValue],
  );

  useEffect(() => {
    if (commentUi.isEdit) {
      setValue('content', commentUi.target?.content);
      setFocus('content');
    } else if (commentUi.isReply) {
      setFocus('content');
    } else {
      setValue('content', '');
    }
  }, [commentUi.isEdit, commentUi.isReply]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Textarea {...register('content', { required: true })} rows={1} placeholder="댓글 내용 입력" />
      </Wrapper>
      <SendButton>
        <SendIcon />
      </SendButton>
    </Form>
  );
});

const Form = styled.form`
  display: flex;
  width: 100%;
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
