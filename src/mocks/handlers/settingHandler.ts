import { http, ResponseResolver, HttpResponse } from 'msw';

import {
  privilegedUsersList,
  activeUsersList,
  inactiveUsersList,
  admissionsUsersList,
} from './data/setting';

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

export const settingHandler = [
  http.get('/api/v1/users/privileged', getPrivilegedUsersListHandler),
  http.get('/api/v1/users/admissions?pageNum=0', getadmissionsUsersListHandler),
  http.get('/api/v1/users/state/ACTIVE?pageNum=0', getActiveUsersListHandler),
  http.get('/api/v1/users/state/INACTIVE?pageNum=0', getInactiveUsersListHandler),
];
