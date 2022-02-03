import { makeAutoObservable } from 'mobx';

export class JoinStore {
  openJoinModal = false;

  constructor() {
    makeAutoObservable(this);
  }

  OpenJoinModal(flag?: boolean): void {
    this.openJoinModal = flag ?? !this.openJoinModal;
  }
}
