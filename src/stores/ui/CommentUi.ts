import { action, makeObservable, observable } from 'mobx';

export enum CommentInputState {
  WRITE,
  REPLY,
  EDIT,
}

export class CommentUiStore {
  target?: Model.Comment;
  state: CommentInputState = CommentInputState.WRITE;
  visiableMenuModal = false;
  visiableDeleteModal = false;

  constructor() {
    makeObservable(this, {
      target: observable,
      state: observable,
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
  }

  openDeleteModal(): void {
    this.visiableDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.visiableDeleteModal = false;
  }
}
