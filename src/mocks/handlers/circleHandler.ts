import { http, HttpResponse } from 'msw';

import { circleBoardList, circleList } from './data/circle';

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

const joinCircleHandler = async ({ params }: { params: { circleId: string } }) => {
  const { circleId } = params;

  if (circleId === '0') {
    return new HttpResponse(null, { status: 401 });
  } else {
    return HttpResponse.json({});
  }
  // if (errorCode === 4001) this.status = 'MEMBER';
  // else if (errorCode === 4008) this.status = 'AWAIT';
  // else if (errorCode === 4102) this.status = 'BLOCK';
  // else if (errorCode === 4010) this.status = 'BLOCK';
};

export const circleHandler = [
  http.get('/api/v1/circles', getAllCircleHandler),
  http.get('/api/v1/circles/:circleId/boards', getDetailCircleBoardHandler),
  http.get('/api/v1/circles/:circleId', getDetailCircleHandler),
  http.post('/api/v1/circles/:circleId/applications', joinCircleHandler),
];
