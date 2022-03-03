import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ClearButton, ClearLink } from '@/components';

const LinkCss = css`
  display: block;
  margin: 12px 0;
  font-size: 12px;
  line-height: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Link = styled(ClearLink)`
  ${LinkCss}
`;

export const LinkButton = styled(ClearButton)`
  ${LinkCss}
`;
