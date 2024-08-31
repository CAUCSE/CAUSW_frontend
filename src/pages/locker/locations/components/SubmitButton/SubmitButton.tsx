import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { NavButton, PageFooter, AdditionNavButton } from '@/components';
import { usePageUiStore } from '@/hooks';

export const SubmitButton = observer(() => {
  const { target, myLocation, applicationModal, returnModal, extendModal } =
    usePageUiStore<PageUiStore.LockerLocations>();
  const isSelectedMine = computed(() => target?.id === myLocation?.id).get();
  const handleClick = useCallback(
    (isSelectedMine: boolean, target?: Model.LockerLocation) => () => {
      if (!target) return;

      if (isSelectedMine) returnModal.open(target);
      else applicationModal.open(target);
    },
    [],
  );

  const extendClick = useCallback(
    (isSelectedMine: boolean, target?: Model.LockerLocation) => () => {
      if (!target) return;

      if (isSelectedMine) extendModal.open(target);
    },
    [],
  );

  return (
    <PageFooter>
      {isSelectedMine ? (
        // TODO : 반복 버튼 컴포넌트 만들기
        <AdditionNavButton disabled={!target} onClick={extendClick(isSelectedMine, target)}>
          연장하기
        </AdditionNavButton>
      ) : null}
      <NavButton disabled={!target || isSelectedMine} onClick={handleClick(isSelectedMine, target)}>
        신청하기
      </NavButton>
    </PageFooter>
  );
});
