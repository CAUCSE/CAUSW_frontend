import { makeAutoObservable } from 'mobx';

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
}
