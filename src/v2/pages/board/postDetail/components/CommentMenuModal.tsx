import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import styled from 'styled-components';

import { Portal } from '@/components/Portal';
import { Dimmed, ModalBox, ModalMenuButton } from '@/components/StyledModal';
import { useRootStore } from '@/stores/RootStore';
import { CommentInputState } from '@/stores/ui/CommentUi';

export const CommentMenuModal: React.FC = observer(() => {
  const {
    ui: {
      commentUi: { visiableMenuModal: visiable, buf, closeMenuModal, setState, openDeleteModal },
    },
  } = useRootStore();
  const handleSetState = useCallback(
    (state: CommentInputState) => () => {
      setState(state);
      closeMenuModal();
    },
    [closeMenuModal, setState],
  );
  const handleOpenDeleteModal = useCallback(() => {
    closeMenuModal();
    openDeleteModal();
  }, [closeMenuModal, openDeleteModal]);

  return visiable && buf ? (
    <Portal>
      <>
        <Box>
          {!buf.isChild ? (
            <ModalMenuButton onClick={handleSetState(CommentInputState.REPLY)}>답글 달기</ModalMenuButton>
          ) : null}
          {buf.updatable ? (
            <ModalMenuButton onClick={handleSetState(CommentInputState.EDIT)}>댓글 수정</ModalMenuButton>
          ) : null}
          {buf.deletable ? <ModalMenuButton onClick={handleOpenDeleteModal}>댓글 삭제</ModalMenuButton> : null}
        </Box>
        <Dimmed onClick={closeMenuModal} />
      </>
    </Portal>
  ) : null;
});

const Box = styled(ModalBox)`
  box-sizing: border-box;
  padding: 15px 27px;
  width: 280px;
`;
