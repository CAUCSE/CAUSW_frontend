import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from './repositories/AuthRepo';

import { removeAuth, restoreAuth } from 'configs/axios';

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

  *fetch(): Generator {
    this.me = (yield Repo.findCurrentUser()) as Model.User;
  }

  signOut(): void {
    this.isSignIn = false;
    removeAuth();
  }
}
