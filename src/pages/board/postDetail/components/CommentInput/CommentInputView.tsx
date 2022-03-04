import SendIcon from '@mui/icons-material/Send';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Form, InputBox, SendButton, Textarea } from './styled';

import { usePageUiStore } from '@/hooks';

interface Props {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}
export const CommentInputView: React.FC<Props> = observer(({ onSubmit }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { commentInput } = usePageUiStore<PageUiStore.PostDetail>();
  const { register, setFocus, setValue } = useFormContext();
  const { ref, ...rest } = register('content', { onBlur: () => setisFocus(false) });
  const [isFocus, setisFocus] = useState(false);

  useEffect(() => {
    const { isEdit, isReply, target } = commentInput;
    const content = isEdit && target ? target.content : '';

    if (isEdit || isReply) setFocus('content');
    setValue('content', content);
  }, [commentInput.state, commentInput.target]);

  return (
    <Form onSubmit={onSubmit} isFocus={isFocus}>
      <InputBox>
        <Textarea
          ref={e => {
            ref(e);
            textareaRef.current = e;
          }}
          minRows={1}
          maxRows={3}
          placeholder="댓글 내용 입력"
          onFocus={() => setisFocus(true)}
          {...rest}
        />
      </InputBox>
      <SendButton type="submit">
        <SendIcon />
      </SendButton>
    </Form>
  );
});
