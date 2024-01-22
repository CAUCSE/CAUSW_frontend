import { HttpResponse } from 'msw';

import { lockerLocationsList } from './mockData';

export const getAllLocationHandler = () => {
  return HttpResponse.json<Locker.FindAllLocationResponseDto>(lockerLocationsList);
};
