import { http, ResponseResolver, HttpResponse } from 'msw';

import { privilegedUsersList, stateUsersList, admissionsUsersList } from './data/setting';

const getPrivilegedUsersListHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindPrivilegedUsersResponseDto>(privilegedUsersList);
};

const getStateUsersListHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindByStateResponseDto>(stateUsersList);
};

const getadmissionsUsersListHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindAllAdmissionsResponseDto>(admissionsUsersList);
};

export const settingHandler = [
  http.get('/api/v1/users/privileged', getPrivilegedUsersListHandler),
  http.get('/api/v1/users/admissions?pageNum=0', getStateUsersListHandler),
  http.get('/api/v1/users/state/ACTIVE?pageNum=0', getadmissionsUsersListHandler),
];
