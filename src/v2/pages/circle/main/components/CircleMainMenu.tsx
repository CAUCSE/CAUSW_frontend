import React, { useState } from 'react';

import { MenuIcon } from '@/components/atoms/Icon';
import { HeaderIconButton, Menu, MenuItem } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

export const CircleMainMenu: React.FC = () => {
  const { infoModal } = usePageUiStore<PageUiStore.CircleMain>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (evt: React.MouseEvent<HTMLElement>) => setAnchorEl(evt.currentTarget);

  const handleOpenInfo = () => {
    setAnchorEl(null);
    infoModal.open();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HeaderIconButton onClick={handleClick} disableRipple={true}>
        <MenuIcon className="absolute-center" />
      </HeaderIconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleOpenInfo}>소모임 정보</MenuItem>
        <MenuItem onClick={handleClose}>회원 탈퇴</MenuItem>
      </Menu>
    </>
  );
};
