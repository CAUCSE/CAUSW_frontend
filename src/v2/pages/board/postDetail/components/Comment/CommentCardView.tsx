import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

import { InputState } from '../../../../../../stores/CommentStore';

import { PostAuthorNameCSS, PostCreatedAt, PostProfileImage, PostWrapperCSS } from '@/v2/components';

interface Props {
  state: InputState;
  model: Model.Comment;
}

export const CommentCardView: React.FC<Props> = observer(
  ({
    state,
    model: {
      author: { nameWithAdmission, profileImage },
      formatedDate,
      content,
    },
  }) => (
    <Comment state={state}>
      <Profile>
        <PostProfileImage>
          <img src={profileImage} alt="author profile image" />
        </PostProfileImage>
        <AuthorName>{nameWithAdmission}</AuthorName>
        <PostCreatedAt>{formatedDate}</PostCreatedAt>
      </Profile>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Comment>
  ),
);

const Comment = styled.div<Pick<Props, 'state'>>`
  flex: 1 0 0;
  position: relative;
  margin-top: 5px;
  padding: 7px 10px;

  border-radius: 10px;
  background: ${({ state }) => {
    if (state === InputState.REPLY) return '#FFCACA';
    else if (state === InputState.EDIT) return '#FFEACA';
    else return '#F5F5F5';
  }};
  user-select: none;
`;

const Profile = styled.div`
  ${PostWrapperCSS}
  align-items: center;
  font-size: 10px;
  line-height: 12px;
`;

const AuthorName = styled.div`
  ${PostAuthorNameCSS}
  font-size: 10px;
  line-height: 12px;
`;

const Content = styled.p`
  margin: 0.5rem 0;
  width: 100%;
  font-size: 13px;
  line-height: 15px;
  word-break: break-all;

  p {
    margin: 0;
  }
`;
