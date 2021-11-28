import { memo } from 'react';
import styled from 'styled-components';

export const PostAuthor: React.FC<{ model: Model.Author; date: string }> = memo(
  ({ model: { nameWithAdmission, profileImage }, date }) => (
    <Profile>
      <ProfileImage>
        <img src={profileImage} alt="author profile image" />
      </ProfileImage>
      <ProfileInfo>
        <Name>{nameWithAdmission}</Name>
        <Date>{date}</Date>
      </ProfileInfo>
    </Profile>
  ),
);

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
    width: 100%;
    height: 100%;
  }
`;

const ProfileInfo = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  flex: 1 1 0;
  padding-left: 8px;
  font-size: 10px;
  line-height: 12px;
`;

const Date = styled.div`
  width: 50px;
  text-align: right;
  color: #dadada;
`;
