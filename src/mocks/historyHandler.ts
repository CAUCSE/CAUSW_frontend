import { HttpResponse, ResponseResolver } from 'msw';

import { historyCommentList, historyPostList } from './mockData';

export const getHistoryCommentHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindCommentsResponseDto>(historyCommentList);
};

export const getHistoryPostHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindPostsResponseDto>(historyPostList);
};
