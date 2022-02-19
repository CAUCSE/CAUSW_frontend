import { makeAutoObservable } from 'mobx';

import { HomeRepoImpl as Repo } from '@/stores/repositories/HomeRepo';

export class HomePageUiStore {
  boards: Home.GetHomePageResponse = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.boards = [];
  }

  *fetch(): Generator {
    this.boards = (yield Repo.getHomePage()) as Home.GetHomePageResponse;
  }
}

export const PageUiStoreImpl = new HomePageUiStore();
