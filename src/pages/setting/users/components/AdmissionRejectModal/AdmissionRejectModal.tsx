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

export const AdmissionRejectModal: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const {
    admissionTab: { remove },
    admissionRejectModal: { visible, target, close, reject },
  } = usePageUiStore<PageUiStore.SettingUsers>();
  const handleOk = useCallback(async () => {
    if (!target) return;

    const { success, message } = (await reject(target)) as unknown as StoreAPI;

    if (success) {
      remove(target);
      alert({
        message: `${target.nameWithAdmission} 유저의 회원가입이 거절되었습니다. 학생회장에게 연락 바랍니다.`,
      });
    } else if (message) alert({ message });
    close();
  }, [target]);

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>회원가입 거절</ModalAlertTitle>
        <ModalAlertMessage center>
          정말로 {target?.nameWithAdmission} 유저의 가입을 거절하시겠습니까? <br />
          거절시 가입 신청을 복구할 수 없습니다.
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
