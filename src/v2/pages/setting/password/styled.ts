import styled from '@emotion/styled';
import { inputLabelClasses } from '@mui/material';

import { PasswordInput } from '@/v2/components';

export const Input = styled(PasswordInput)`
  margin-top: 13px;

  .${inputLabelClasses.root} {
    font-size: 15px;
    line-height: 18px;
    color: #383743;
    transform: translate(0, -1.5px) scale(1);
  }
`;

export const GuideText = styled.div`
  margin-top: 30px;
  font-size: 14px;
  line-height: 16px;
  color: #a3a1a1;
`;

export const NavWrapper = styled.div`
  padding: 14px 33px;
`;
