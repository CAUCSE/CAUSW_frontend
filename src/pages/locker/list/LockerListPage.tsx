import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { LockerListCard, LockerPosition } from './components';
import { PageUiStoreImpl } from './LockerListPageUiStore';

import { StudyLogo } from '@/assets';
import { BodyScreen, GNB, Header, LockerStatus, PageBody, PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const LockerListPage: React.FC = observer(() => {
  const { fetch, lockers, enableLockerCount, totalLockerCount } =
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
          <LockerPosition />
          {lockers.map(item => (
            <LockerListCard key={item.id} model={item} />
          ))}
        </BodyScreen>
      </PageBody>
    </>
  );
});

export default PageStoreHOC(<LockerListPage />, { store: PageUiStoreImpl });
