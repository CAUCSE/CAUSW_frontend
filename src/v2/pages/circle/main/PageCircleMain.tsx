import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PageUiStoreImpl } from './CircleMainPageUiStore';
import { CircleBoards, CircleInfoModal, CircleMainMenu } from './components';
import { CircleImage } from './styled';

import { useRootStore } from '@/stores/RootStore';
import { Header, LayoutHOC } from '@/v2/components';

const PageCircleMain: React.FC = observer(() => {
  const { circleId } = useParams<{ circleId: string }>();
  const {
    circle: { fetchMain, reset, circle },
  } = useRootStore();

  useEffect(() => {
    fetchMain(circleId);
    return () => reset();
  }, [circleId]);

  return (
    <>
      <Header mini title={circle?.name} withBack RightComponent={CircleMainMenu} />
      {circle?.mainImage ? <CircleImage src={circle.mainImage} /> : null}
      <CircleBoards />

      <CircleInfoModal />
    </>
  );
});

export default LayoutHOC(PageCircleMain, { pageUiStore: PageUiStoreImpl });
