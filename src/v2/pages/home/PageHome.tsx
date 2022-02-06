import { memo, useEffect } from 'react';

import { CircleLinks } from './components/CircleLinks';
import { HomeBoards } from './components/HomeBoards';

import { useRootStore } from '@/stores/RootStore';
import { Header } from '@/v2/components/';

export const PageHome: React.FC = memo(() => {
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
