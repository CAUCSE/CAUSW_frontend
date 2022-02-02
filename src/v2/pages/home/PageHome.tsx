import { memo, useEffect } from 'react';
import { useRootStore } from '@/stores/RootStore';
import { Header } from '@/components/header';
import { CircleLinks } from './components/CircleLinks';
import { HomeBoards } from './components/HomeBoards';

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
