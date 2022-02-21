import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';

import {
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/components';
import { usePageUiStore } from '@/hooks';

export const LockerReturnModal: React.FC = observer(() => {
  const {
    returnModal: { visible, close, target },
  } = usePageUiStore<PageUiStore.LockerLocations>();

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox style={{ width: '240px' }}>
        <ModalAlertTitle>사물함 반납</ModalAlertTitle>
        <ModalAlertMessage style={{ textAlign: 'center' }}>
          <strong>{target?.lockerNumber}번</strong> 사물함을 반납하시겠습니까?
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={close}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
