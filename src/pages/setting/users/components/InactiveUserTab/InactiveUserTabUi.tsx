import { makeAutoObservable } from 'mobx';

import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class InactiveUserTabUi {
  users: Model.User[] = [];
  page = 0;
  hasMore = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.users = [];
    this.page = 0;
    this.hasMore = false;
  }

  *fetch(page = 0): Generator {
    try {
      if (page === 0) this.users = [];

      const { users, last } = (yield Repo.findByState(
        'INACTIVE',
        page,
      )) as User.FindByStateResponse;

      this.users = this.users.concat(users);
      this.page = page;
      this.hasMore = !last;

      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
