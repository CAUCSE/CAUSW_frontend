import { Tab, Tabs, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import {
  ActiveUserTab,
  AdmissionAcceptModal,
  AdmissionInfoModal,
  AdmissionRejectModal,
  AdmissionUserTab,
  DropModal,
  InactiveUserTab,
} from './components';
import { PageUiStoreImpl } from './SettingUsersPageUiStore';
import { PageBody, SwipeableWrapper } from './styled';

import { GNB, Header, PageStoreHOC, UserInfoModal } from '@/components';
import { PAGE_URL } from '@/configs/path';

const a11yProps = (index: number) => ({
  id: `user-tab-${index}`,
  'aria-controls': `user-tabpanel-${index}`,
  style: { padding: '12px' },
});

const SettingUsersPage: React.FC = observer(() => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (evt: React.SyntheticEvent, index: number) => setTabIndex(index);
  const handleChangeIndex = (index: number) => setTabIndex(index);

  return (
    <>
      <Header mini title="유저 관리" withBack={PAGE_URL.Setting} RightComponent={null} />
      <PageBody>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="user setting tabs"
        >
          <Tab label="가입 대기 유저" {...a11yProps(0)} />
          <Tab label="활성 유저" {...a11yProps(1)} />
          <Tab label="탈퇴 유저" {...a11yProps(2)} />
        </Tabs>

        <SwipeableWrapper
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={tabIndex}
          onChangeIndex={handleChangeIndex}
        >
          <AdmissionUserTab value={tabIndex} index={0} dir={theme.direction} />
          <ActiveUserTab value={tabIndex} index={1} dir={theme.direction} />
          <InactiveUserTab value={tabIndex} index={2} dir={theme.direction} />
        </SwipeableWrapper>
      </PageBody>
      <GNB />

      <UserInfoModal />
      <AdmissionInfoModal />
      <AdmissionAcceptModal />
      <AdmissionRejectModal />
      <DropModal />
    </>
  );
});

export default PageStoreHOC(<SettingUsersPage />, { store: PageUiStoreImpl });
