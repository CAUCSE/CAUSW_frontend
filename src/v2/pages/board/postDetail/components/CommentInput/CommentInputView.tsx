import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { usePageUiStore } from '../../PagePostDetailUiStore';
import { Form, InputBox, SendButton, Textarea } from './styled';

import { SendIcon } from '@/components/atoms/Icon';

interface Props {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}
export const CommentInputView: React.FC<Props> = observer(({ onSubmit }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { commentInput } = usePageUiStore();
  const { register, setFocus, setValue } = useFormContext();
  const { ref, ...rest } = register('content', { required: true });
  const handleResizeHeight = useCallback(({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    target.style.height = 'inherit';
    target.style.height = `${Math.min(target.scrollHeight, 45)}px`;
  }, []);

  useEffect(() => {
    const { isEdit, isReply, target } = commentInput;
    const content = isEdit && target ? target.content : '';

    if (isEdit || isReply) setFocus('content');
    setValue('content', content);

    if (textareaRef.current)
      handleResizeHeight({ target: textareaRef.current } as React.ChangeEvent<HTMLTextAreaElement>);
  }, [commentInput.state, commentInput.target]);

  return (
    <Form onSubmit={onSubmit}>
      <InputBox>
        <Textarea
          ref={e => {
            ref(e);
            textareaRef.current = e;
          }}
          rows={1}
          placeholder="댓글 내용 입력"
          onInput={handleResizeHeight}
          {...rest}
        />
      </InputBox>
      <SendButton type="submit">
        <SendIcon />
      </SendButton>
    </Form>
  );
});
