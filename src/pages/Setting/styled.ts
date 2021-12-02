import styled from 'styled-components';
import { ClearLink } from '@/components/atoms/clear';

export const Link = styled(ClearLink)`
  display: block;
  margin: 12px 0;
  font-size: 12px;
  line-height: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;
