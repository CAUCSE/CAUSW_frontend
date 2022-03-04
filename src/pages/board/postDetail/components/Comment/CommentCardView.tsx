import { observer } from 'mobx-react-lite';

import { InputState } from '../CommentInput';
import { AuthorName, CommentCard, Content, Profile } from './styled';

import { PostCreatedAt, PostProfileImage } from '@/components';

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
      newLineContent,
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
        dangerouslySetInnerHTML={{ __html: newLineContent }}
        tagUserName={(other as Model.ReplyComment).tagUserName}
      />
    </CommentCard>
  ),
);
