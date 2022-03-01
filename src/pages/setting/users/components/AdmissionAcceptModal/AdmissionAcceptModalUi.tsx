import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class AdmissionAcceptModalUi extends ModalUi<Model.User> {
  constructor() {
    super();

    makeObservable(this, {
      accept: flow.bound,
    });
  }

  *accept(target: Model.User): Generator {
    try {
      yield Repo.acceptAdmission(target.id);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
