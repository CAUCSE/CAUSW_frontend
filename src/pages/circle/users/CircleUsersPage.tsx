import { Tab, Tabs, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { PageUiStoreImpl } from './CircleUsersPageUiStore';
import {
  AdmissionAcceptModal,
  AdmissionRejectModal,
  AdmissionUserTab,
  DropModal,
  UserTab,
  RestoreModal,
} from './components';
import { PageBody, SwipeableWrapper } from './styled';

import { GNB, Header, PageStoreHOC, UserInfoModal } from '@/components';
import { PAGE_URL } from '@/configs/path';

const a11yProps = (index: number) => ({
  id: `user-tab-${index}`,
  'aria-controls': `user-tabpanel-${index}`,
  style: { padding: '12px' },
});

const CircleUsersPage: React.FC = observer(() => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (evt: React.SyntheticEvent, index: number) => setTabIndex(index);
  const handleChangeIndex = (index: number) => setTabIndex(index);

  return (
    <>
      <Header mini title="동아리 회원 관리" withBack={PAGE_URL.Setting} RightComponent={null} />
      <PageBody>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="user setting tabs"
        >
          <Tab label="가입 대기 유저" {...a11yProps(0)} />
          <Tab label="모든 유저" {...a11yProps(1)} />
          <Tab label="탈퇴 유저" {...a11yProps(2)} />
        </Tabs>

        <SwipeableWrapper
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={tabIndex}
          onChangeIndex={handleChangeIndex}
        >
          <AdmissionUserTab value={tabIndex} index={0} dir={theme.direction} />
          <UserTab value={tabIndex} index={1} dir={theme.direction} status="MEMBER" />
          <UserTab value={tabIndex} index={2} dir={theme.direction} status="LEAVE_N_DROP" />
        </SwipeableWrapper>
      </PageBody>
      <GNB />

      <UserInfoModal />
      <AdmissionAcceptModal />
      <AdmissionRejectModal />
      <DropModal />
      <RestoreModal />
    </>
  );
});

export default PageStoreHOC(<CircleUsersPage />, { store: PageUiStoreImpl });
