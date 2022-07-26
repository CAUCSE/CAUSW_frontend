import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { NavButton, PageFooter } from '@/components';
import { usePageUiStore } from '@/hooks';

export const SubmitButton = observer(() => {
  const { target, myLocation, applicationModal, returnModal } =
    usePageUiStore<PageUiStore.LockerLocations>();
  const isSelectedMine = computed(() => target?.id === myLocation?.id).get();
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
      {isSelectedMine 
      // TODO : 반복 버튼 컴포넌트 만들기
      ? <NavButton style={{
        backgroundColor : 'white', 
        color : '#312ed7', 
        border : '1px solid #312ed7', 
        margin : '13px 0px 0px 0px'}}>연장하기</NavButton>
      : null
      }
      <NavButton disabled={!target} onClick={handleClick(isSelectedMine, target)}>
        {isSelectedMine ? '반환하기' : '신청하기'} 
      </NavButton>  
    </PageFooter>
  );
});
