import { action, makeObservable, observable } from 'mobx';
import { VirtuosoHandle } from 'react-virtuoso';

import { CommentDeleteModalUi } from './components/CommentDeleteModal';
import { CommentInputUiStore } from './components/CommentInput';
import { CommentMenuUi } from './components/CommentMenu';
import { PostDeleteModalUiStore } from './components/PostDeleteModal/PostDeleteModalUiStore';

export class PostDetailPageUiStore {
  virtuosoRef?: React.MutableRefObject<VirtuosoHandle | null>;
  commentInput = new CommentInputUiStore();

  postDeleteModal = new PostDeleteModalUiStore();
  commentMenuModal = new CommentMenuUi();
  commentDeleteModal = new CommentDeleteModalUi();

  constructor() {
    makeObservable(this, {
      virtuosoRef: observable,
      setVirtuosoRef: action.bound,
    });
  }

  setVirtuosoRef(ref: React.MutableRefObject<VirtuosoHandle | null>): void {
    this.virtuosoRef = ref;
  }
}

export const PageUiStoreImpl = new PostDetailPageUiStore();
