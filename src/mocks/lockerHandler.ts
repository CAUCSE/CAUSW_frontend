import { HttpResponse, ResponseResolver } from 'msw';

import { lockerAllLocationsList, lockerLocationsList } from './mockData';

export const getAllLocationHandler = () => {
  return HttpResponse.json<Locker.FindAllLocationResponseDto>(lockerAllLocationsList);
};

export const getLocationHandler = () => {
  return HttpResponse.json<Locker.FindByLocationResponseDto>(lockerLocationsList);
};

export const putLocker: ResponseResolver = async ({ request }) => {
  const req = await request.json();
  console.log(req);

  return new Response(null, {
    status: 200,
  });
};
