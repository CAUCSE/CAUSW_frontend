import { memo } from 'react';

import {
  ProfileImageBox,
  ProfileImage,
  StudentLeaderProfileImage,
  CouncilProfileImage,
  StudentLeaderRoleText,
  CouncilRoleText,
} from './styled';

export const Porfile: React.FC<{ model: Model.User }> = memo(
  ({
    model: {
      profileImage,
      email,
      nameWithAdmission,
      roleTxt,
      isPresidents,
      isCouncil,
      isStudentLeader,
      isVicePresidents,
    },
  }) => {
    return (
      <ProfileImageBox>
        {isPresidents || isCouncil ? (
          <CouncilProfileImage>
            <img src={profileImage ?? ''} alt="user profile image" />
          </CouncilProfileImage>
        ) : isStudentLeader ? (
          <StudentLeaderProfileImage>
            <img src={profileImage ?? ''} alt="user profile image" />
          </StudentLeaderProfileImage>
        ) : (
          <ProfileImage>
            <img src={profileImage ?? ''} alt="user profile image" />
          </ProfileImage>
        )}
        {isPresidents && !isVicePresidents ? (
          <CouncilRoleText>학생회장</CouncilRoleText>
        ) : isVicePresidents ? (
          <CouncilRoleText>부학생회장</CouncilRoleText>
        ) : isCouncil ? (
          <CouncilRoleText>학생회</CouncilRoleText>
        ) : isStudentLeader ? (
          <StudentLeaderRoleText>학년대표</StudentLeaderRoleText>
        ) : null}
        <strong>{email}</strong>
        <br />
        {nameWithAdmission}
        <br />
        {roleTxt}
      </ProfileImageBox>
    );
  },
);
