import { action, makeObservable, observable } from 'mobx';

export class ModalUi<T> {
  visible = false;
  target?: T;

  constructor() {
    makeObservable(this, {
      visible: observable,
      open: action.bound,
      close: action.bound,
    });
  }

  open(target?: T): void {
    this.visible = true;
    this.target = target;
  }

  close(): void {
    this.visible = false;
  }
}
