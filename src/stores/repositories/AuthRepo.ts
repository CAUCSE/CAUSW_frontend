import { API } from 'configs/axios';
import { DtoUserCreate, DtoUserSignInRequest } from './AuthType';

class AuthRepo {
  URI = '/api/v1/users';

  signUp = (body: DtoUserCreate) => API.post(`${this.URI}/sign-up`, body);
  signIn = (body: DtoUserSignInRequest) => API.post(`${this.URI}/sign-in`, body);
}

export const AuthRepoImpl = new AuthRepo();
