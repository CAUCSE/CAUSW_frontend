import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { generatePath, useHistory, useParams } from 'react-router-dom';

import { usePageUiStore } from '../../PagePostDetailUiStore';
import { CommentCard } from '../Comment';
import { ReplyCommentContainer } from './ReplyCommentContainer';
import { BackLink, CommentsBox } from './styled';

import { PAGE_URL, PostParams } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

export const PostReplyComments: React.FC = observer(() => {
  const { boardId, postId, commentId } = useParams<PostParams>();
  const { replace } = useHistory();
  const {
    replyComment: { fetch, parent, comments },
  } = useRootStore();
  const {
    commentInput: { resetState },
  } = usePageUiStore();

  const handleBack = useCallback(
    () => replace(generatePath(PAGE_URL.PostDetail, { boardId, postId })),
    [boardId, postId],
  );

  useEffect(() => {
    resetState();
    fetch(commentId, 0);

    return () => resetState();
  }, [commentId]);

  return parent ? (
    <CommentsBox>
      <BackLink onClick={handleBack}>전체 댓글</BackLink>
      <CommentCard model={parent} />
      {comments.map(comment => (
        <ReplyCommentContainer key={comment.id} model={comment} />
      ))}
    </CommentsBox>
  ) : null;
});
