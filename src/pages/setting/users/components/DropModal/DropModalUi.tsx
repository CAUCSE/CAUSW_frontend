import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class DropModalUi extends ModalUi<Model.User> {
  constructor() {
    super();

    makeObservable(this, {
      drop: flow.bound,
    });
  }

  *drop(target: Model.User): Generator {
    try {
      yield Repo.drop(target.id);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
