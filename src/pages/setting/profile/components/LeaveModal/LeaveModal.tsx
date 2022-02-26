import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import {
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

export const LeaveModal: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    ui: { alert },
  } = useRootStore();
  const {
    leaveModal: { leave, visible, close },
  } = usePageUiStore<PageUiStore.SettingProfile>();

  const handleOk = async () => {
    const { success, message } = (await leave()) as unknown as StoreAPI;

    close();
    if (success)
      alert({ message: '회원 탈퇴가 처리되었습니다.', onClose: () => replace(PAGE_URL.SignIn) });
    else if (message) alert({ message });
  };

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>회원 탈퇴</ModalAlertTitle>
        <ModalAlertMessage>
          정말로 회원 탈퇴하시겠습니까? <br />
          탈퇴 시 작성한 게시글 및 댓글은 자동으로 삭제되지 않습니다.
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
