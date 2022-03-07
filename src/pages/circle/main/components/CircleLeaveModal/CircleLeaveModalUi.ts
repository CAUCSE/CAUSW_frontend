import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class CircleLeaveModalUi extends ModalUi<Model.Circle> {
  constructor() {
    super();
    makeObservable(this, {
      leaveCircle: flow.bound,
    });
  }

  *leaveCircle(target: Model.Circle): Generator {
    try {
      yield Repo.leaveUser(target.id);

      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
