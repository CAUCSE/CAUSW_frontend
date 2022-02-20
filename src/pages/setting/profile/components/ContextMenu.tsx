import MoreVertIcon from '@mui/icons-material/MoreVert';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

import { HeaderIconButton, Menu, MenuItem } from '@/components';

export const ContextMenu: React.FC = observer(() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);
  const handleClick = (evt: React.MouseEvent<HTMLElement>) => setAnchorEl(evt.currentTarget);

  return (
    <>
      <HeaderIconButton onClick={handleClick} disableRipple={true}>
        <MoreVertIcon />
      </HeaderIconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>회원 탈퇴</MenuItem>
      </Menu>
    </>
  );
});
