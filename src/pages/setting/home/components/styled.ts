import styled from '@emotion/styled';
import StarIcon from '@mui/icons-material/Star';

export const ProfileImageBox = styled.div`
  position: relative;
  margin: 42px 0 22px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

export const ProfileImage = styled.div`
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

export const CouncilProfileImage = styled(ProfileImage)`
  border: 3px solid #312ed7;
`;

export const StudentLeaderProfileImage = styled(ProfileImage)`
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 5%);
`;

export const StudentLeaderRoleText = styled.div`
  font-size: 12px;
  color: white;
  position: absolute;
  bottom: 0;
  width: 60px;
  height: 17px;
  border-radius: 3px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  overflow: hidden;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CouncilRoleText = styled(StudentLeaderRoleText)`
  background-color: #312ed7;
  border: 1px solid #312ed7;
`;
