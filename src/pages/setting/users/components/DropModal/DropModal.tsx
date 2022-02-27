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

export const DropModal: React.FC = observer(() => {
  const {
    dropModal: { visible, target, close },
  } = usePageUiStore<PageUiStore.SettingUsers>();

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>회원 추방</ModalAlertTitle>
        <ModalAlertMessage center>
          정말로 {target?.nameWithAdmission} 유저를 추방하시겠습니까? <br />
          추방 시 데이터는 복구되지 않습니다.
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
