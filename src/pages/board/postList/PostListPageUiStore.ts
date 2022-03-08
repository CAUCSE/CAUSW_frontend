import { makeAutoObservable } from 'mobx';

import { withFetchPage } from '@/hooks';
import { PostRepoImpl as Repo } from '@/stores/repositories/PostRepo';

export class PostListPageUiStore implements withFetchPage {
  isFetched = false;
  boardName = '';
  writable = false;
  posts: Model.Post[] = [];
  hasMore = true;
  page = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.isFetched = false;
    this.boardName = '';
    this.writable = false;
    this.posts = [];
    this.page = 0;
  }

  *fetchAll(bid: string, page = 0): Generator {
    const {
      boardName,
      writable,
      post: { content: posts, last },
    } = (yield Repo.findAll(bid, page)) as Post.FindAllResponse;

    this.isFetched = true;
    this.boardName = boardName;
    this.writable = writable;

    this.page = page;
    this.hasMore = !last;
    this.posts = this.posts.concat(posts);
  }
}

export const PageUiStoreImpl = new PostListPageUiStore();
