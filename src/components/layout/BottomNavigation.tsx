import { memo } from 'react';
import { PAGE_URL } from 'configs/path';
import { ReactComponent as HomeIcon } from 'assets/icons/nav_home_icon.svg';
import { ReactComponent as CircleIcon } from 'assets/icons/nav_circle_icon.svg';
import { ReactComponent as BoardIcon } from 'assets/icons/nav_board_icon.svg';
import * as S from './styled';

export const BottomNavigation: React.FC = memo(() => (
  <S.Nav>
    <S.NavLink to={PAGE_URL.Home} a11y="메인 페이지">
      <HomeIcon />
    </S.NavLink>
    <S.NavLink to={PAGE_URL.Circle} a11y="소모임 페이지">
      <CircleIcon />
    </S.NavLink>
    <S.NavLink to={PAGE_URL.Board} a11y="게시판 페이지">
      <BoardIcon />
    </S.NavLink>
  </S.Nav>
));
