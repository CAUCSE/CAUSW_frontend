import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { generatePath, useHistory, useParams } from 'react-router-dom';

import { InputState } from '../../../../../../stores/CommentStore';
import { Box } from './styled';

import { PAGE_URL, PostReplyCommentParams } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { ModalMenuButton } from '@/v2/components/atoms';

export const CommentMenuContainer: React.FC = observer(() => {
  const params = useParams<PostReplyCommentParams>();
  const { replace } = useHistory();
  const {
    comment: {
      setState,
      menuModal: { visible, close, target },
      deleteModal: { open },
    },
  } = useRootStore();
  const handleSetState = useCallback(
    (state: InputState, params: PostReplyCommentParams, target?: Model.Comment) => () => {
      setState(state);
      close();

      if (target && state === InputState.REPLY) {
        replace(generatePath(PAGE_URL.PostReplyComment, { ...params, commentId: target.id }));
      }
    },
    [close, setState],
  );
  const handleOpenDeleteModal = useCallback(
    (target?: Model.Comment) => () => {
      if (target) {
        close();
        open(target);
      }
    },
    [close],
  );

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <Box>
        <ModalMenuButton onClick={handleSetState(InputState.REPLY, params, target)}>답글 달기</ModalMenuButton>
        {target?.updatable ? (
          <ModalMenuButton onClick={handleSetState(InputState.EDIT, params, target)}>댓글 수정</ModalMenuButton>
        ) : null}
        {target?.deletable ? (
          <ModalMenuButton onClick={handleOpenDeleteModal(target)}>댓글 삭제</ModalMenuButton>
        ) : null}
      </Box>
    </Modal>
  );
});
