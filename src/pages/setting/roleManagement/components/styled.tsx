import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import RemoveIcon from '@mui/icons-material/Remove';
import { observer } from 'mobx-react-lite';
import { memo, useCallback } from 'react';

import { ClearLink, ClearButton } from '@/components';
import { usePageUiStore } from '@/hooks';

export const Box = styled.div`
  position: relative;

  & + & {
    margin-top: 30px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 10px 0;
  font-size: 18px;
  line-height: 21px;
`;

const _AddLink = styled(ClearLink)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
`;

export const AddLink: React.FC<{ to: string }> = memo(({ to }) => (
  <_AddLink to={to}>
    <AddIcon fontSize="small" />
  </_AddLink>
));

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #f5f5f5;
  font-size: 13px;
  line-height: 16px;
`;

const UserNameButton = styled(ClearButton)`
  padding-left: 10px;
  width: 100%;
  text-align: left;
  -webkit-line-clamp: 1;
`;

export const UserName: React.FC<{ model: Model.User }> = observer(({ model }) => {
  const { userInfoModal } = usePageUiStore<PageUiStore.SettingRoleManagement>();
  const handleOpenInfoModal = useCallback(() => userInfoModal.open(model), [model]);

  return (
    <div style={{ flex: '1 0 0', overflow: 'hidden' }}>
      <UserNameButton className="text-ellipsis" onClick={handleOpenInfoModal}>
        {model.nameWithAdmission}
      </UserNameButton>
    </div>
  );
});

export const RemoveButton: React.FC<{ onClick: () => void }> = ({ ...props }) => (
  <ClearButton style={{ padding: '10px' }} {...props}>
    <RemoveIcon fontSize="small" />
  </ClearButton>
);

export const AutorenewLink: React.FC<{ pathname: string; state: unknown }> = memo(
  ({ pathname, state }) => (
    <ClearLink to={{ pathname, state }} style={{ padding: '10px' }}>
      <AutorenewIcon fontSize="small" />
    </ClearLink>
  ),
);
