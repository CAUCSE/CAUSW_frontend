import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

import { CircleImageCSS, NameCSS } from '../../styled';

export const Text = styled(Skeleton)`
  margin-bottom: 0.3rem;
  border-radius: 6px;
`;

export const Title = styled(Text)`
  ${NameCSS}
  border-radius: 6px;
`;

export const CircleImage = styled(Skeleton)`
  ${CircleImageCSS}
  padding-bottom: 75%;
`;
