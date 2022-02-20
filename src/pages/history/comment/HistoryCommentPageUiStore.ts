import { makeAutoObservable } from 'mobx';

import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class HistoryCommentPageUiStore {
  comments: Model.HistoryComment[] = [];
  hasMore = true;
  page = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *fetch(page = 0): Generator {
    const { comments, last } = (yield Repo.findComments(page)) as User.FindCommentsResponse;

    this.page = page;
    this.hasMore = !last;
    this.comments = this.comments.concat(comments);
  }
}

export const PageUiStoreImpl = new HistoryCommentPageUiStore();
