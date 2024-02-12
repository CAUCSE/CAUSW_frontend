import { AxiosResponse } from 'axios';

import { UserModel } from '../models/UserModel';

import { API, setAuth, storeAuth } from '@/configs/axios';

class AuthRepo {
  URI = '/api/v1/users';

  signIn = async (body: User.SignInRequestDto) => {
    const { data: token } = (await API.post(`${this.URI}/sign-in`, body)) as AxiosResponse<string>;

    storeAuth(true, token);
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

  createAdmission = async (body: FormData): Promise<void> => {
    return API.post(`${this.URI}/admissions/apply`, body);
  };

  findCurrentUser = async (): Promise<Model.User> => {
    const { data } = await API.get(`${this.URI}/me`);

    //이하 동아리 설정 활성화를 위한 조치
    data.circleIdIfLeader = ['3', '4'];
    data.circleNameIfLeader = ['circle_name3', 'circle_name4'];
    //이상 동아리 설정 활성화를 위한 조치

    return new UserModel(data);
  };

  updatePassword = async (body: User.PasswordUpdateRequestDto) => {
    return API.put(`${this.URI}/password`, body);
  };
}

export const AuthRepoImpl = new AuthRepo();
