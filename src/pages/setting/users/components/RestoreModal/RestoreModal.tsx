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

export const RestoreModal: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const {
    restoreModel: { restore, visible, target, close },
  } = usePageUiStore<PageUiStore.SettingUsers>();
  const handleOk = useCallback(async () => {
    if (!target) return;
    const { success, message } = (await restore(target)) as unknown as StoreAPI;
    if (success) {
      alert({ message: `${target.nameWithAdmission} 유저가 복구되었습니다.` });
    } else if (message) alert({ message });
    close();
  }, [target]);

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>회원 복구</ModalAlertTitle>
        <ModalAlertMessage center>
          정말로 {target?.nameWithAdmission} 유저를 복구하시겠습니까?
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
