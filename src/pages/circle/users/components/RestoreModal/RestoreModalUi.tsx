import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class RestoreModalUi extends ModalUi<Model.CircleUser> {
  constructor() {
    super();

    makeObservable(this, {
      restore: flow.bound,
    });
  }

  *restore(target: Model.CircleUser): Generator {
    try {
      yield Repo.restore(target.user.id);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
