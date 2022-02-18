import { AxiosResponse } from 'axios';

import { UserModel } from '../models/UserModel';
import { DtoUserCreate } from './AuthType';

import { API, setAuth, storeAuth } from 'configs/axios';

class AuthRepo {
  URI = '/api/v1/users';

  signIn = async (body: User.SignInRequestDto) => {
    const { data: token } = (await API.post(`${this.URI}/sign-in`, body)) as AxiosResponse<string>;

    storeAuth(!!body.auto, token);
    setAuth(token);
  };

  // ==

  findCurrentUser = async (): Promise<Model.User> => {
    const { data } = await API.get(`${this.URI}/me`);

    return new UserModel(data);
  };

  // ---
  signUp = (body: DtoUserCreate) => API.post(`${this.URI}/sign-up`, body);
}

export const AuthRepoImpl = new AuthRepo();
