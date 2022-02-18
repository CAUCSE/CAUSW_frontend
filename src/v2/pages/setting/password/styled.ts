import styled from '@emotion/styled';

import { LabelCSS, PasswordInput } from '@/v2/components';

export const Form = styled.form`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Input = styled(PasswordInput)`
  ${LabelCSS}
  margin-top: 13px;
`;

export const GuideText = styled.div`
  margin-top: 30px;
  font-size: 14px;
  line-height: 20px;
  color: #a3a1a1;
`;
