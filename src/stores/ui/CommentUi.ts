import { action, computed, makeObservable, observable } from 'mobx';

export enum CommentInputState {
  WRITE,
  REPLY,
  EDIT,
}

export class CommentUiStore {
  buf?: Model.Comment;
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

      isReply: computed,
      isEdit: computed,

      setState: action.bound,
      resetState: action.bound,
      openMenuModal: action.bound,
      closeMenuModal: action.bound,
      openDeleteModal: action.bound,
      closeDeleteModal: action.bound,
    });
  }

  get isReply(): boolean {
    return this.state === CommentInputState.REPLY;
  }

  get isEdit(): boolean {
    return this.state === CommentInputState.EDIT;
  }

  setState(state: CommentInputState): void {
    this.state = state;
    this.target = this.buf;
  }

  resetState(): void {
    this.state = CommentInputState.WRITE;
    this.buf = undefined;
    this.target = undefined;
  }

  openMenuModal(target: Model.Comment): void {
    this.visiableMenuModal = true;
    this.buf = target;
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
