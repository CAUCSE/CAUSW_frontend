import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class RestoreModalUi extends ModalUi<Model.CircleUser> {
  constructor() {
    super();

    makeObservable(this, {
      restore: flow.bound,
    });
  }

  *restore(target: Model.CircleUser): Generator {
    try {
      yield Repo.restoreUser(target.circle.id, target.user.id);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
