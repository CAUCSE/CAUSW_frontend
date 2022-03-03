import { memo } from 'react';

import { ProfileImageBox, ProfileImage } from './styled';

export const Porfile: React.FC<{ model: Model.User }> = memo(
  ({ model: { profileImage, email, nameWithAdmission, roleTxt } }) => {
    return (
      <ProfileImageBox>
        <ProfileImage>
          <img src={profileImage ?? ''} alt="user profile image" />
        </ProfileImage>
        <strong>{email}</strong>
        <br />
        {nameWithAdmission}
        <br />
        {roleTxt}
      </ProfileImageBox>
    );
  },
);
