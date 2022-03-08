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

export const CircleLeaveModal: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    ui: { alert },
  } = useRootStore();
  const {
    leaveModal: { target, leaveCircle, visible, close },
  } = usePageUiStore<PageUiStore.CircleMain>();
  const handleOk = async () => {
    if (!target) return;
    const { success, message } = (await leaveCircle(target)) as unknown as StoreAPI;

    if (success) {
      alert({ message: '동아리를 탈퇴하였습니다.' });
      replace(PAGE_URL.Circle);
    } else if (message) alert({ message });
  };

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>동아리 탈퇴</ModalAlertTitle>
        <ModalAlertMessage center>
          {target?.name} 동아리에서 탈퇴하시겠습니까?
          <br />
          <br />
          탈퇴 후에는 해당 동아리에 작성한 게시글 혹은 댓글을 수정 / 삭제할 수 없습니다.
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
