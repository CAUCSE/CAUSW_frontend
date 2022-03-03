import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useCallback, useRef } from 'react';
import { generatePath, useHistory, useParams } from 'react-router-dom';
import { useLongPress } from 'use-long-press';

import { InputState } from '../CommentInput';
import { CommentCardView } from './CommentCardView';
import { ReplyLink } from './styled';

import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

interface Props {
  model: Model.Comment;
  withReplyLink?: boolean;
}
export const CommentCardContainer: React.FC<Props> = observer(
  ({ model, withReplyLink = false }) => {
    const params = useParams<PostParams>();
    const { replace } = useHistory();
    const {
      ui: { alert },
    } = useRootStore();
    const {
      commentInput: { target, state },
      commentMenuModal: { open },
    } = usePageUiStore<PageUiStore.PostDetail>();
    const ref = useRef<HTMLLIElement>(null);
    const commentState = computed(() => (target?.id === model.id ? state : InputState.WRITE)).get();

    const handeLongPress = useCallback(
      (model: Model.Comment | Model.ReplyComment) => () => {
        if (model.editable) open(model);
        else alert({ message: '삭제된 댓글입니다.' });
      },
      [open],
    );
    const bind = useLongPress(handeLongPress(model), {
      cancelOnMovement: true,
      captureEvent: true,
      onFinish: ev => ev?.preventDefault(),
    });

    const handleGoReply = useCallback(
      (params: PostParams, target?: Model.Comment | Model.ReplyComment) => () => {
        if (!target) return;

        replace(generatePath(PAGE_URL.PostReplyComment, { ...params, commentId: target.id }));
      },
      [],
    );

    return (
      <li ref={ref} {...bind}>
        <CommentCardView state={commentState} model={model} />
        {withReplyLink && model.numChildComment ? (
          <ReplyLink onClick={handleGoReply(params, model)}>
            답글 {model.numChildComment}개 더보기
          </ReplyLink>
        ) : null}
      </li>
    );
  },
);
