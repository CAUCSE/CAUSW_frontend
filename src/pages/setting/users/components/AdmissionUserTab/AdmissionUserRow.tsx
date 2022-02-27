import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { memo, useCallback } from 'react';

import { Row, RowButton, UserName } from '../styled';

import { ClearButton } from '@/components';
import { usePageUiStore } from '@/hooks';

export const AdmissionUserRow: React.FC<{ model: Model.User }> = memo(({ model }) => {
  const { userInfoModal, admissionAcceptModal, admissionRejectModal } =
    usePageUiStore<PageUiStore.SettingUsers>();
  const handleOpenInfoModal = useCallback(() => userInfoModal.open(model), [model]);
  const handleOpenAcceptModal = useCallback(() => admissionAcceptModal.open(model), [model]);
  const handleOpenRejectModal = useCallback(() => admissionRejectModal.open(model), [model]);

  return (
    <Row>
      <UserName>
        <ClearButton onClick={handleOpenInfoModal}>{model.nameWithAdmission}</ClearButton>
      </UserName>

      <RowButton onClick={handleOpenAcceptModal}>
        <CheckIcon fontSize="small" />
      </RowButton>
      <RowButton onClick={handleOpenRejectModal}>
        <CloseIcon fontSize="small" />
      </RowButton>
    </Row>
  );
});
