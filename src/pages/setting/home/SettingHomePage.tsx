import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { Porfile } from './components';
import { Link } from './styeld';

import { BodyScreen, Box, GNB, PageBody, PageStoreHOC, Title } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

const SettingHomePage: React.FC = observer(() => {
  const {
    auth: { fetch, me },
  } = useRootStore();

  useEffect(() => {
    fetch();
  }, []);

  return me ? (
    <>
      <PageBody>
        <BodyScreen>
          <Porfile model={me} />

          <Box>
            <Title>계정</Title>
            <Link to={PAGE_URL.SettingProfile}>개인정보 관리</Link>
            <Link to={PAGE_URL.SettingPassword}>비밀번호 변경</Link>
          </Box>

          <Box>
            <Title>활동</Title>
            <Link to={PAGE_URL.HistoryPost}>내가 쓴 글</Link>
            <Link to={PAGE_URL.HistoryComment}>내가 쓴 댓글</Link>
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
        </BodyScreen>
      </PageBody>
      <GNB />
    </>
  ) : null;
});

export default PageStoreHOC(<SettingHomePage />);
