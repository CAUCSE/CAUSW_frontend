import { observer } from 'mobx-react-lite';

import { Nav, NavLink } from './GnbView';

import * as I from '@/components/atoms/Icon';
import { PAGE_URL } from 'configs/path';
import { useRootStore } from 'stores/RootStore';

export const MobileGnb: React.FC<{ CustomNav?: React.FC | null }> = observer(({ CustomNav }) => {
  const {
    auth: { isSignIn },
  } = useRootStore();

  return isSignIn ? (
    CustomNav === undefined ? (
      <Nav>
        <h2 className="a11y-hidden">CAUCSE 하단 네비게이션</h2>
        <NavLink to={PAGE_URL.Home} a11y="메인 페이지">
          <I.HomeIcon />
        </NavLink>
        <NavLink to={PAGE_URL.Circle} a11y="소모임 페이지">
          <I.CircleIcon />
        </NavLink>
        <NavLink to={PAGE_URL.Board} a11y="게시판 페이지">
          <I.BoardIcon />
        </NavLink>
        <NavLink to={PAGE_URL.Setting} a11y="설정 페이지">
          <I.SettingIcon />
        </NavLink>
      </Nav>
    ) : CustomNav !== null ? (
      <CustomNav />
    ) : null
  ) : null;
});
