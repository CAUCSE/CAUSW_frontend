import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { usePageUiStore } from '@/hooks';
import {
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/v2/components';

export const CircleInfoModal: React.FC = observer(() => {
  const {
    circle,
    infoModal: { visible, close },
  } = usePageUiStore<PageUiStore.CircleMain>();

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>{circle?.name}</ModalAlertTitle>
        <ModalAlertMessage>
          회원 수 : {circle?.numMember}명
          <br />
          소모임장 : {circle?.leaderName}
          <br />
          생성일 : {circle?.formatedCreatedAt}
          <br />
          <p
            style={{ color: '#a3a1a1' }}
            dangerouslySetInnerHTML={{ __html: circle?.description ?? '' }}
          />
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
