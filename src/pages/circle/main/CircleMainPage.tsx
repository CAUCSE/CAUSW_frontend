import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PageUiStoreImpl } from './CircleMainPageUiStore';
import { CircleBoards, CircleLeaveModal, CircleInfoModal, CircleMainMenu } from './components';
import { CircleImage } from './styled';

import { BodyScreen, Header, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';

const CircleMainPage: React.FC = observer(() => {
  const { circleId } = useParams<{ circleId: string }>();
  const { fetch, reset, circle } = usePageUiStore<PageUiStore.CircleMain>();

  useEffect(() => {
    fetch(circleId);
    return () => reset();
  }, [fetch, circleId, reset]);

  return (
    <>
      <Header mini title={circle?.name} withBack RightComponent={<CircleMainMenu />} />
      <PageBody>
        <BodyScreen style={{ paddingBottom: '20px' }}>
          {circle?.mainImage ? <CircleImage src={circle.mainImage} /> : null}
          <CircleBoards />
        </BodyScreen>
      </PageBody>

      <CircleInfoModal />
      <CircleLeaveModal />
    </>
  );
});

export default PageStoreHOC(<CircleMainPage />, { store: PageUiStoreImpl });
