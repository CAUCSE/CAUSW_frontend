import styled from '@emotion/styled';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

import { ClearButton, ProfileImageBox } from '@/v2/components';

export const Button = styled(ClearButton)`
  position: relative;
  display: block;
  margin: 20px auto;
`;

export const TempImage = styled(ProfileImageBox)`
  display: block;
  width: 155px;
  height: 123px;
  border-radius: 27px;
  overflow: hidden;
`;

export const ProfileIcon = styled(FaceRetouchingNaturalIcon)`
  position: absolute;
  right: -25px;
  bottom: 0;
`;
