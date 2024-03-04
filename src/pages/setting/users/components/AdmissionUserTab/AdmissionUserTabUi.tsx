import { makeAutoObservable } from 'mobx';

import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class AdmissionUserTabUi {
  users: Model.AdmissionUser[] = [];
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

  *fetch(name: string | null = null, page = 0): Generator {
    try {
      if (page === 0) this.users = [];

      const { users, last } = (yield Repo.findAllAdmissions(
        name,
        page,
      )) as User.FindAllAdmissionsResponse;

      this.users = this.users.concat(users);
      this.page = page;
      this.hasMore = !last;

      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }

  remove(target: Model.AdmissionUser): void {
    this.users = this.users.filter(user => user.id !== target.id);
  }
}
