import { http } from 'msw';

import {
  getAllCircleHandler,
  getDetailCircleBoardHandler,
  getDetailCircleHandler,
} from './circleHandler';
import { getHomePageHandler } from './homeHandler';
import {
  createPostHandler,
  editPostHandler,
  getAllPostHandler,
  getCommentHandler,
  getDetailPostHandler,
} from './postHandler';

const handlers = [
  http.get('/api/v1/home', getHomePageHandler),
  http.get('/api/v1/posts', getAllPostHandler),
  http.post('/api/v1/posts', createPostHandler),
  http.get('/api/v1/posts/:postId', getDetailPostHandler),
  http.put('/api/v1/posts/:postId', editPostHandler),
  http.get('/api/v1/comments', getCommentHandler),
  http.get('api/v1/circles', getAllCircleHandler),
  http.get('/api/v1/circles/0/boards', getDetailCircleBoardHandler),
  http.get('/api/v1/circles/0', getDetailCircleHandler),
];

export default handlers;
