import { observer } from 'mobx-react-lite';

import { Status } from './styled';

import { usePageUiStore } from '@/hooks';

export const LockerStatus: React.FC = observer(() => {
  const { enableLockerCount, totalLockerCount } = usePageUiStore<PageUiStore.LockerList>();

  return (
    <Status>
      잔여 {enableLockerCount}개 / 전체 {totalLockerCount}개
    </Status>
  );
});
