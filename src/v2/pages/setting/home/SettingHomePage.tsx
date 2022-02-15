import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { Porfile } from './components';
import { Link } from './styeld';

import { Box, Title } from '@/components/ListBox';
import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';
import { LayoutHOC } from '@/v2/components';

const SettingHomePage: React.FC = observer(() => {
  const {
    auth: { fetch, me },
  } = useRootStore();

  useEffect(() => {
    fetch();
  }, []);

  return me ? (
    <>
      <Porfile model={me} />

      <Box>
        <Title>계정</Title>
        <Link to={PAGE_URL.SettingProfile}>개인정보 관리</Link>
        <Link to={PAGE_URL.SettingPassword}>비밀번호 변경</Link>
      </Box>

      <Box>
        <Title>활동</Title>
        <Link to={PAGE_URL.SettingHistoryPost}>내가 쓴 글</Link>
        <Link to={PAGE_URL.SettingHistoryComment}>내가 쓴 댓글</Link>
      </Box>

      {!me.isStudent || !me.isProfessor ? (
        <Box>
          <Title>관리</Title>
          {me.isAdmin || me.isPresident ? (
            <>
              <Link to={PAGE_URL.Setting}>권한 관리</Link>
              <Link to={PAGE_URL.Setting}>유저 관리</Link>
              <Link to={PAGE_URL.Setting}>게시판 관리</Link>
              <Link to={PAGE_URL.Setting}>권한 위임</Link>
            </>
          ) : null}
          {me.isCircleLeader ? (
            <>
              <Link to={PAGE_URL.Setting}>소모임 회원 관리</Link>
              <Link to={PAGE_URL.Setting}>소모임 게시판 관리</Link>
              <Link to={PAGE_URL.Setting}>권한 위임</Link>
            </>
          ) : null}
          {me.isCouncil || me.isStudentLeader || me.isAlumniLeader ? (
            <Link to={PAGE_URL.Setting}>권한 위임</Link>
          ) : null}
        </Box>
      ) : null}
    </>
  ) : null;
});

export default LayoutHOC(SettingHomePage);
