import styled from '@emotion/styled';

import { LabelCSS, PasswordInput } from '@/v2/components';

export const Input = styled(PasswordInput)`
  ${LabelCSS}
  margin-top: 13px;
`;

export const GuideText = styled.div`
  margin-top: 30px;
  font-size: 14px;
  line-height: 16px;
  color: #a3a1a1;
`;
