import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { generatePath, useHistory } from 'react-router-dom';

import { Porfile } from './components';
import { Link, LinkButton } from './styeld';

import { BodyScreen, Box, GNB, PageBody, PageStoreHOC, Title, TitleContent } from '@/components';
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
            <Title>
              <PermContactCalendarIcon fontSize="small" />
              <TitleContent>계정</TitleContent>
            </Title>
            <Link to={PAGE_URL.SettingProfile}>개인정보 관리</Link>
            <Link to={PAGE_URL.SettingPassword}>비밀번호 변경</Link>
            <LinkButton onClick={handleSignOut}>로그아웃</LinkButton>
          </Box>

          <Box>
            <Title>
              <VoicemailIcon />
              <TitleContent>기록</TitleContent>
            </Title>
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
              <Title>
                <ManageAccountsIcon />
                <TitleContent>관리</TitleContent>
              </Title>
              {me.isAdmin || me.isPresident ? (
                <>
                  <Link to={PAGE_URL.SettingRoleManagement}>권한 관리</Link>
                  <Link to={PAGE_URL.SettingUsers}>유저 관리</Link>
                  {/* <Link to={PAGE_URL.SettingBoards}>게시판 관리</Link> */}
                  <Link to={PAGE_URL.SettingRoleDelegation}>권한 위임</Link>
                </>
              ) : null}
              {me.isCircleLeader
                ? me.circleIds!.map((circleId, index) => (
                    <div key={circleId}>
                      <Link
                        to={generatePath(PAGE_URL.CircleEdit, { circleId: circleId as string })}
                      >
                        {me.circleNames![index]} 동아리 관리
                      </Link>
                      <Link
                        to={generatePath(PAGE_URL.CircleUsers, { circleId: circleId as string })}
                      >
                        {me.circleNames![index]} 동아리 회원 관리
                      </Link>
                      {/* <Link to={PAGE_URL.SettingCircleBoards}>동아리 게시판 관리</Link> */}
                      <Link to={PAGE_URL.SettingRoleDelegation}>
                        {me.circleNames![index]} 권한 위임
                      </Link>
                    </div>
                  ))
                : null}
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
