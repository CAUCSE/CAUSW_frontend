import { makeAutoObservable } from 'mobx';

import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class HistoryCommentPageUiStore {
  isFetched = false;
  page = 0;
  hasMore = true;
  comments: Model.HistoryComment[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.isFetched = false;
    this.page = 0;
    this.hasMore = true;
    this.comments = [];
  }

  *fetch(page = 0): Generator {
    const { comments, last } = (yield Repo.findComments(page)) as User.FindCommentsResponse;

    this.isFetched = true;
    this.page = page;
    this.hasMore = !last;
    this.comments = this.comments.concat(comments);
  }
}

export const PageUiStoreImpl = new HistoryCommentPageUiStore();
