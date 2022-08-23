import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import {
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/components';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

export const LockerExtendModal: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const {
    setTarget,
    extendModal: { visible, close, target, extendLocker },
  } = usePageUiStore<PageUiStore.LockerLocations>();
  const handleOk = useCallback(
    (target?: Model.LockerLocation) => async () => {
      if (!target) return;

      const { success, message } = (await extendLocker(target)) as unknown as StoreAPI;

      if (success) alert({ message: '사물함이 연장되었습니다.' });
      else if (message) alert({ message });
      setTarget(target);
      close();
    },
    [],
  );

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox style={{ width: '240px' }}>
        <ModalAlertTitle>사물함 연장</ModalAlertTitle>
        <ModalAlertMessage style={{ textAlign: 'center' }}>
          <strong>{target?.lockerNumber}번</strong> 사물함을 연장하시겠습니까?
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk(target)}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
