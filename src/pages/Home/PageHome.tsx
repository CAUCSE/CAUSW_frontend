import { memo } from 'react';
import * as CircleLink from './components/TopCircleLink';
import { BookMarkBoard } from './components/BookMark/BookMarkBoard';
import { Header } from './components/Header';

export const PageHome: React.FC = memo(() => {
  return (
    <>
      <Header />
      <CircleLink.Wrapper>
        <CircleLink.University />
        <CircleLink.Library />
        <CircleLink.CSE />
        <CircleLink.Portal />
        <CircleLink.Locker />
      </CircleLink.Wrapper>
      <BookMarkBoard />
    </>
  );
});
