import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { Form, InputBox, SendButton, Textarea } from './styled';

import { SendIcon } from '@/components/atoms/Icon';

interface Props {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}
export const CommentInputView: React.FC<Props> = ({ onSubmit }) => {
  const { register } = useFormContext();
  const handleResizeHeight = useCallback(({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    target.style.height = 'inherit';
    target.style.height = `${Math.min(target.scrollHeight, 45)}px`;
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <InputBox>
        <Textarea
          {...register('content', { required: true })}
          rows={1}
          placeholder="댓글 내용 입력"
          onInput={handleResizeHeight}
        />
      </InputBox>
      <SendButton type="submit">
        <SendIcon />
      </SendButton>
    </Form>
  );
};
