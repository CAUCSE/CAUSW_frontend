import { observer } from 'mobx-react-lite';

import { CommentContainer } from './CommentContainer';
import { CommentsBox } from './styled';

export const PostComments: React.FC<{ list: Model.Comment[] }> = observer(({ list }) => (
  <CommentsBox>
    {list.map(comment => (
      <CommentContainer key={comment.id} model={comment} />
    ))}
  </CommentsBox>
));
