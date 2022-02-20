import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { generatePath, useHistory, useParams } from 'react-router-dom';

import { MenuIcon } from '@/components/regacy/atoms/Icon';
import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { HeaderIconButton, Menu, MenuItem } from '@/v2/components';

export const PostDetailMenu: React.FC = observer(() => {
  const { boardId, postId } = useParams<PostParams>();
  const { post, postDeleteModal } = usePageUiStore<PageUiStore.PostDetail>();

  const { push } = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);
  const handleClick = (evt: React.MouseEvent<HTMLElement>) => setAnchorEl(evt.currentTarget);
  const handleEdit = () =>
    push(generatePath(PAGE_URL.PostEdit, { boardId, postId }), { prevDetail: true });
  const handleDelete = () => {
    setAnchorEl(null);
    postDeleteModal.open();
  };

  return post?.updatable || post?.deletable ? (
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
