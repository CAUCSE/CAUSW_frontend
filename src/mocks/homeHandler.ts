import { HttpResponse } from 'msw';

import { contentList } from './mockData';

export const getHomePageHandler = () => {
  return HttpResponse.json<Home.GetHomePageResponseDto>([
    {
      board: { id: '0', category: 'board_category', name: '학생회 공지게시판' },
      posts: {
        content: contentList,
      },
    },
  ]);
};
