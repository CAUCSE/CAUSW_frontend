import MoreVertIcon from '@mui/icons-material/MoreVert';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

import { HeaderIconButton, Menu, MenuItem } from '@/components';
import { usePageUiStore } from '@/hooks';

export const ContextMenu: React.FC = observer(() => {
  const {
    leaveModal: { open: openModal },
  } = usePageUiStore<PageUiStore.SettingProfile>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (evt: React.MouseEvent<HTMLElement>) => setAnchorEl(evt.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLeave = () => {
    openModal();
    setAnchorEl(null);
  };

  return (
    <>
      <HeaderIconButton onClick={handleClick} disableRipple={true}>
        <MoreVertIcon />
      </HeaderIconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleLeave}>회원 탈퇴</MenuItem>
      </Menu>
    </>
  );
});
