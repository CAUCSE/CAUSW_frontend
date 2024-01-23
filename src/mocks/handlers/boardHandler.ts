import { http, HttpResponse } from 'msw';

import { boardList } from '../mockData';

import { BoardDto } from '@/stores/repositories/BoardRepo';

export const boardHandler = [
  http.get('/api/v1/boards', () => {
    return HttpResponse.json<BoardDto[]>(boardList);
  }),
];
