import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  LocationGrid,
  LockerApplicationModal,
  LockerReturnModal,
  SubmitButton,
} from './components';
import { PageUiStoreImpl } from './LockerLocationsPageUiStore';

import { StudyLogo } from '@/assets';
import { Header, LockerStatus, PageBody, PageStoreHOC } from '@/components';
import { LocationParams, PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const LockerLocationsPage: React.FC = observer(() => {
  const { locationId } = useParams<LocationParams>();
  const { fetch, enableLockerCount, totalLockerCount } =
    usePageUiStore<PageUiStore.LockerLocations>();

  useEffect(() => {
    fetch(locationId);
  }, [locationId]);

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
        <LocationGrid />
      </PageBody>
      <SubmitButton />
      <LockerApplicationModal />
      <LockerReturnModal />
    </>
  );
});

export default PageStoreHOC(<LockerLocationsPage />, { store: PageUiStoreImpl });
