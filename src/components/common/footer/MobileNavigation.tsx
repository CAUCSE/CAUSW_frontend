import { observer } from 'mobx-react-lite';
import { PAGE_URL } from 'configs/path';
import { useRootStore } from 'stores/RootStore';
import { ReactComponent as HomeIcon } from 'assets/icons/nav_home_icon.svg';
import { ReactComponent as CircleIcon } from 'assets/icons/nav_circle_icon.svg';
import { ReactComponent as BoardIcon } from 'assets/icons/nav_board_icon.svg';
import { Nav, NavLink } from './NavigationView';

export const MobileNavigation: React.FC = observer(() => {
  const {
    auth: { isSignIn },
  } = useRootStore();

  return isSignIn ? (
    <Nav>
      <h2 className="a11y-hidden">CAUCSE 하단 네비게이션</h2>
      <NavLink to={PAGE_URL.Home} a11y="메인 페이지">
        <HomeIcon />
      </NavLink>
      <NavLink to={PAGE_URL.Circle} a11y="소모임 페이지">
        <CircleIcon />
      </NavLink>
      <NavLink to={PAGE_URL.Board} a11y="게시판 페이지">
        <BoardIcon />
      </NavLink>
    </Nav>
  ) : null;
});
