import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { LockerListCard } from './components/LockerListCard/LockerListCard';
import { LockerPosition } from './components/LockerPosition/LockerPosition';
import { PageUiStoreImpl } from './LockerListPageUiStore';

import { StudyLogo } from '@/assets';
import { BodyScreen, Header, LockerStatus, PageBody, PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const LockerListPage: React.FC = observer(() => {
  const { fetch, myLocker, lockers, enableLockerCount, totalLockerCount } =
    usePageUiStore<PageUiStore.LockerList>();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header
        withBack={PAGE_URL.Home}
        title="사물함 관리"
        TopComponent={
          <LockerStatus enableLockerCount={enableLockerCount} totalLockerCount={totalLockerCount} />
        }
        RightComponent={<StudyLogo />}
      />
      <PageBody>
        <BodyScreen>
          <LockerPosition model={myLocker} />
          {lockers.map(item => (
            <LockerListCard key={item.id} model={item} />
          ))}
        </BodyScreen>
      </PageBody>
    </>
  );
});

export default PageStoreHOC(<LockerListPage />, { store: PageUiStoreImpl });
