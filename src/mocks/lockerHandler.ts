import { HttpResponse } from 'msw';

import { lockerAllLocationsList, lockerLocationsList } from './mockData';

export const getAllLocationHandler = () => {
  return HttpResponse.json<Locker.FindAllLocationResponseDto>(lockerAllLocationsList);
};

export const getLocationHandler = () => {
  return HttpResponse.json<Locker.FindAllLocationResponseDto>(lockerLocationsList);
};
