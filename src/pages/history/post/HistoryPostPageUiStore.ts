import { makeAutoObservable } from 'mobx';

import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class HistoryPostPageUiStore {
  isFetched = false;
  page = 0;
  hasMore = true;
  posts: Model.HistoryPost[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.isFetched = false;
    this.page = 0;
    this.hasMore = true;
    this.posts = [];
  }

  *fetch(page = 0): Generator {
    const { posts, last } = (yield Repo.findPosts(page)) as User.FindPostsResponse;

    this.isFetched = true;
    this.page = page;
    this.hasMore = !last;
    this.posts = this.posts.concat(posts);
  }
}

export const PageUiStoreImpl = new HistoryPostPageUiStore();
