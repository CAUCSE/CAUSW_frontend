import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class AdmissionRejectModalUi extends ModalUi<Model.User> {
  constructor() {
    super();

    makeObservable(this, {
      reject: flow.bound,
    });
  }

  *reject(target: Model.User): Generator {
    try {
      yield Repo.rejectAdmission(target.id);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
