import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ClearButton } from '@/components';

export const SubTitle = styled.h2`
  font-size: 18px;
  line-height: 21px;
`;

export const SelectButton = styled(ClearButton, {
  shouldForwardProp: props => props !== 'hasRole',
})<{ hasRole: boolean }>`
  margin-bottom: 20px;
  width: 100%;
  height: 33px;
  text-align: left;

  ${({ hasRole }) =>
    !hasRole
      ? css`
          font-size: 11px;
          line-height: 13px;
          color: #a3a1a1;
        `
      : null}
`;
