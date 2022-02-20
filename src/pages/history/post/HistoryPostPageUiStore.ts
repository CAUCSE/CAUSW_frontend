import { makeAutoObservable } from 'mobx';

import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class HistoryPostPageUiStore {
  posts: Model.HistoryPost[] = [];
  hasMore = true;
  page = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *fetch(page = 0): Generator {
    const { posts, last } = (yield Repo.findPosts(page)) as User.FindPostsResponse;

    this.page = page;
    this.hasMore = !last;
    this.posts = posts;
  }
}

export const PageUiStoreImpl = new HistoryPostPageUiStore();
