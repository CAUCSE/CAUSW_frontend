import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class AdmissionRejectModalUi extends ModalUi<Model.CircleUser> {
  constructor() {
    super();

    makeObservable(this, {
      reject: flow.bound,
    });
  }

  *reject(target: Model.CircleUser): Generator {
    try {
      yield Repo.rejectUser(target.applicationId);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
