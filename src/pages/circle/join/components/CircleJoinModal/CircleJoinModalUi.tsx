import { makeAutoObservable } from 'mobx';

export class CircleJoinModalUi {
  visible = false;
  status: Circle.JoinStatus = 'NONE';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setVisible(flag?: boolean): void {
    this.visible = flag ?? !this.visible;
  }

  setStatus(status: Circle.JoinStatus): void {
    this.status = status;
  }

  get isDone(): boolean {
    return this.status === 'DONE';
  }
  get isAwait(): boolean {
    return this.status === 'AWAIT';
  }
  get isMember(): boolean {
    return this.status === 'MEMBER';
  }
  get isBlock(): boolean {
    return this.status === 'BLOCK';
  }
}
