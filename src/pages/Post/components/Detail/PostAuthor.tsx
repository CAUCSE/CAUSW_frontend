import { memo } from 'react';
import styled from 'styled-components';

export const PostAuthor: React.FC<{ model: Model.Post }> = memo(({ model: { author, formatedCreatedAt } }) => {
  return (
    <Profile>
      <ProfileImage>
        <img src={author.profileImg} alt="author profile image" />
      </ProfileImage>
      <ProfileInfo>
        <div>{author.name}</div>
        <Date>{formatedCreatedAt}</Date>
      </ProfileInfo>
    </Profile>
  );
});

const Profile = styled.div`
  display: flex;
  font-size: 10px;
  line-height: 12px;
  color: #3f4040;
`;

const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  overflow: hidden;

  img {
    height: 100%;
    display: 100%;
  }
`;

const ProfileInfo = styled.div`
  flex: auto 1 0;
  padding: 3px 0 3px 5px;
`;

const Date = styled.div`
  margin-top: 2px;
  color: #dadada;
`;
