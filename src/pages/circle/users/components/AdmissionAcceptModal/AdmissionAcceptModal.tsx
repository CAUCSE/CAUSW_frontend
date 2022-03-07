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

export const AdmissionAcceptModal: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const {
    admissionTab: { remove },
    admissionAcceptModal: { visible, target, close, accept },
  } = usePageUiStore<PageUiStore.CircleUsers>();
  const handleOk = useCallback(async () => {
    if (!target) return;

    const { success, message } = (await accept(target)) as unknown as StoreAPI;

    if (success) {
      remove(target);
      alert({ message: `${target.nameWithAdmission} 유저의 소모임 가입이 승인되었습니다.` });
    } else if (message) alert({ message });
    close();
  }, [target]);

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>소모임 가입 승인</ModalAlertTitle>
        <ModalAlertMessage center>
          정말로 {target?.nameWithAdmission} 유저의 소모임 가입을 승인하시겠습니까?
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
