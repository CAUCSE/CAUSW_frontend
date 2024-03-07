import { http, ResponseResolver, HttpResponse } from 'msw';

import {
  privilegedUsersList,
  activeUsersList,
  inactiveUsersList,
  admissionsUsersList,
  admissionsSearchUsersList,
  circleUsersList,
} from '../data/setting';

const getPrivilegedUsersListHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindPrivilegedUsersResponseDto>(privilegedUsersList);
};

const getadmissionsUsersListHandler: ResponseResolver = ({ request }) => {
  const url = new URL(request.url);
  if (url.searchParams.get('name') === '강민규')
    return HttpResponse.json<User.FindAllAdmissionsResponseDto>(admissionsSearchUsersList);
  return HttpResponse.json<User.FindAllAdmissionsResponseDto>(admissionsUsersList);
};

const getadmissionsSearchUsersListHandler: ResponseResolver = ({ request }) => {
  return HttpResponse.json<User.FindAllAdmissionsResponseDto>(admissionsSearchUsersList);
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
  //http.get('/api/v1/users/privileged', getPrivilegedUsersListHandler),
  http.get(
    import.meta.env.VITE_DEV_SERVER_URL + '/api/v1/users/admissions?name=&pageNum=0',
    getadmissionsUsersListHandler,
  ),
  /*   http.get(
    import.meta.env.VITE_DEV_SERVER_URL + '/api/v1/users/admissions?name=강민규?pageNum=0',
    getadmissionsSearchUsersListHandler,
  ), */
  //http.get('/api/v1/users/state/ACTIVE?pageNum=0', getActiveUsersListHandler),
  //http.get('/api/v1/users/state/INACTIVE?pageNum=0', getInactiveUsersListHandler),
  //http.get('/api/v1/circles/:circleId/users?status=AWAIT', getCircleUserListHandler),
  //http.get('/api/v1/circles/:circleId/users?status=MEMBER', getCircleUserListHandler),
  //http.get('/api/v1/circles/:circleId/users?status=LEAVE', getCircleUserListHandler),
];
