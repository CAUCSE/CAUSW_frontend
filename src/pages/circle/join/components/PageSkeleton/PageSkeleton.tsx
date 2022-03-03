import { Hr } from '../../styled';
import { CircleImage, Title, Text } from './styled';

export const PageSkeleton: React.FC = () => (
  <>
    <Title variant="rectangular" height={21} />
    <CircleImage variant="rectangular" width="100%" />
    <Text variant="rectangular" width="30%" height={14} />
    <Text variant="rectangular" width="35%" height={14} />
    <Text variant="rectangular" width="60%" height={14} />
    <Hr />
    <Text variant="rectangular" width="80%" height={14} />
    <Text variant="rectangular" width="60%" height={14} />
  </>
);
