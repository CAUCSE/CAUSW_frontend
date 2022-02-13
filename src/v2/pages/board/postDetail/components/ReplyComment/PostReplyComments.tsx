import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { generatePath, useParams } from 'react-router-dom';

import { CommentCard } from '../Comment';
import { ReplyCommentContainer } from './ReplyCommentContainer';
import { BackLink, CommentsBox } from './styled';

import { PAGE_URL, PostReplyCommentParams } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

export const PostReplyComments: React.FC = observer(() => {
  const { boardId, postId, commentId } = useParams<PostReplyCommentParams>();
  const {
    replyComment: { fetch, parent, comments },
  } = useRootStore();

  useEffect(() => {
    fetch(commentId, 0);
  }, [commentId]);

  return parent ? (
    <CommentsBox>
      <BackLink to={generatePath(PAGE_URL.PostDetail, { boardId, postId })}>전체 댓글</BackLink>
      <CommentCard model={parent} />
      {comments.map(comment => (
        <ReplyCommentContainer key={comment.id} model={comment} />
      ))}
    </CommentsBox>
  ) : null;
});
