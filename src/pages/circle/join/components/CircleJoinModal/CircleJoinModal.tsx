import Modal from '@mui/material/Modal';
import { observer } from 'mobx-react-lite';

import { Box } from './styled';

import { ModalAlertMessage, ModalAlertTitle, ModalFooter, ModalFooterButton } from '@/components';
import { usePageUiStore } from '@/hooks/usePageUiStore';

export const CircleJoinModal: React.FC = observer(() => {
  const {
    circle,
    join,
    joinModal: { visible, setVisible, setStatus, isAwait, isBlock, isDone, isMember },
  } = usePageUiStore<PageUiStore.CircleJoin>();

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
        <ModalAlertTitle>
          {isDone
            ? '가입 신청이 완료되었습니다.'
            : isAwait
            ? '이미 신청한 소모임입니다.'
            : isBlock
            ? '가입이 제한되었습니다.'
            : '소모임 신청'}
        </ModalAlertTitle>
        <ModalAlertMessage>
          {isDone || isAwait
            ? '소모임 동아리장이 가입을 허가해 줄 때 까지 기다려주세요.'
            : isMember
            ? '이미 가입한 소모임 사용자 입니다.'
            : isBlock
            ? '소모임장 혹은 관리자에게 문의해주세요.'
            : `${circle.name} 소모임에 가입하시겠습니까?`}
        </ModalAlertMessage>
        <ModalFooter>
          {isDone || isAwait || isBlock || isMember ? (
            <ModalFooterButton onClick={handleCancel}>확인</ModalFooterButton>
          ) : (
            <>
              <ModalFooterButton onClick={handleCancel}>취소</ModalFooterButton>
              <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
            </>
          )}
        </ModalFooter>
      </Box>
    </Modal>
  ) : null;
});