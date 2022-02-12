import { makeAutoObservable } from 'mobx';

export class CommentMenuUi {
  visible = false;
  target?: Model.Comment;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  open(target: Model.Comment): void {
    this.visible = true && (target.updatable || target.deletable);
    if (this.visible) this.target = target;
  }

  close(): void {
    this.visible = false;
  }
}
