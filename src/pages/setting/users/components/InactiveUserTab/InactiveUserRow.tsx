import RestoreIcon from '@mui/icons-material/Restore';
import { memo, useCallback } from 'react';

import { Row, RowButton, UserName } from '../styled';

import { ClearButton } from '@/components';
import { usePageUiStore } from '@/hooks';

export const InactiveUserRow: React.FC<{ model: Model.User }> = memo(({ model }) => {
  const { userInfoModal, restoreModel } = usePageUiStore<PageUiStore.SettingUsers>();
  const handleOpenInfoModal = useCallback(() => userInfoModal.open(model), [model]);
  const handleOpenRestoreModel = useCallback(() => restoreModel.open(model), [model]);

  return (
    <Row>
      <UserName>
        <ClearButton onClick={handleOpenInfoModal}>
          {model.nameWithAdmission} {model.state === 'DROP' ? '(추방)' : '(탈퇴)'}
        </ClearButton>
      </UserName>

      <RowButton onClick={handleOpenRestoreModel}>
        <RestoreIcon fontSize="small" />
      </RowButton>
    </Row>
  );
});
