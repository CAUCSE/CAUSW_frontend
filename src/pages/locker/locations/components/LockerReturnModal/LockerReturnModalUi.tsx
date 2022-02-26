import { makeAutoObservable } from 'mobx';

import { LockerRepoImpl as Repo } from '@/stores/repositories/LockerRepo';

export class LockerReturnModalUi {
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

  *returnLocker(target: Model.LockerLocation): Generator {
    try {
      yield Repo.return(target.id);

      target.isMine = false;
      target.isActive = true;

      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
