import { makeAutoObservable } from 'mobx';

export enum InputState {
  WRITE,
  REPLY,
  EDIT,
}

export class CommentInputUiStore {
  state: InputState = InputState.WRITE;
  target?: Model.Comment | Model.ReplyComment;

  setState(state: InputState, target?: Model.Comment | Model.ReplyComment): void {
    this.state = state;
    this.target = target;
  }

  resetState(): void {
    this.state = InputState.WRITE;
    this.target = undefined;
  }

  get isReply(): boolean {
    return this.state === InputState.REPLY;
  }

  get isEdit(): boolean {
    return this.state === InputState.EDIT;
  }

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
