import RemoveIcon from '@mui/icons-material/Remove';
import { memo, useCallback } from 'react';

import { Row, RowButton, UserName } from '../styled';

import { ClearButton } from '@/components';
import { usePageUiStore } from '@/hooks';

export const UserRow: React.FC<{ model: Model.CircleUser }> = memo(({ model }) => {
  const { userInfoModal, dropModal } = usePageUiStore<PageUiStore.CircleUsers>();
  const handleOpenInfoModal = useCallback(() => userInfoModal.open(model.user), [model]);
  const handleOpenDropModal = useCallback(() => dropModal.open(model), [model]);

  return (
    <Row>
      <UserName>
        <ClearButton onClick={handleOpenInfoModal}>{model.nameWithAdmission}</ClearButton>
      </UserName>

      {model.status === 'MEMBER' && model.user.role !== 'LEADER_CIRCLE' && (
        <RowButton onClick={handleOpenDropModal}>
          <RemoveIcon fontSize="small" />
        </RowButton>
      )}
    </Row>
  );
});
