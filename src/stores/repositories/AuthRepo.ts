import { ReqSignIn, ReqSignUp } from '../../@types/Auth';
import { API } from '../../configs/axios';

class AuthRepo {
  signIn = async (body: ReqSignIn): Promise<any> => API.post('/sign-in', body);
  signUp = async (body: ReqSignUp): Promise<any> => API.post('/sign-up', body);
}

export const AuthRepoImpl = new AuthRepo();

// Front-end <- axios -> Back-end
