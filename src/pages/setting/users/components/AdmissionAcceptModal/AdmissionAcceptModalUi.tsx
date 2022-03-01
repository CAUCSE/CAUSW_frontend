import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class AdmissionAcceptModalUi extends ModalUi<Model.AdmissionUser> {
  constructor() {
    super();

    makeObservable(this, {
      accept: flow.bound,
    });
  }

  *accept(target: Model.AdmissionUser): Generator {
    try {
      yield Repo.acceptAdmission(target.id);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
