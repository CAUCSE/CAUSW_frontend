import { HttpResponse, ResponseResolver, http } from 'msw';

import { lockerAllLocationsList, lockerLocationsList } from './mockData';

const getAllLocationHandler: ResponseResolver = () => {
  return HttpResponse.json<Locker.FindAllLocationResponseDto>(lockerAllLocationsList);
};

const getLocationHandler: ResponseResolver = () => {
  return HttpResponse.json<Locker.FindByLocationResponseDto>(lockerLocationsList);
};

const putLockerHandler: ResponseResolver = async ({ request }) => {
  const req = await request.json();
  console.log(req);

  return new Response(null, {
    status: 200,
  });
};

export const lockerHandler = [
  http.get('/api/v1/lockers/locations', getAllLocationHandler),
  http.get('/api/v1/lockers/locations/3', getLocationHandler),
  http.put('/api/v1/lockers/1', putLockerHandler),
];
