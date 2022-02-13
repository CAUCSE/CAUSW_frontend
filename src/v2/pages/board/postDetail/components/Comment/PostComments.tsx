import { observer } from 'mobx-react-lite';

import { CommentCardContainer } from './CommentCardContainer';
import { CommentsBox } from './styled';

export const PostComments: React.FC<{ list: Model.Comment[] }> = observer(({ list }) => (
  <CommentsBox>
    {list.map(comment => (
      <CommentCardContainer key={comment.id} model={comment} />
    ))}
  </CommentsBox>
));
