import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class AdmissionAcceptModalUi extends ModalUi<Model.CircleUser> {
  constructor() {
    super();

    makeObservable(this, {
      accept: flow.bound,
    });
  }

  *accept(target: Model.CircleUser): Generator {
    try {
      yield Repo.acceptUser(target.applicationId);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
