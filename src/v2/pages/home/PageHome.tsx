import { memo, useEffect } from 'react';

import { CircleLinks } from './components/CircleLinks';
import { HomeBoards } from './components/HomeBoards';

import { Header } from '@/components/header';
import { useRootStore } from '@/stores/RootStore';

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
