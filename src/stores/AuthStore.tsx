import { AuthRepoImpl } from './repositories/AuthRepo';
import { ReqSignIn, ReqSignUp } from '../@types/Auth';
import { UserModel } from './models/UserModel';

export class AuthStore {
  rootStore: Store.Root;
  user: UserModel | null;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    this.user = null;
  }

  async signIn(body: ReqSignIn): Promise<any> {
    try {
      const { data } = await AuthRepoImpl.signIn(body);
      this.user = new UserModel(data);
    } catch (error) {
      throw 401;
    }
  }

  async signUp(body: ReqSignUp): Promise<any> {
    try {
      const { data } = await AuthRepoImpl.signUp(body);
    } catch (error) {
      throw 401;
    }
  }
  
  signOut(): void {
    this.user = null;
  }

  get isSignIn(): boolean {
    return this.user !== null;
  }
}