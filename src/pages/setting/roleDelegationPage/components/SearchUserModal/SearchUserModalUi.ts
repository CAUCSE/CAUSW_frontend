import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class SearchUserModalUi extends ModalUi<void> {
  users: Model.User[] = [];

  constructor() {
    super();

    makeObservable(this, {
      fetch: flow,
    });
  }

  *fetch(name: string): Generator {
    try {
      this.users = (yield Repo.findByName(name)) as Model.User[];

      if (this.users.length) return { success: true } as StoreAPI;
      else
        return {
          success: false,
          errorCode: 'local',
          message: '해당 사용자를 찾을 수 없습니다.',
        } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
