import { makeAutoObservable } from 'mobx';

export class CircleInfoModalUiStore {
  visible = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
