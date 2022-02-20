import _IconButton from '@mui/material/IconButton';
import _Menu from '@mui/material/Menu';
import _MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

export const Menu = styled(_Menu)`
  .MuiMenu-paper {
    width: 148px;
    box-shadow: 2px 2px 5px rgb(0 0 0 / 25%);
  }
`;

export const MenuItem = styled(_MenuItem)`
  min-height: 36px;
  font-size: 14px;
  line-height: 16px;
`;

export const HeaderIconButton = styled(_IconButton)`
  width: 50px;
  height: 50px;
`;
