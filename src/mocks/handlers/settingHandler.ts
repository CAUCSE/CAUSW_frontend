import { http, ResponseResolver, HttpResponse } from 'msw';

import { privilegedUsersList } from './data/setting';

const getPrivilegedUsersListHandler: ResponseResolver = () => {
  return HttpResponse.json<User.FindPrivilegedUsersResponseDto>(privilegedUsersList);
};

export const settingHandler = [http.get('/api/v1/users/privileged', getPrivilegedUsersListHandler)];
