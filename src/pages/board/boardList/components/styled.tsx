import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ClearIcon from '@mui/icons-material/Clear';
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  font-size: 13px;
  margin-top: 8px;
  margin-bottom: -10px;
`;

const UserNameButton = styled(ClearButton)`
  padding-left: 10px;
  width: 100%;
  text-align: left;
  -webkit-line-clamp: 1;
`;

export const UserName: React.FC<{ model: Model.User; withCircleName?: string }> = observer(
  ({ model, withCircleName = undefined }) => {
    const { userInfoModal } = usePageUiStore<PageUiStore.SettingRoleManagement>();
    const handleOpenInfoModal = useCallback(() => userInfoModal.open(model), [model]);

    return (
      <div style={{ flex: '1 0 0', overflow: 'hidden' }}>
        <UserNameButton className="text-ellipsis" onClick={handleOpenInfoModal}>
          {withCircleName && model.circleNames ? `[ ${withCircleName} ] ` : ''}
          {model.nameWithAdmission}
        </UserNameButton>
      </div>
    );
  },
);

export const RemoveButton: React.FC<{ onClick: () => void }> = ({ ...props }) => (
  <ClearButton style={{ padding: '10px' }} {...props}>
    <ClearIcon fontSize="small" />
  </ClearButton>
);

export const AutorenewLink: React.FC<{ pathname: string; state: unknown }> = memo(
  ({ pathname, state }) => (
    <ClearLink to={{ pathname, state }} style={{ padding: '10px' }}>
      <AutorenewIcon fontSize="small" />
    </ClearLink>
  ),
);
