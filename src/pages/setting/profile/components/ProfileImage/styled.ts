import styled from '@emotion/styled';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import StarIcon from '@mui/icons-material/Star';

import { ClearButton, ProfileImageBox } from '@/components';

export const Button = styled(ClearButton)`
  position: relative;
  display: block;
  margin: 10px auto 20px;
`;

export const TempImage = styled(ProfileImageBox)`
  display: block;
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

export const CouncilTempImage = styled(TempImage)`
  border: 3px solid #312ed7;
`;

export const LeaderTempImage = styled(TempImage)`
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 5%);
`;

export const LeaderRoleText = styled.div`
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  overflow: hidden;
`;

export const CouncilRoleText = styled(LeaderRoleText)`
  background-color: #312ed7;
  border: 1px solid #312ed7;
`;

export const ProfileIcon = styled(FaceRetouchingNaturalIcon)`
  position: absolute;
  right: -25px;
  bottom: 0;
`;

export const PresidentsIcon = styled(StarIcon)`
  color: #312ed7;
  position: absolute;
  right: 20px;
  top: 0;
`;
