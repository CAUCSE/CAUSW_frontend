import { memo, useCallback } from 'react';

import { Row, UserName } from '../styled';

import { ClearButton } from '@/components';
import { usePageUiStore } from '@/hooks';

export const InactiveUserRow: React.FC<{ model: Model.User }> = memo(({ model }) => {
  const {
    userInfoModal: { open },
  } = usePageUiStore<PageUiStore.SettingUsers>();
  const handleOpenInfoModal = useCallback(() => open(model), [model]);

  return (
    <Row>
      <UserName>
        <ClearButton onClick={handleOpenInfoModal}>{model.nameWithAdmission}</ClearButton>
      </UserName>
    </Row>
  );
});
