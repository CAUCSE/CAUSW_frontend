import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from './repositories/AuthRepo';

import { restoreAuth } from 'configs/axios';

export class AuthStore {
  rootStore: Store.Root;
  me?: Model.User;
  isSignIn = false;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    this.isSignIn = restoreAuth();

    makeAutoObservable(
      this,
      {
        rootStore: false,
      },
      { autoBind: true },
    );
  }

  *signIn(body: User.SignInRequestDto): Generator {
    try {
      yield Repo.signIn(body);
      this.isSignIn = true;
    } catch (err) {
      this.isSignIn = false;
      alert('아이디 혹은 비밀번호가 잘못되었습니다');
    }
  }


  // ==

  *fetch(): Generator {
    this.me = (yield Repo.findCurrentUser()) as Model.User;
  }
}
