import { memo, useEffect } from 'react';

import { CircleLinks } from './components/CircleLinks';
import { HomeBoards } from './components/HomeBoards';

import { useRootStore } from '@/stores/RootStore';
import { Header, LayoutHOC } from '@/v2/components/';

const PageHome: React.FC = memo(() => {
  const {
    home: { fetch },
  } = useRootStore();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header title="동문 네트워크" />
      <CircleLinks />
      <HomeBoards />
    </>
  );
});

export default LayoutHOC(PageHome);
