import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useRef } from 'react';
import { useLongPress } from 'use-long-press';

import { InputState } from '../../../../../../stores/CommentStore';
import { CommentCardView } from '../Comment';
import { Icon, Li } from './styled';

import { useRootStore } from '@/stores/RootStore';

export const ReplyCommentContainer: React.FC<{ model: Model.Comment }> = observer(({ model }) => {
  const ref = useRef<HTMLLIElement>(null);
  const {
    comment: {
      target,
      state,
      scollFocusId,
      menuModal: { open },
    },
  } = useRootStore();
  const commentState = computed(() => (target?.id === model.id ? state : InputState.WRITE)).get();

  const handeLongPress = useCallback(model => () => open(model), [open]);
  const bind = useLongPress(handeLongPress(model), {
    cancelOnMovement: true,
    captureEvent: true,
    onFinish: ev => ev?.preventDefault(),
  });

  useEffect(() => {
    if (scollFocusId === model.id) ref.current?.scrollIntoView({ block: 'center' });
  }, [scollFocusId, model, ref]);

  return (
    <Li ref={ref} {...bind}>
      <Icon src="/images/icons/comment_arrow_icon.svg" alt="reply icon" />
      <CommentCardView state={commentState} model={model} />
    </Li>
  );
});
