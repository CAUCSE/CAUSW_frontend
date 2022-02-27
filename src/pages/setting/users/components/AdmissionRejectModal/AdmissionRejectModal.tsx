import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';

import {
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/components';
import { usePageUiStore } from '@/hooks';

export const AdmissionRejectModal: React.FC = observer(() => {
  const {
    admissionRejectModal: { visible, target, close },
  } = usePageUiStore<PageUiStore.SettingUsers>();

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
          <ModalFooterButton>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
