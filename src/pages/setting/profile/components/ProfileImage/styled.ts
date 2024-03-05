import styled from '@emotion/styled';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

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

export const ProfileIcon = styled(FaceRetouchingNaturalIcon)`
  position: absolute;
  right: -25px;
  bottom: 0;
`;
