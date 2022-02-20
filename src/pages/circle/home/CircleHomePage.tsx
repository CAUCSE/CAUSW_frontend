import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { PageUiStoreImpl } from './CircleHomePageUiStore';
import * as Circle from './components';
import { H2 } from './styled';

import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/v2/hooks';

const CircleHomePage: React.FC = observer(() => {
  const { fetch, circles, joinedCircles } = usePageUiStore<PageUiStore.CircleHome>();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="학부 소모임" />
      <PageBody>
        <BodyScreen>
          {/* <Circle.SearchBar /> */}
          <H2>전체 소모임</H2>
          <Circle.ListFrame
            items={circles}
            emptyText={'아직 등록된 소모임이 없어요!'}
            ListComponent={Circle.Slider}
          />
          <H2>내 소모임</H2>
          <Circle.ListFrame
            items={joinedCircles}
            emptyText={'아직 가입한 소모임이 없어요!'}
            ListComponent={Circle.List}
          />
        </BodyScreen>
      </PageBody>
      <GNB />
    </>
  );
});

export default PageStoreHOC(<CircleHomePage />, { store: PageUiStoreImpl });
