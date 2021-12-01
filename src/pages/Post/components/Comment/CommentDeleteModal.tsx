import { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useRootStore } from '@/stores/RootStore';
import { Portal } from '@/components/Portal';
import {
  Dimmed,
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/components/StyledModal';

export const CommentDeleteModal: React.FC = observer(() => {
  const {
    ui: { commentUi },
    post,
  } = useRootStore();
  const { visiableDeleteModal: visiable, closeDeleteModal } = commentUi;

  const handleDelete = useCallback(async () => {
    const { post: currentPost } = post;

    if (commentUi.target && currentPost) {
      // TODO: 댓글 삭제 API 연결
      await commentUi.remove(commentUi.target.id);
      commentUi.closeDeleteModal();
      currentPost.downCommentCount();
    }
  }, [commentUi, post]);

  return visiable ? (
    <Portal>
      <>
        <Box>
          <Title>댓글 삭제</Title>
          <Message>작성한 댓글을 삭제하시겠습니까?</Message>
          <ModalFooter>
            <ModalFooterButton onClick={closeDeleteModal}>취소</ModalFooterButton>
            <ModalFooterButton onClick={handleDelete}>확인</ModalFooterButton>
          </ModalFooter>
        </Box>
        <Dimmed />
      </>
    </Portal>
  ) : null;
});

const Box = styled(ModalBox)`
  box-sizing: border-box;
  width: 280px;
  overflow: hidden;
`;

const Title = styled(ModalAlertTitle)`
  margin: 1.5rem 0;
`;

const Message = styled(ModalAlertMessage)`
  margin-bottom: 2rem;
  text-align: center;
`;
