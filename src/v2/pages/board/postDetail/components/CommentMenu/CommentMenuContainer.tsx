import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { generatePath, useHistory, useParams, useRouteMatch } from 'react-router-dom';

import { usePageUiStore } from '../../PagePostDetailUiStore';
import { InputState } from '../CommentInput';
import { Box } from './styled';

import { PAGE_URL, PostParams } from '@/configs/path';
import { ModalMenuButton } from '@/v2/components/atoms';

export const CommentMenuContainer: React.FC = observer(() => {
  const isReplyComment = !!useRouteMatch(PAGE_URL.PostReplyComment);
  const params = useParams<PostParams>();
  const { replace } = useHistory();
  const {
    commentInput: { setState },
    commentMenuModal: { visible, close, target },
    commentDeleteModal: { open },
  } = usePageUiStore();

  const handleSetState = useCallback(
    (isReplyComment: boolean, state: InputState, params: PostParams, target?: Model.Comment | Model.ReplyComment) =>
      () => {
        if (!target) return;

        close();
        if (!isReplyComment && state === InputState.REPLY)
          replace(generatePath(PAGE_URL.PostReplyComment, { ...params, commentId: target.id }));
        else setState(state, target);
      },
    [],
  );
  const handleOpenDeleteModal = useCallback(
    (target?: Model.Comment | Model.ReplyComment) => () => {
      if (!target) return;

      close();
      open(target);
    },
    [],
  );

  return target ? (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <Box>
        {!target?.isDeleted ? (
          <ModalMenuButton onClick={handleSetState(isReplyComment, InputState.REPLY, params, target)}>
            답글 달기
          </ModalMenuButton>
        ) : null}
        {target?.updatable ? (
          <ModalMenuButton onClick={handleSetState(isReplyComment, InputState.EDIT, params, target)}>
            댓글 수정
          </ModalMenuButton>
        ) : null}
        {target?.deletable ? (
          <ModalMenuButton onClick={handleOpenDeleteModal(target)}>댓글 삭제</ModalMenuButton>
        ) : null}
      </Box>
    </Modal>
  ) : null;
});
