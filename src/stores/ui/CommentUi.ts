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
      setState: action.bound,
      openMenuModal: action.bound,
      closeMenuModal: action.bound,
      openDeleteModal: action.bound,
      closeDeleteModal: action.bound,
    });
  }

  setState(state: CommentInputState): void {
    this.state = state;
  }

  openMenuModal(target: Model.Comment): void {
    this.visiableMenuModal = true;
    this.target = target;
  }

  closeMenuModal(): void {
    this.visiableMenuModal = false;
    this.target = undefined;
  }

  openDeleteModal(): void {
    this.visiableDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.visiableDeleteModal = false;
  }
}
