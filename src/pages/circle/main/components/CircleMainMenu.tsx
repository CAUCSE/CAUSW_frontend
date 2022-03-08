import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react';

import { HeaderIconButton, Menu, MenuItem } from '@/components';
import { usePageUiStore } from '@/hooks';

export const CircleMainMenu: React.FC = () => {
  const { circle, infoModal, leaveModal } = usePageUiStore<PageUiStore.CircleMain>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (evt: React.MouseEvent<HTMLElement>) => setAnchorEl(evt.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleOpenInfoModal = () => {
    setAnchorEl(null);
    infoModal.open(circle);
  };
  const handleOpenDeleteModal = () => {
    setAnchorEl(null);
    leaveModal.open(circle);
  };

  return (
    <>
      <HeaderIconButton onClick={handleClick} disableRipple={true}>
        <MoreVertIcon className="absolute-center" />
      </HeaderIconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleOpenInfoModal}>동아리 정보</MenuItem>
        <MenuItem onClick={handleOpenDeleteModal}>회원 탈퇴</MenuItem>
      </Menu>
    </>
  );
};
