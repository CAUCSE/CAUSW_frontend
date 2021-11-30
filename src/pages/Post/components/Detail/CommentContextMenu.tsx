import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useRootStore } from '@/stores/RootStore';
import { Portal } from '@/components/Portal';
import { Dimmed, ModalBox, ModalMenuButton } from '@/components/StyledModal';

export const CommentContextMenu: React.FC = observer(() => {
  const {
    ui: {
      commentUi: { visiableMenuModal: visiable, closeMenuModal },
    },
  } = useRootStore();

  return visiable ? (
    <Portal>
      <>
        <Box>
          <ModalMenuButton>답글 달기</ModalMenuButton>
          <ModalMenuButton>댓글 수정</ModalMenuButton>
          <ModalMenuButton>댓글 삭제</ModalMenuButton>
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
