import React, { useState } from 'react';

import { MenuIcon } from '@/components/atoms/Icon';
import { HeaderIconButton, Menu, MenuItem } from '@/v2/components';

export const PostDetailMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (evt: React.MouseEvent<HTMLElement>) => setAnchorEl(evt.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <HeaderIconButton onClick={handleClick} disableRipple={true}>
        <MenuIcon className="absolute-center" />
      </HeaderIconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>게시글 수정</MenuItem>
        <MenuItem onClick={handleClose}>게시글 삭제</MenuItem>
      </Menu>
    </>
  );
};
