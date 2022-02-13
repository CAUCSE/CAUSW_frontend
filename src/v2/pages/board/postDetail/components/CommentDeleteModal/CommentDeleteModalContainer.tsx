import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { usePageUiStore } from '../../PagePostDetailUiStore';

import { ReplyCommentModel } from '@/stores/models/ReplyCommentModel';
import { useRootStore } from '@/stores/RootStore';
import { ModalAlertMessage, ModalAlertTitle, ModalBox, ModalFooter, ModalFooterButton } from '@/v2/components';

export const CommentDeleteModalContainer: React.FC = observer(() => {
  const { comment, replyComment } = useRootStore();
  const {
    commentDeleteModal: { visible, close, target },
  } = usePageUiStore();

  const handleOk = useCallback(
    (target?: Model.Comment | Model.ReplyComment) => async () => {
      if (!target) return;

      if (target instanceof ReplyCommentModel) await replyComment.deleteComment(target);
      else await comment.deleteComment(target);

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
