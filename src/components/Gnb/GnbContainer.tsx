import { Nav, NavLink } from './GnbView';

// import { Icons } from '@/assets';
import { PAGE_URL } from '@/configs/path';
// import { HomeIcon } from '@/assets/icons';
import HomeIcon from '@/assets/icons/nav_home.svg';
import CircleIcon from '@/assets/icons/nav_circle.svg';
import BoardIcon from '@/assets/icons/nav_board.svg';
import SettingIcon from '@/assets/icons/nav_setting.svg';

export const GnbContainer: React.FC = () => (
  <Nav>
    <h2 className="a11y-hidden">CAUCSE 하단 네비게이션</h2>
    <NavLink to={PAGE_URL.Home} a11y="메인 페이지">
      <HomeIcon />
    </NavLink>
    <NavLink to={PAGE_URL.Circle} a11y="동아리 페이지">
      <CircleIcon />
    </NavLink>
    <NavLink to={PAGE_URL.Board} a11y="게시판 페이지">
      <BoardIcon />
    </NavLink>
    <NavLink to={PAGE_URL.Setting} a11y="설정 페이지">
      <SettingIcon />
    </NavLink>
  </Nav>
);
