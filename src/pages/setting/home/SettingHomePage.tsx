import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { generatePath, useHistory } from 'react-router-dom';

import { Porfile } from './components';
import { Link, LinkButton } from './styeld';

import { BodyScreen, Box, GNB, PageBody, PageStoreHOC, Title } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

const SettingHomePage: React.FC = observer(() => {
  const { replace } = useHistory();
  const {
    ui: { alert },
    auth: { fetch, me, signOut },
  } = useRootStore();
  const handleSignOut = () => {
    signOut();
    replace(PAGE_URL.SignIn);
    alert({ message: '로그아웃 되었습니다.' });
  };

  useEffect(() => {
    fetch();
  }, []);

  return me ? (
    <>
      <PageBody>
        <BodyScreen style={{ marginBottom: '30px' }}>
          <Porfile model={me} />

          <Box>
            <Title>계정</Title>
            <Link to={PAGE_URL.SettingProfile}>개인정보 관리</Link>
            <Link to={PAGE_URL.SettingPassword}>비밀번호 변경</Link>
            <LinkButton onClick={handleSignOut}>로그아웃</LinkButton>
          </Box>

          <Box>
            <Title>활동</Title>
            <Link to={PAGE_URL.HistoryPost}>내가 쓴 글</Link>
            <Link to={PAGE_URL.HistoryComment}>내가 쓴 댓글</Link>
          </Box>

          {me.isAdmin ||
          me.isPresident ||
          me.isCircleLeader ||
          me.isCouncil ||
          me.isStudentLeader ||
          me.isAlumniLeader ? (
            <Box>
              <Title>관리</Title>
              {me.isAdmin || me.isPresident ? (
                <>
                  <Link to={PAGE_URL.SettingRoleManagement}>권한 관리</Link>
                  <Link to={PAGE_URL.SettingUsers}>유저 관리</Link>
                  {/* <Link to={PAGE_URL.SettingBoards}>게시판 관리</Link> */}
                  <Link to={PAGE_URL.SettingRoleDelegation}>권한 위임</Link>
                </>
              ) : null}
              {me.isCircleLeader ? (
                <>
                  <Link to={generatePath(PAGE_URL.CircleEdit, { circleId: me.circleId as string })}>
                    동아리 관리
                  </Link>
                  <Link
                    to={generatePath(PAGE_URL.CircleUsers, { circleId: me.circleId as string })}
                  >
                    동아리 회원 관리
                  </Link>
                  {/* <Link to={PAGE_URL.SettingCircleBoards}>동아리 게시판 관리</Link> */}
                  <Link to={PAGE_URL.SettingRoleDelegation}>권한 위임</Link>
                </>
              ) : null}
              {me.isCouncil || me.isStudentLeader || me.isAlumniLeader ? (
                <Link to={PAGE_URL.SettingRoleDelegation}>권한 위임</Link>
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
