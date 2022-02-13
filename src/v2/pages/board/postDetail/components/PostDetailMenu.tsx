import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { generatePath, useHistory } from 'react-router-dom';

import { usePageUiStore } from '../PagePostDetailUiStore';

import { MenuIcon } from '@/components/atoms/Icon';
import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { HeaderIconButton, Menu, MenuItem } from '@/v2/components';

export const PostDetailMenu: React.FC = observer(() => {
  const {
    post: { boardId, post },
  } = useRootStore();
  const { postDeleteModal } = usePageUiStore();

  if (!boardId || !post) return null;

  const { push } = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);
  const handleClick = (evt: React.MouseEvent<HTMLElement>) => setAnchorEl(evt.currentTarget);
  const handleEdit = () => push(generatePath(PAGE_URL.PostEdit, { boardId, postId: post.id }), { prevDetail: true });
  const handleDelete = () => {
    setAnchorEl(null);
    postDeleteModal.open();
  };

  return post.updatable || post.deletable ? (
    <>
      <HeaderIconButton onClick={handleClick} disableRipple={true}>
        <MenuIcon className="absolute-center" />
      </HeaderIconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleEdit}>게시글 수정</MenuItem>
        <MenuItem onClick={handleDelete}>게시글 삭제</MenuItem>
      </Menu>
    </>
  ) : null;
});
