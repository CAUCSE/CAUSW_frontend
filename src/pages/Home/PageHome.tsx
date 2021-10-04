import React from 'react';
import * as CircleLink from './components/TopCircleLink';

export const PageHome: React.FC = React.memo(() => {
  return (
    <>
      <div>logo</div>
      <CircleLink.Wrapper>
        <CircleLink.University />
        <CircleLink.Library />
        <CircleLink.CSE />
        <CircleLink.Portal />
        <CircleLink.Locker />
      </CircleLink.Wrapper>
      <div>배너 슬라이드</div>
      <h2>즐겨찾는 게시판</h2>
      <div>게시판 컴포넌트 1</div>
      <div>게시판 컴포넌트 2</div>
      <div>게시판 컴포넌트 3</div>
    </>
  );
});
