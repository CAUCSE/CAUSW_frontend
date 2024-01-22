import { HttpResponse, ResponseResolver } from 'msw';

import { historyCommentList } from './mockData';

export const getHistoryComment: ResponseResolver = () => {
  return HttpResponse.json<User.FindCommentsResponseDto>(historyCommentList);
};
