import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import * as S from './styled';

export const PageSkeleton: React.FC = () => (
  <>
    <Title variant="rectangular" height={21} />
    <Image variant="rectangular" />
    <Text variant="rectangular" width="30%" height={14} />
    <Text variant="rectangular" width="35%" height={14} />
    <Text variant="rectangular" width="60%" height={14} />
    <S.Hr />
    <Text variant="rectangular" width="80%" height={14} />
    <Text variant="rectangular" width="60%" height={14} />
  </>
);

const Text = styled(Skeleton)`
  margin-bottom: 0.3rem;
  border-radius: 6px;
`;

const Title = styled(Text)`
  ${S.NameCSS}
  border-radius: 6px;
`;

const Image = styled(Skeleton)`
  ${S.ImageCSS}
  padding-bottom: 75%;
`;
