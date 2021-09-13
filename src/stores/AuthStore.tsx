import { AuthRepoImpl } from './repositories/AuthRepo';
import { UserModel } from './models/UserModel';

export class AuthStore {
  rootStore: Store.Root;
  user: UserModel | null;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    this.user = null;
  }

  async signIn(body: any): Promise<any> {
    try {
      const { data } = await AuthRepoImpl.signIn(body);
      this.user = new UserModel(data);
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
