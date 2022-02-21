import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { LockerListCard, LockerPosition, LockerStatus } from './components';
import { PageUiStoreImpl } from './LockerListPageUiStore';

import { StudyLogo } from '@/assets';
import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { PAGE_URL } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

const LockerListPage: React.FC = observer(() => {
  const { fetch, lockers } = usePageUiStore<PageUiStore.LockerList>();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header
        withBack={PAGE_URL.Home}
        title="사물함 관리"
        TopComponent={<LockerStatus />}
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
      <GNB />
    </>
  );
});

export default PageStoreHOC(<LockerListPage />, { store: PageUiStoreImpl });
