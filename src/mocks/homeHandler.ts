import { http, HttpResponse } from 'msw';

import { contentList } from './mockData';

const getHomePageHandler = () => {
  return HttpResponse.json<Home.GetHomePageResponseDto>([
    {
      board: { id: '0', category: 'board_category', name: '학생회 공지게시판' },
      posts: {
        content: contentList,
      },
    },
  ]);
};

export const homeHandler = [http.get('/api/v1/home', getHomePageHandler)];
