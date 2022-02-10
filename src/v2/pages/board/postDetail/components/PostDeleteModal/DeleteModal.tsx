import { Modal, styled } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { generatePath, useHistory } from 'react-router-dom';

import { useDeleteStore } from './DeleteStore';

import * as M from '@/components/StyledModal';
import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

export const DeleteModal: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    post: { boardId, post, deletePost },
  } = useRootStore();
  const { visible, setVisible } = useDeleteStore();

  if (!boardId || !post) return null;

  const handleOk = async () => {
    const success = await deletePost(post.id);

    // TODO: alert('게시글이 삭제되었습니다.')
    if (success) replace(generatePath(PAGE_URL.PostList, { boardId }));
    // else // TODO: alert('에러가 발생했습니다.')
    setVisible(false);
  };
  const handleCancel = () => setVisible(false);

  return (
    <Modal open={visible} closeAfterTransition>
      <Box>
        <M.ModalAlertTitle>게시글 삭제</M.ModalAlertTitle>
        <M.ModalAlertMessage>
          작성한 게시글을 삭제하시겠습니까? <br />
          삭제된 게시글은 복구할 수 없습니다.
        </M.ModalAlertMessage>
        <M.ModalFooter>
          <M.ModalFooterButton onClick={handleCancel}>취소</M.ModalFooterButton>
          <M.ModalFooterButton onClick={handleOk}>확인</M.ModalFooterButton>
        </M.ModalFooter>
      </Box>
    </Modal>
  );
});

const Box = styled(M.ModalBox)`
  box-sizing: border-box;
  width: 240px;
  overflow: hidden;
`;
