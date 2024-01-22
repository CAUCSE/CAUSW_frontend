import { http, HttpResponse } from 'msw';

import { boardList, contentList } from './mockData';

const getHomePageHandler = () => {
  return HttpResponse.json<Home.GetHomePageResponseDto>([
    {
      board: boardList[0],
      posts: {
        content: contentList,
      },
    },
  ]);
};

export const homeHandler = [http.get('/api/v1/home', getHomePageHandler)];
