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

export const DeleteRuleModal: React.FC = observer(() => {
  const {
    ui: { alert },
  } = useRootStore();
  const {
    deleteRuleModal: { visible, target, close },
  } = usePageUiStore<PageUiStore.SettingRoleManagement>();

  const handleOk = useCallback(async () => {
    if (!target) return;

    // const { success, message } = (await reject(target)) as unknown as StoreAPI;

    // if (success) {
    //   remove(target);
    //   alert({ message: `${target.nameWithAdmission} 유저의 회원가입이 거절되었습니다` });
    // } else if (message) alert({ message });
    close();
  }, [target]);

  return (
    <Modal open={visible} closeAfterTransition>
      <ModalBox>
        <ModalAlertTitle>{target?.roleTxt} 권한 삭제</ModalAlertTitle>
        <ModalAlertMessage center>
          정말로 {target?.nameWithAdmission} 유저를 {target?.roleTxt} 명단에서 제거하시겠습니까?
        </ModalAlertMessage>
        <ModalFooter>
          <ModalFooterButton onClick={close}>취소</ModalFooterButton>
          <ModalFooterButton onClick={handleOk}>확인</ModalFooterButton>
        </ModalFooter>
      </ModalBox>
    </Modal>
  );
});
