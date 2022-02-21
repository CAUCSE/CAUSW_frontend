import { memo } from 'react';

import { Status } from './styled';

interface Props {
  enableLockerCount: number;
  totalLockerCount: number;
}
export const LockerStatus: React.FC<Props> = memo(({ enableLockerCount, totalLockerCount }) => (
  <Status>
    잔여 {enableLockerCount}개 / 전체 {totalLockerCount}개
  </Status>
));
