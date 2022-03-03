import Modal from '@mui/material/Modal';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

import {
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/components';
import { usePageUiStore } from '@/hooks/usePageUiStore';
import { useRootStore } from '@/stores';

export const CircleJoinModal: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const {
    circle,
    joinModal: { target, join, reset, visible, close, isAwait, isBlock, isDone, isMember },
  } = usePageUiStore<PageUiStore.CircleJoin>();

  const handleOk = useCallback(async () => {
    if (!target) return;
    const { message } = (await join(target)) as unknown as StoreAPI;
    if (message) alert({ message });
  }, [target]);

  useEffect(() => {
    return () => reset();
  }, []);

  return circle ? (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>
          {isDone
            ? '가입 신청이 완료되었습니다.'
            : isAwait
            ? '이미 신청한 소모임입니다.'
            : isBlock
            ? '가입이 제한되었습니다.'
            : '소모임 신청'}
        </ModalAlertTitle>
        <ModalAlertMessage center>
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
            <ModalFooterButton onClick={close}>확인</ModalFooterButton>
          ) : (
            <>
              <ModalFooterButton onClick={close}>취소</ModalFooterButton>
              <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
            </>
          )}
        </ModalFooter>
      </ModalBox>
    </Modal>
  ) : null;
});
