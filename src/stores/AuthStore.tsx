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
    //Token 존재 확인
    if (!restoreAuth()) return { success: false };
    //Token 유효성 확인
    try {
      this.me = (yield Repo.findCurrentUser()) as Model.User;
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
