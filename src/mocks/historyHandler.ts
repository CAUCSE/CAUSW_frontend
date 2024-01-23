import { HttpResponse, ResponseResolver, http } from 'msw';

import { historyCommentList, historyPostList } from './mockData';

const getHistoryCommentHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindCommentsResponseDto>(historyCommentList);
};

const getHistoryPostHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindPostsResponseDto>(historyPostList);
};

export const historyHandler = [
  http.get('/api/v1/users/comments?pageNum=0', getHistoryCommentHandler),
  http.get('/api/v1/users/posts?pageNum=0', getHistoryPostHandler),
];
