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

export const LockerApplicationModal: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const {
    setTarget,
    locations,
    applicationModal: { visible, close, target, applyLocker },
  } = usePageUiStore<PageUiStore.LockerLocations>();
  const handleOk = useCallback(
    (target?: Model.LockerLocation, models?: Model.LockerLocation[]) => async () => {
      if (!target) return;
      const { success, message } = (await applyLocker(target)) as unknown as StoreAPI;

      if (success) {
        models
          ?.filter(({ id, isMine }) => isMine && id !== target.id)
          .forEach(model => model.reset());
        alert({ message: '사물함이 신청되었습니다.' });
      } else if (message) alert({ message });
      setTarget(target);
      close();
    },
    [],
  );

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox style={{ width: '260px' }}>
        <ModalAlertTitle>사물함 신청</ModalAlertTitle>
        <ModalAlertMessage style={{ textAlign: 'center' }}>
          <strong>{target?.lockerNumber}번</strong> 사물함을 신청하시겠습니까?
          <br />
          <br />
          신청 후 다른 사물함을 재신청하는 경우 원래 사물함 자동으로 반납 처리됩니다.
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk(target, locations)}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
