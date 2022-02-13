import { observer } from 'mobx-react-lite';

import { InputState } from '../CommentInput';
import { AuthorName, CommentCard, Content, Profile } from './styled';

import { PostCreatedAt, PostProfileImage } from '@/v2/components';

interface Props {
  state: InputState;
  model: Model.Comment | Model.ReplyComment;
}

export const CommentCardView: React.FC<Props> = observer(
  ({
    state,
    model: {
      author: { nameWithAdmission, profileImage },
      formatedDate,
      linedContent,
      ...other
    },
  }) => (
    <CommentCard state={state}>
      <Profile>
        <PostProfileImage>
          <img src={profileImage} alt="author profile image" />
        </PostProfileImage>
        <AuthorName>{nameWithAdmission}</AuthorName>
        <PostCreatedAt>{formatedDate}</PostCreatedAt>
      </Profile>
      <Content
        dangerouslySetInnerHTML={{ __html: linedContent }}
        tagUserName={(other as Model.ReplyComment).tagUserName}
      />
    </CommentCard>
  ),
);
