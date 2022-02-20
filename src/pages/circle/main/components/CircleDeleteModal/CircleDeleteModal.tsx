import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';
import {
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

export const CircleDeleteModal: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    circle,
    leave,
    deleteModal: { visible, close },
  } = usePageUiStore<PageUiStore.CircleMain>();
  const handleOk = async () => {
    try {
      if (circle) {
        await leave(circle.id);
        alert('소모임을 탈퇴하였습니다.');
        setTimeout(() => replace(PAGE_URL.Circle), 1000);
      }
    } catch ({ errorMessage }) {
      alert(errorMessage);
    }
  };

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>소모임 탈퇴</ModalAlertTitle>
        <ModalAlertMessage>
          {circle?.name} 소모임에서 탈퇴하시겠습니까?
          <br />
          <br />
          탈퇴 후에는 해당 소모임에 작성한 게시글 혹은 댓글을 수정 / 삭제할 수 없습니다.
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
