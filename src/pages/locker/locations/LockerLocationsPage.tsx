import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { LocationGrid } from './components';
import { PageUiStoreImpl } from './LockerLocationsPageUiStore';

import { StudyLogo } from '@/assets';
import {
  BodyScreen,
  Header,
  LockerStatus,
  NavButton,
  PageBody,
  PageFooter,
  PageStoreHOC,
} from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const LockerLocationsPage: React.FC = observer(() => {
  const { fetch, enableLockerCount, totalLockerCount } =
    usePageUiStore<PageUiStore.LockerLocations>();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header
        withBack={PAGE_URL.LockerList}
        title="사물함 관리"
        TopComponent={
          <LockerStatus enableLockerCount={enableLockerCount} totalLockerCount={totalLockerCount} />
        }
        RightComponent={<StudyLogo />}
      />
      <PageBody>
        <BodyScreen>
          <LocationGrid />
        </BodyScreen>
      </PageBody>
      <PageFooter>
        <NavButton>신청하기</NavButton>
      </PageFooter>
    </>
  );
});

export default PageStoreHOC(<LockerLocationsPage />, { store: PageUiStoreImpl });
