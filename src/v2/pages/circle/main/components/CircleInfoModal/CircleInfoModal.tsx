import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { CircleMainPageUiStore } from '../../CircleMainPageUiStore';

import { useRootStore } from '@/stores/RootStore';
import { ModalAlertMessage, ModalAlertTitle, ModalBox, ModalFooter, ModalFooterButton } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

export const CircleInfoModal: React.FC = observer(() => {
  const {
    circle: { circle },
  } = useRootStore();
  const {
    infoModal: { visible, close },
  } = usePageUiStore<CircleMainPageUiStore>();

  return (
    <Modal open={visible} onClose={close} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>{circle?.name}</ModalAlertTitle>
        <ModalAlertMessage dangerouslySetInnerHTML={{ __html: circle?.description ?? '' }} />
        <ModalFooter>
          <ModalFooterButton onClick={close}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
