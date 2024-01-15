import { http } from 'msw';
import { getAllCircleHandler, getDetailCircleHandler } from './circleHandler';
import { getHomePageHandler } from './homeHandler';
import { getAllPostHandler, getCommentHandler, getDetailPostHandler } from './postHandler';

const handlers = [
  http.get('/api/v1/home', getHomePageHandler),
  http.get('/api/v1/posts', getAllPostHandler),
  http.get('/api/v1/posts/:postId', getDetailPostHandler),
  http.get('/api/v1/comments', getCommentHandler),
  http.get('api/v1/circles', getAllCircleHandler),
  http.get('/api/v1/circles/0/boards', getDetailCircleHandler),
];

export default handlers;
