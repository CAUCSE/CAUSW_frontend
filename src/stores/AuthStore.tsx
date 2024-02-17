import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from './repositories/AuthRepo';

import { removeAuth, restoreAuth } from '@/configs/axios';

export class AuthStore {
  rootStore: Store.Root;
  me?: Model.User;

  constructor(rootStore: Store.Root) {
    makeAutoObservable(
      this,
      {
        rootStore: false,
        isSignIn: false,
      },
      { autoBind: true },
    );

    this.rootStore = rootStore;
  }

  *fetch(): Generator {
    this.me = (yield Repo.findCurrentUser()) as Model.User;
  }

  *checkToken(): Generator {
    try {
      this.me = (yield Repo.findCurrentUser()) as Model.User;
      console.log(this.me);
      return { success: true };
    } catch (err) {
      removeAuth();
      return err;
    }
  }

  signOut(): void {
    removeAuth();
  }

  get isSignIn(): boolean {
    return restoreAuth();
  }
}
