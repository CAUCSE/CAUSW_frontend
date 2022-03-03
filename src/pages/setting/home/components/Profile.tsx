import styled from '@emotion/styled';
import { memo } from 'react';

export const Porfile: React.FC<{ model: Model.User }> = memo(
  ({ model: { profileImage, email, nameWithAdmission, roleTxt } }) => {
    return (
      <Wrapper>
        <ProfileImage>
          <img src={profileImage ?? ''} alt="user profile image" />
        </ProfileImage>
        <strong>{email}</strong>
        <br />
        {nameWithAdmission}
        <br />
        {roleTxt}
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  margin: 42px 0 22px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

const ProfileImage = styled.div`
  margin: 0 auto 18px;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  border: 1px solid #f5f5f5;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 5%);
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;
