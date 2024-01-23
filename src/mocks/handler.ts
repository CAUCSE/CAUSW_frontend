import { http } from 'msw';

import {
  getAllCircleHandler,
  getDetailCircleBoardHandler,
  getDetailCircleHandler,
} from './circleHandler';
import { historyHandler } from './historyHandler';
import { getHomePageHandler } from './homeHandler';
import { lockerHandler } from './lockerHandler';
import { getAllPostHandler, getCommentHandler, getDetailPostHandler } from './postHandler';

const handlers = [
  http.get('/api/v1/home', getHomePageHandler),
  http.get('/api/v1/posts', getAllPostHandler),
  http.get('/api/v1/posts/:postId', getDetailPostHandler),
  http.get('/api/v1/comments', getCommentHandler),
  //circle
  http.get('api/v1/circles', getAllCircleHandler),
  http.get('/api/v1/circles/0/boards', getDetailCircleBoardHandler),
  http.get('/api/v1/circles/0', getDetailCircleHandler),

  //locker
  ...lockerHandler,

  //history
  ...historyHandler,
];

export default handlers;
