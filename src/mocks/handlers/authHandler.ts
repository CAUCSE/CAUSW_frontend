import { http, ResponseResolver, HttpResponse } from 'msw';

const postSignInHandler: ResponseResolver = () => {
  return HttpResponse.json<{
    accessToken: string;
    refreshToken: string;
  }>({
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
  });
};

const putAccessTokenHandler: ResponseResolver = () => {
  return HttpResponse.json<{
    accessToken: string;
    refreshToken: string;
  }>({
    accessToken: 'accessToken2',
    refreshToken: 'refreshToken2',
  });
};

const accessTokenErrorHandler: ResponseResolver = () => {
  return new HttpResponse(null, {
    status: 401,
  });
};

export const authHandler = [
  // http.post(import.meta.env.VITE_DEV_SERVER_URL + '/api/v1/users/sign-in', postSignInHandler),
  http.put(
    import.meta.env.VITE_DEV_SERVER_URL + '/api/v1/users/token/update',
    putAccessTokenHandler,
  ),
  // http.get(import.meta.env.VITE_DEV_SERVER_URL + '/api/v1/users/me', accessTokenErrorHandler),
];
