import { Modal } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import {
  ModalAlertMessage,
  ModalAlertTitle,
  ModalBox,
  ModalFooter,
  ModalFooterButton,
} from '@/components';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

export const DeleteCircleModal: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const {
    remove,
    deleteCircleModal: { deleteCircle, key, target, visible, close },
  } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  const handleOk = useCallback(async () => {
    if (!target?.circleId || !key) return;

    const { success, message } = (await deleteCircle(target.circleId)) as unknown as StoreAPI;

    if (success) {
      remove(key, target);
      alert({
        message: `${target.circleName} 소모임이 삭제되었습니다.`,
      });
    } else if (message) alert({ message });
    close();
  }, [target]);

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>
          <strong>{target?.circleName}</strong> 소모임 삭제
        </ModalAlertTitle>
        <ModalAlertMessage center>
          정말로 <strong>{target?.circleName}</strong> 소모임을 삭제하시겠습니까? <br />
          삭제된 데이터는 복구되지 않습니다.
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
