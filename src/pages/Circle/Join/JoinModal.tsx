import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Portal } from '@/components/Portal';
import * as M from '@/components/StyledModal';
import { useRootStore } from '@/stores/RootStore';

export const JoinModal: React.FC = observer(() => {
  const {
    circle: { circle },
  } = useRootStore();

  console.debug(circle);

  return (
    <Portal>
      <>
        <Box>
          <Title>소모임 신청</Title>
          <Message>{} 소모임에 가입하시겠습니까?</Message>
          <M.ModalFooter>
            <M.ModalFooterButton onClick={() => false}>취소</M.ModalFooterButton>
            <M.ModalFooterButton onClick={() => false}>확인</M.ModalFooterButton>
          </M.ModalFooter>
        </Box>
        <M.Dimmed />
      </>
    </Portal>
  );
});

const Box = styled(M.ModalBox)`
  box-sizing: border-box;
  width: 240px;
  overflow: hidden;
`;

const Title = styled(M.ModalAlertTitle)`
  margin: 1.5rem 0;
`;

const Message = styled(M.ModalAlertMessage)`
  margin-bottom: 2rem;
  text-align: center;
`;
