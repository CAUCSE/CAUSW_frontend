import { makeAutoObservable } from 'mobx';

export class CommentDeleteModalUi {
  visible = false;
  target?: Model.Comment;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  open(target: Model.Comment): void {
    this.visible = true;
    this.target = target;
  }

  close(): void {
    this.visible = false;
  }
}
