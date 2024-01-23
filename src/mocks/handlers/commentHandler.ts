import { http, HttpResponse } from 'msw';

import { commentList } from '../mockData';

const getCommentHandler = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get('postId');
  const pageNum = url.searchParams.get('pageNum');
  return HttpResponse.json<PostComment.GetResponseDto>({
    content: commentList.content,
    last: false,
  });
};

const createCommentHandler = () => {};

const editCommentHandler = () => {};

const deleteCommentHandler = () => {};

export const postHandler = [
  http.get('/api/v1/comments', getCommentHandler),
  http.post('/api/v1/comments', createCommentHandler),
  http.put('/api/v1/comments/:id', editCommentHandler),
  http.delete('/api/v1/comments/:id', deleteCommentHandler),
];
