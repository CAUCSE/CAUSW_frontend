import { http, ResponseResolver, HttpResponse } from 'msw';

import {
  privilegedUsersList,
  activeUsersList,
  inactiveUsersList,
  admissionsUsersList,
  circleUsersList,
} from '../data/setting';

const getPrivilegedUsersListHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindPrivilegedUsersResponseDto>(privilegedUsersList);
};

const getadmissionsUsersListHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindAllAdmissionsResponseDto>(admissionsUsersList);
};

const getActiveUsersListHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindByStateResponseDto>(activeUsersList);
};

const getInactiveUsersListHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindByStateResponseDto>(inactiveUsersList);
};

//circle leader setting
const getCircleUserListHandler: ResponseResolver = () => {
  return HttpResponse.json<Circle.GetUserListResponseDto>(circleUsersList);
};

export const settingHandler = [
  http.get('/api/v1/users/privileged', getPrivilegedUsersListHandler),
  http.get('/api/v1/users/admissions?pageNum=0', getadmissionsUsersListHandler),
  http.get('/api/v1/users/state/ACTIVE?pageNum=0', getActiveUsersListHandler),
  http.get('/api/v1/users/state/INACTIVE?pageNum=0', getInactiveUsersListHandler),
  http.get('/api/v1/circles/:circleId/users?status=AWAIT', getCircleUserListHandler),
  http.get('/api/v1/circles/:circleId/users?status=MEMBER', getCircleUserListHandler),
  http.get('/api/v1/circles/:circleId/users?status=LEAVE', getCircleUserListHandler),
];
