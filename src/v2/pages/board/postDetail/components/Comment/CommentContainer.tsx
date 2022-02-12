import { computed } from 'mobx';
import { useCallback, useEffect, useRef } from 'react';
import { useLongPress } from 'use-long-press';

import { InputState } from '../../../../../../stores/CommentStore';
import { CommentView } from './CommentView';

import { useRootStore } from '@/stores/RootStore';

export const CommentContainer: React.FC<{ model: Model.Comment }> = ({ model }) => {
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
    <li ref={ref} {...bind}>
      <CommentView state={commentState} model={model} />
    </li>
  );
};
