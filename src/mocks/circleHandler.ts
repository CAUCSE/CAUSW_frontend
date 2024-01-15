import { HttpResponse } from 'msw';
import { boardList, circleList } from './mockData';

export const getAllCircleHandler = () => {
  return HttpResponse.json<Circle.FindByIdDto[]>(circleList);
};

export const getDetailCircleBoardHandler = () => {
  return HttpResponse.json<Circle.FindBoardsDto>({
    circle: circleList[0],
    boardList: boardList,
  });
};

export const getDetailCircleHandler = () => {
  return HttpResponse.json<Circle.FindByIdDto>(circleList[0]);
};
