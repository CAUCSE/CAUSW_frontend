import { makeAutoObservable } from 'mobx';

import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class LeaveModalUiStore {
  visible = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  *leave(): Generator {
    try {
      yield Repo.leave();

      return { success: true };
    } catch (error) {
      return error;
    }
  }
}
