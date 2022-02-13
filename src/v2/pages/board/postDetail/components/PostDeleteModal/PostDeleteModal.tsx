import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { generatePath, useHistory } from 'react-router-dom';

import { usePageUiStore } from '../../PagePostDetailUiStore';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { ModalAlertMessage, ModalAlertTitle, ModalBox, ModalFooter, ModalFooterButton } from '@/v2/components';

export const PostDeleteModal: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    post: { boardId, post, deletePost },
  } = useRootStore();
  const {
    postDeleteModal: { visible, close },
  } = usePageUiStore();

  if (!boardId || !post) return null;

  const handleOk = async () => {
    const success = await deletePost(post.id);

    // TODO: alert('게시글이 삭제되었습니다.')
    if (success) replace(generatePath(PAGE_URL.PostList, { boardId }));
    // else // TODO: alert('에러가 발생했습니다.')
    close();
  };
  const handleCancel = () => close();

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>게시글 삭제</ModalAlertTitle>
        <ModalAlertMessage>
          작성한 게시글을 삭제하시겠습니까? <br />
          삭제된 게시글은 복구할 수 없습니다.
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={handleCancel}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
