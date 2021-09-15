import { API, setAuth, storeAuth } from 'configs/axios';
import { DtoUserCreate } from './AuthType';

class AuthRepo {
  URI = '/api/v1/users';

  signUp = (body: DtoUserCreate) => API.post(`${this.URI}/sign-up`, body);
  signIn = async (body: DtoUserSignInRequest) => {
    const { data: token } = await API.post(`${this.URI}/sign-in`, body);

    storeAuth(!!body.auto, token);
    setAuth(token);

    return token;
  };
}

export const AuthRepoImpl = new AuthRepo();
export interface DtoUserSignInRequest {
  email: string;
  password: string;
  auto?: boolean; // 자동 로그인 필드
}
