import { http } from 'msw';

import {
  getAllCircleHandler,
  getDetailCircleBoardHandler,
  getDetailCircleHandler,
} from './circleHandler';
import { getHistoryComment } from './historyHandler';
import { getHomePageHandler } from './homeHandler';
import { getAllLocationHandler, getLocationHandler, putLocker } from './lockerHandler';
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
  http.get('/api/v1/lockers/locations', getAllLocationHandler),
  http.get('/api/v1/lockers/locations/3', getLocationHandler),
  http.put('/api/v1/lockers/1', putLocker),

  //history
  http.get('/api/v1/users/comments?pageNum=0`', getHistoryComment),
];

export default handlers;
