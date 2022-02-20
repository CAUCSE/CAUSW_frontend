import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useCallback, useRef } from 'react';
import { useLongPress } from 'use-long-press';

import { CommentCardView } from '../Comment';
import { InputState } from '../CommentInput';
import { Li } from './styled';

import { usePageUiStore } from '@/hooks';

export const ReplyCommentContainer: React.FC<{ model: Model.Comment }> = observer(({ model }) => {
  const ref = useRef<HTMLLIElement>(null);
  const {
    commentInput,
    commentMenuModal: { open },
  } = usePageUiStore<PageUiStore.PostDetail>();
  const state = computed(() =>
    commentInput.target?.id === model.id ? commentInput.state : InputState.WRITE,
  ).get();

  const handeLongPress = useCallback(model => () => open(model), [open]);
  const bind = useLongPress(handeLongPress(model), {
    cancelOnMovement: true,
    captureEvent: true,
    onFinish: ev => ev?.preventDefault(),
  });

  return (
    <Li ref={ref} {...bind}>
      <CommentCardView state={state} model={model} />
    </Li>
  );
});
