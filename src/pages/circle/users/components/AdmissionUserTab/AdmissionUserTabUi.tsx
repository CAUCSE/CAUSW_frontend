import { makeAutoObservable } from 'mobx';

import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class AdmissionUserTabUi {
  users: Model.CircleUser[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.users = [];
  }

  *fetch(circleId: string): Generator {
    try {
      const users = (yield Repo.getUserList(circleId, 'AWAIT')) as Circle.GetUserListResponse;

      this.users = users;
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }

  remove(target: Model.CircleUser): void {
    this.users = this.users.filter(circleUser => circleUser.user.id !== target.user.id);
  }
}
