import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';

import {
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/components';
import { usePageUiStore } from '@/hooks';

export const CircleInfoModal: React.FC = observer(() => {
  const {
    infoModal: { target, visible, close },
  } = usePageUiStore<PageUiStore.CircleMain>();

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle className="text-ellipsis-line">{target?.name}</ModalAlertTitle>
        <ModalAlertMessage>
          회원 수 : {target?.numMember}명
          <br />
          소모임장 : {target?.leaderName}
          <br />
          생성일 : {target?.formatedCreatedAt}
          <br />
          <p
            style={{ color: '#a3a1a1' }}
            dangerouslySetInnerHTML={{ __html: target?.newLineDescription ?? '' }}
          />
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
