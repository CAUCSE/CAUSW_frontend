import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { PageUiStoreImpl } from './CircleHomePageUiStore';
import * as Circle from './components';
import { H2 } from './styled';

import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore, useDeviceState } from '@/hooks';

const WEB_WIDTH_CONDITION = 550;
const RESIZE_DELAY = 300;
let timer: string | number | NodeJS.Timeout | undefined;

const CircleHomePage: React.FC = observer(() => {
  const { fetch, circles, joinedCircles } = usePageUiStore<PageUiStore.CircleHome>();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile] = useDeviceState();

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    const handleWindowResize = () => {
      clearTimeout(timer);
      timer = setTimeout(function () {
        setScreenWidth(window.innerWidth);
      }, RESIZE_DELAY);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

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
            ListComponent={!isMobile ? Circle.WebSlider : Circle.Slider}
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
