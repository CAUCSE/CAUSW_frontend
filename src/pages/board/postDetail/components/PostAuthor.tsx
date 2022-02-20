import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';

import { PostAuthorNameCSS, PostCreatedAt, PostProfileImage, PostWrapperCSS } from '@/components';

export const PostAuthor: React.FC<{ model: Model.Author; date: string }> = observer(
  ({ model: { nameWithAdmission, profileImage }, date }) => (
    <Profile>
      <PostProfileImage>
        <img src={profileImage} alt="author profile image" />
      </PostProfileImage>
      <AuthorName>{nameWithAdmission}</AuthorName>
      <PostCreatedAt>{date}</PostCreatedAt>
    </Profile>
  ),
);

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
