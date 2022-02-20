import React, { useState } from 'react';

import { MenuIcon } from '@/components/regacy/atoms/Icon';
import { HeaderIconButton, Menu, MenuItem } from '@/v2/components';
import { usePageUiStore } from '@/v2/hooks';

export const CircleMainMenu: React.FC = () => {
  const { infoModal, deleteModal } = usePageUiStore<PageUiStore.CircleMain>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (evt: React.MouseEvent<HTMLElement>) => setAnchorEl(evt.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleOpenInfoModal = () => {
    setAnchorEl(null);
    infoModal.open();
  };
  const handleOpenDeleteModal = () => {
    setAnchorEl(null);
    deleteModal.open();
  };

  return (
    <>
      <HeaderIconButton onClick={handleClick} disableRipple={true}>
        <MenuIcon className="absolute-center" />
      </HeaderIconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleOpenInfoModal}>소모임 정보</MenuItem>
        <MenuItem onClick={handleOpenDeleteModal}>회원 탈퇴</MenuItem>
      </Menu>
    </>
  );
};
