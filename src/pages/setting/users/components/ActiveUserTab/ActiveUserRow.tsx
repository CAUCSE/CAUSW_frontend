import RemoveIcon from '@mui/icons-material/Remove';
import { memo, useCallback } from 'react';

import { Row, RowButton, UserName } from '../styled';

import { ClearButton } from '@/components';
import { usePageUiStore } from '@/hooks';

export const ActiveUserRow: React.FC<{ model: Model.User }> = memo(({ model }) => {
  const { userInfoModal, dropModal } = usePageUiStore<PageUiStore.SettingUsers>();
  const handleOpenInfoModal = useCallback(() => userInfoModal.open(model), [model]);
  const handleOpenDropModal = useCallback(() => dropModal.open(model), [model]);

  return (
    <Row>
      <UserName>
        <ClearButton onClick={handleOpenInfoModal}>{model.nameWithAdmission}</ClearButton>
      </UserName>

      <RowButton onClick={handleOpenDropModal}>
        <RemoveIcon fontSize="small" />
      </RowButton>
    </Row>
  );
});
