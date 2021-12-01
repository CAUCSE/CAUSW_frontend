import { memo } from 'react';
import styled from 'styled-components';
import * as Post from '@/components/StyledPost';

export const PostAuthor: React.FC<{ model: Model.Author; date: string }> = memo(
  ({ model: { nameWithAdmission, profileImage }, date }) => (
    <Profile>
      <Post.ProfileImage>
        <img src={profileImage} alt="author profile image" />
      </Post.ProfileImage>
      <AuthorName>{nameWithAdmission}</AuthorName>
      <Post.CreatedDate>{date}</Post.CreatedDate>
    </Profile>
  ),
);

const Profile = styled.div`
  ${Post.WrapperCSS}
  align-items: center;
  font-size: 10px;
  line-height: 12px;
`;

const AuthorName = styled.div`
  ${Post.AuthorNameCSS}
  font-size: 10px;
  line-height: 12px;
`;
