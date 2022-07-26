import { makeAutoObservable } from 'mobx';

import { LockerRepoImpl as Repo } from '@/stores/repositories/LockerRepo';

export class LockerExtendModalUi {
  visible = false;
  target?: Model.LockerLocation;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  open(target: Model.LockerLocation): void {
    this.visible = true;
    this.target = target;
  }

  close(): void {
    this.visible = false;
  }

  *extendLocker(target: Model.LockerLocation): Generator {
    try {
      yield Repo.extend(target.id);

      target.reset();

      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
