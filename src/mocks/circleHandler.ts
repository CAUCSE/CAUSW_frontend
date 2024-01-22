import { http, HttpResponse } from 'msw';

import { circleBoardList, circleList } from './mockData';

const getAllCircleHandler = () => {
  return HttpResponse.json<Circle.FindByIdDto[]>(circleList);
};

const getDetailCircleBoardHandler = ({ params }: { params: { circleId: string } }) => {
  const { circleId } = params;
  return HttpResponse.json<Circle.FindBoardsDto>({
    circle: circleList[parseInt(circleId)],
    boardList: circleBoardList,
  });
};

const getDetailCircleHandler = ({ params }: { params: { circleId: string } }) => {
  const { circleId } = params;
  return HttpResponse.json<Circle.FindByIdDto>(circleList[parseInt(circleId)]);
};

export const circleHandler = [
  http.get('/api/v1/circles', getAllCircleHandler),
  http.get('/api/v1/circles/:circleId/boards', getDetailCircleBoardHandler),
  http.get('/api/v1/circles/:circleId', getDetailCircleHandler),
];
