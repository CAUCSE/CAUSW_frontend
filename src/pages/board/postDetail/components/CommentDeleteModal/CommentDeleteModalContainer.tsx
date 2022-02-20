import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { usePageUiStore } from '@/hooks';
import { ReplyCommentModel } from '@/stores/models/ReplyCommentModel';
import {
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/v2/components';

export const CommentDeleteModalContainer: React.FC = observer(() => {
  const {
    comments,
    replyComments,
    commentDeleteModal: { visible, close, target },
  } = usePageUiStore<PageUiStore.PostDetail>();

  const handleOk = useCallback(
    (target?: Model.Comment | Model.ReplyComment) => async () => {
      if (!target) return;

      if (target instanceof ReplyCommentModel) await replyComments.deleteComment(target);
      else await comments.deleteComment(target);

      close();
    },
    [],
  );

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>댓글 삭제</ModalAlertTitle>
        <ModalAlertMessage center>작성한 댓글을 삭제하시겠습니까?</ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk(target)}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
