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

export const DropModal: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const {
    userTab: { remove },
    dropModal: { dropUser, visible, target, close },
  } = usePageUiStore<PageUiStore.CircleUsers>();
  const handleOk = useCallback(async () => {
    if (!target) return;

    const { success, message } = (await dropUser(target)) as unknown as StoreAPI;

    if (success) {
      remove(target);
      alert({ message: `${target.nameWithAdmission} 유저가 소모임에서 추방되었습니다.` });
    } else if (message) alert({ message });
    close();
  }, [target]);

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>소모임 회원 추방</ModalAlertTitle>
        <ModalAlertMessage center>
          정말로 {target?.nameWithAdmission} 유저를 소모임에서 추방하시겠습니까? <br />
          추방 시 데이터는 복구되지 않습니다.
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
