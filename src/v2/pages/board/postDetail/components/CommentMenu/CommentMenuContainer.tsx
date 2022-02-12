import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { InputState } from '../../../../../../stores/CommentStore';
import { Box } from './styled';

import { useRootStore } from '@/stores/RootStore';
import { ModalMenuButton } from '@/v2/components/atoms';

export const CommentMenuContainer: React.FC = observer(() => {
  const {
    comment: {
      setState,
      menuModal: { visible, close, target },
      deleteModal: { open },
    },
  } = useRootStore();
  const handleSetState = useCallback(
    (state: InputState) => () => {
      setState(state);
      close();
    },
    [close, setState],
  );
  const handleOpenDeleteModal = useCallback(() => {
    if (target) {
      close();
      open(target);
    }
  }, [target, close]);

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <Box>
        <ModalMenuButton onClick={handleSetState(InputState.REPLY)}>답글 달기</ModalMenuButton>
        {target?.updatable ? (
          <ModalMenuButton onClick={handleSetState(InputState.EDIT)}>댓글 수정</ModalMenuButton>
        ) : null}
        {target?.deletable ? <ModalMenuButton onClick={handleOpenDeleteModal}>댓글 삭제</ModalMenuButton> : null}
      </Box>
    </Modal>
  );
});
