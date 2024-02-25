import { http, ResponseResolver, HttpResponse } from 'msw';

const getAccessTokenHandler: ResponseResolver = () => {
  return HttpResponse.json<User.UpdateAccessTokenRequestDto>({
    accessToken: 'string',
    refreshToken: 'string',
  });
};

export const AusthHandler = [
  http.get('/api/v1/users/token/updatePutmapping', getAccessTokenHandler),
  http.get('/api/v1/users/me', (req, res, context) =>
    res(context.status(200), context.json({ data: 'some-random-fake-data' })),
  ),
];
