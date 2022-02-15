import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import * as Circle from './components';
import { H2 } from './styled';

import { useRootStore } from '@/stores/RootStore';
import { Header, LayoutHOC } from '@/v2/components';

const PageCircleHome: React.FC = observer(() => {
  const {
    circle: { fetch, circles, joinedCircles },
  } = useRootStore();

  useEffect(() => {
    fetch();
  }, []);

  // TODO: 페이지 스켈레톤
  return (
    <>
      <Header title="학부 소모임" />
      <Circle.SearchBar />
      <H2>전체 소모임</H2>
      <Circle.ListFrame items={circles} emptyText={'아직 등록된 소모임이 없어요!'} ListComponent={Circle.Slider} />
      <H2>내 소모임</H2>
      <Circle.ListFrame items={joinedCircles} emptyText={'아직 가입한 소모임이 없어요!'} ListComponent={Circle.List} />
    </>
  );
});

export default LayoutHOC(PageCircleHome);
