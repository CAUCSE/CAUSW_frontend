import { action, makeObservable, observable } from 'mobx';

export enum CommentInputState {
  WRITE,
  REPLY,
  EDIT,
}

export class CommentUiStore {
  visiableMenuModal = false;
  visiableDeleteModal = false;
  state: CommentInputState = CommentInputState.WRITE;
  target?: Model.Comment;

  constructor() {
    makeObservable(this, {
      visiableMenuModal: observable,
      visiableDeleteModal: observable,
      setTarget: action.bound,
      openMenuModal: action.bound,
      closeMenuModal: action.bound,
      openDeleteModal: action.bound,
      closeDeleteModal: action.bound,
    });
  }

  setTarget(state: CommentInputState, target: Model.Comment): void {
    this.state = state;
    this.target = target;
  }

  openMenuModal(): void {
    this.visiableMenuModal = true;
  }

  closeMenuModal(): void {
    this.visiableMenuModal = false;
  }

  openDeleteModal(): void {
    this.visiableDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.visiableDeleteModal = false;
  }
}
