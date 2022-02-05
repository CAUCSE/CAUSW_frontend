import Modal from '@mui/material/Modal';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { useJoinStore } from './JoinStore';

import * as M from '@/components/StyledModal';
import { useRootStore } from '@/stores/RootStore';

export const JoinModal: React.FC = observer(() => {
  const {
    circle: { circle, join },
  } = useRootStore();
  const { visible, setVisible, setStatus, isAwait, isBlock, isDone, isMember } = useJoinStore();

  const handleOk = async () => {
    if (circle) {
      const status = (await join(circle)) as unknown as Circle.JoinStatus;
      setStatus(status);
    }
  };
  const handleCancel = () => setVisible(false);

  return circle ? (
    <Modal open={visible} closeAfterTransition>
      <Box>
        <Title>
          {isDone
            ? '가입 신청이 완료되었습니다.'
            : isAwait
            ? '이미 신청한 소모임입니다.'
            : isBlock
            ? '가입이 제한되었습니다.'
            : '소모임 신청'}
        </Title>
        <Message>
          {isDone || isAwait
            ? '소모임 동아리장이 가입을 허가해 줄 때 까지 기다려주세요.'
            : isMember
            ? '이미 가입한 소모임 사용자 입니다.'
            : isBlock
            ? '소모임장 혹은 관리자에게 문의해주세요.'
            : `${circle.name} 소모임에 가입하시겠습니까?`}
        </Message>
        <M.ModalFooter>
          {isDone || isAwait || isBlock || isMember ? (
            <M.ModalFooterButton onClick={handleCancel}>확인</M.ModalFooterButton>
          ) : (
            <>
              <M.ModalFooterButton onClick={handleCancel}>취소</M.ModalFooterButton>
              <M.ModalFooterButton onClick={handleOk}>확인</M.ModalFooterButton>
            </>
          )}
        </M.ModalFooter>
      </Box>
    </Modal>
  ) : null;
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
  margin-bottom: 20px;
  padding: 0 26px;
`;
