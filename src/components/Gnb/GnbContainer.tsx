import { Nav, NavLink } from './GnbView';

import { PAGE_URL } from '@/configs/path';
import HomeIcon from '@/assets/icons/nav_home.svg?react';
import BoardIcon from '@/assets/icons/nav_board.svg?react';
import SettingIcon from '@/assets/icons/nav_setting.svg?react';

import CircleIcon from '@mui/icons-material/Diversity3';
import { grey } from '@mui/material/colors';

export const GnbContainer: React.FC = () => (
  <Nav>
    <h2 className="a11y-hidden">CAUCSE 하단 네비게이션</h2>
    <NavLink to={PAGE_URL.Home} a11y="메인 페이지">
      <HomeIcon />
    </NavLink>
    <NavLink to={PAGE_URL.Circle} a11y="동아리 페이지">
      <CircleIcon fontSize="large" sx={{ color: grey[300] }} />
    </NavLink>
    <NavLink to={PAGE_URL.Board} a11y="게시판 페이지">
      <BoardIcon />
    </NavLink>
    <NavLink to={PAGE_URL.Setting} a11y="설정 페이지">
      <SettingIcon />
    </NavLink>
  </Nav>
);
