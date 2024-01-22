import { http, HttpResponse } from 'msw';

import { circleBoardList, circleList } from './mockData';

const getAllCircleHandler = () => {
  return HttpResponse.json<Circle.FindByIdDto[]>(circleList);
};

const getDetailCircleBoardHandler = () => {
  return HttpResponse.json<Circle.FindBoardsDto>({
    circle: circleList[0],
    boardList: circleBoardList,
  });
};

const getDetailCircleHandler = () => {
  return HttpResponse.json<Circle.FindByIdDto>(circleList[0]);
};

export const circleHandler = [
  http.get('api/v1/circles', getAllCircleHandler),
  http.get('/api/v1/circles/0/boards', getDetailCircleBoardHandler),
  http.get('/api/v1/circles/0', getDetailCircleHandler),
];
