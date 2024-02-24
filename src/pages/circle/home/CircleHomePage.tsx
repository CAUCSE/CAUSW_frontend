import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { PageUiStoreImpl } from './CircleHomePageUiStore';
import * as Circle from './components';
import { H2 } from './styled';

import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';

const CircleHomePage: React.FC = observer(() => {
  const { fetch, circles, joinedCircles } = usePageUiStore<PageUiStore.CircleHome>();

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <Header title="학부 동아리" />
      <PageBody>
        <BodyScreen>
          {/* <Circle.SearchBar /> */}
          <H2>전체 동아리</H2>
          <Circle.ListFrame
            items={circles}
            emptyText={'아직 등록된 동아리가 없어요!'}
            ListComponent={Circle.Slider}
          />
          <H2>내 동아리</H2>
          <Circle.ListFrame
            items={joinedCircles}
            emptyText={'아직 가입한 동아리가 없어요!'}
            ListComponent={Circle.List}
          />
        </BodyScreen>
      </PageBody>
      <GNB />
    </>
  );
});

export default PageStoreHOC(<CircleHomePage />, { store: PageUiStoreImpl });
