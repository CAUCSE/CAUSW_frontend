import { AxiosResponse } from 'axios';

import { UserModel } from '../models/UserModel';

import { API, setAuth, storeAuth } from 'configs/axios';

class AuthRepo {
  URI = '/api/v1/users';

  signIn = async (body: User.SignInRequestDto) => {
    const { data: token } = (await API.post(`${this.URI}/sign-in`, body)) as AxiosResponse<string>;

    storeAuth(!!body.auto, token);
    setAuth(token);
  };

  isDuplicatedEmail = async (email: string): Promise<boolean> => {
    const {
      data: { result },
    } = (await API.get(
      `${this.URI}/${email}/is-duplicated`,
    )) as AxiosResponse<User.IsDuplicatedEmailResponseDto>;

    return result;
  };

  signUp = async (body: User.CreateDto) => {
    return API.post(`${this.URI}/sign-up`, body);
  };

  // ==

  findCurrentUser = async (): Promise<Model.User> => {
    const { data } = await API.get(`${this.URI}/me`);

    return new UserModel(data);
  };
}

export const AuthRepoImpl = new AuthRepo();
