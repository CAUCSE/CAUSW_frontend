import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { Box } from './styled';

import { useRootStore } from '@/stores/RootStore';
import { ModalAlertMessage, ModalAlertTitle, ModalFooter, ModalFooterButton } from '@/v2/components';

export const CommentDeleteModalContainer: React.FC = observer(() => {
  const {
    comment: {
      deleteModal: { visible, close, target },
      deleteComment,
    },
  } = useRootStore();

  const handleOk = useCallback(async () => {
    if (target) {
      await deleteComment(target);
      close();
    }
  }, [target]);

  return (
    <Modal open={visible} closeAfterTransition>
      <Box>
        <ModalAlertTitle>댓글 삭제</ModalAlertTitle>
        <ModalAlertMessage>작성한 댓글을 삭제하시겠습니까?</ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </Box>
    </Modal>
  );
});
