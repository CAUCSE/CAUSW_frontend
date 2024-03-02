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

export const DeleteBoardModal: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const {
    fetchBoards,
    deleteBoardModal: { deleteBoard, target, close, visible },
  } = usePageUiStore<PageUiStore.BoardList>();

  const handleOk = useCallback(async () => {
    if (!target || !target.id || !target.name === undefined) return;
    const { success, message } = (await deleteBoard(target.id)) as unknown as StoreAPI;
    if (success) {
      fetchBoards();
      alert({
        message: `${target.name} 동아리가 삭제되었습니다.`,
      });
    } else if (message) alert({ message });
    close();
  }, [target]);

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>
          <strong>{target && target.name ? target.name : ''}</strong> 동아리 삭제
        </ModalAlertTitle>
        <ModalAlertMessage center>
          정말로 <strong>{target && target.name ? target.name : ''}</strong> 동아리를
          삭제하시겠습니까? <br />
          삭제된 데이터는 복구되지 않습니다.
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
