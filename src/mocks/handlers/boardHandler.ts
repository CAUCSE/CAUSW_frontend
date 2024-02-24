import { http, HttpResponse } from 'msw';

import { boardList } from '../data/board';

export const boardHandler = [
  http.get('/api/v1/boards', () => {
    return HttpResponse.json<Board.ResponseDto[]>(boardList);
  }),
];
