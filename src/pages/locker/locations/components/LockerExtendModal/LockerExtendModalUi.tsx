import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { LockerRepoImpl as Repo } from '@/stores/repositories/LockerRepo';

export class LockerExtendModalUi extends ModalUi<Model.LockerLocation> {
  constructor() {
    super();

    makeObservable(this, {
      extendLocker: flow.bound,
    });
  }

  *extendLocker(target: Model.LockerLocation): Generator {
    try {
      yield Repo.extend(target.id);

      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
