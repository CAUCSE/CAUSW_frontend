import styled from '@emotion/styled';
import Skeleton from '@mui/material/Skeleton';

import { PostWrapperCSS } from '@/components';

export const Text = styled(Skeleton)`
  border-radius: 6px;
`;

export const Card = styled.article`
  ${PostWrapperCSS}
  padding: 1rem 0 0.75rem;
  border-bottom: 1px solid #f5f5f5;
`;
