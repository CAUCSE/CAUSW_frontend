import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { NavButton, PageFooter } from '@/components';
import { usePageUiStore } from '@/hooks';

export const SubmitButton = observer(() => {
  const { target, myLocation, applicationModal, returnModal } =
    usePageUiStore<PageUiStore.LockerLocations>();
  const isSeletedMine = computed(() => target?.id === myLocation?.id).get();
  const handleClick = useCallback(
    (isSeletedMine: boolean, target?: Model.LockerLocation) => () => {
      if (!target) return;

      if (isSeletedMine) returnModal.open(target);
      else applicationModal.open(target);
    },
    [],
  );

  return (
    <PageFooter>
      <NavButton disabled={!target} onClick={handleClick(isSeletedMine, target)}>
        {isSeletedMine ? '반환하기' : '신청하기'}
      </NavButton>
    </PageFooter>
  );
});
