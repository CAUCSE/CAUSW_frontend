import { makeAutoObservable } from 'mobx';

import { CommentDeleteModalUi } from '../v2/pages/board/postDetail/components/CommentDeleteModal';
import { CommentMenuUi } from '../v2/pages/board/postDetail/components/CommentMenu';
import { CommentRepoImpl as Repo } from './repositories/CommentRepo';

export enum InputState {
  WRITE,
  REPLY,
  EDIT,
}

export class CommentStore {
  rootStore: Store.Root;
  comments: Model.Comment[] = [];
  scollFocusId?: string;
  buf?: Model.Comment; //
  target?: Model.Comment;
  state: InputState = InputState.WRITE;

  // 모달
  menuModal = new CommentMenuUi();
  deleteModal = new CommentDeleteModalUi();

  get isReply(): boolean {
    return this.state === InputState.REPLY;
  }
  get isEdit(): boolean {
    return this.state === InputState.EDIT;
  }

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setComments(comments: Model.Comment[]): void {
    this.comments = comments.filter(({ isDeleted }) => !isDeleted);
  }

  setState(state: InputState): void {
    this.state = state;
    this.target = this.menuModal.target;
  }

  resetState(): void {
    this.state = InputState.WRITE;
    this.buf = undefined;
    this.target = undefined;
  }

  *create(data: Comment.CreateRequestDto): Generator {
    const comment = (yield Repo.create(data)) as Model.Comment;
    this.comments.unshift(comment);
    this.scollFocusId = comment.id;
    this.resetState();
  }

  *update(cid: string, content: string): Generator {
    const comment = (yield Repo.update(cid, content)) as Model.Comment;
    this.target?.refresh(comment);
    this.resetState();
  }

  *deleteComment(target: Model.Comment): Generator {
    yield Repo.delete(target.id);
    this.comments = this.comments.filter(comment => comment.id !== target.id);
    this.resetState();
  }
}
