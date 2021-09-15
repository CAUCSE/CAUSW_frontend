import { flow, makeObservable, observable } from 'mobx';
import { restoreAuth } from 'configs/axios';
import { AuthRepoImpl as Repo, DtoUserSignInRequest as SignInRequest } from './repositories/AuthRepo';

export class AuthStore {
  rootStore: Store.Root;
  isSignIn = false;

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      isSignIn: observable,
      signIn: flow.bound,
    });

    this.rootStore = rootStore;
    this.isSignIn = restoreAuth();
  }

  *signIn(body: SignInRequest): Generator {
    try {
      yield Repo.signIn(body);

      this.isSignIn = true;
    } catch (err) {
      this.isSignIn = false;
    }
  }
}
