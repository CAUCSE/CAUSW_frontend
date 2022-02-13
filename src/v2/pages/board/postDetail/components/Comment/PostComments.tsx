import { observer } from 'mobx-react-lite';

import { CommentCardContainer } from './CommentCardContainer';
import { CommentsBox } from './styled';

import { useRootStore } from '@/stores/RootStore';

export const PostComments: React.FC = observer(() => {
  const {
    comment: { comments },
  } = useRootStore();

  return (
    <CommentsBox>
      {comments.map(comment => (
        <CommentCardContainer key={comment.id} model={comment} withReplyLink />
      ))}
    </CommentsBox>
  );
});
