import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from './repositories/AuthRepo';

import { getRefresh, removeRefresh, resetAccess, getAccess } from '@/configs/axios';

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
      return { success: true };
    } catch (err) {
      return err;
    }
  }

  signOut(): void {
    Repo.signOut({ accessToken: getAccess(), refreshToken: getRefresh() ?? '' });
    resetAccess();
    removeRefresh();
  }

  get isSignIn(): boolean {
    return getRefresh() ? true : false;
  }
}
