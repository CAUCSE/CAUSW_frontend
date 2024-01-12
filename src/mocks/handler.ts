import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('/api/test', () => {
    return HttpResponse.json({ id: 'abc', name: 'Gyu' });
  }),
];

export default handlers;
