import { ReqSignIn } from '../../@types/Auth';
import { API } from '../../configs/axios';

class AuthRepo {
  signIn = async (body: ReqSignIn): Promise<any> => API.post('/sign-in', body);
}

export const AuthRepoImpl = new AuthRepo();

// Front-end <- axios -> Back-end
