import { flow, makeObservable } from 'mobx';

import { ModalUi } from '@/stores';
import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class DropModalUi extends ModalUi<Model.CircleUser> {
  constructor() {
    super();

    makeObservable(this, {
      dropUser: flow.bound,
    });
  }

  *dropUser({ circle: { id: circleId }, user: { id: userId } }: Model.CircleUser): Generator {
    try {
      yield Repo.dropUser(circleId, userId);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
