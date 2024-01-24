import { http, HttpResponse } from 'msw';

import { boardList } from './data/board';
import { contentList } from './data/post';

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
