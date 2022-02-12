import { makeAutoObservable } from 'mobx';

import { CommentModel } from './models/CommentModel';
import { PostModel } from './models/PostModel';
import { PostRepoImpl as Repo } from './repositories/PostRepo';

export class PostStore {
  rootStore: Store.Root;
  boardId = '';
  boardName = '';
  writable = false;
  // 게시글 목록
  totalPages = 0;
  page = 0;
  posts: Model.Post[] = [];
  // 게시글 상세
  post?: Model.Post;

  constructor(rootStore: Store.Root) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.rootStore = rootStore;
  }

  setPage(page: number): void {
    this.page = page;
  }

  get hasMore(): boolean {
    return this.page !== this.totalPages - 1;
  }

  *fetchAll(bid: string, page = 0): Generator {
    const {
      boardId,
      boardName,
      writable,
      post: { content: posts, totalPages },
    } = (yield Repo.findAll(bid, page)) as Post.FindAllResponseDto;

    this.boardId = boardId;
    this.boardName = boardName;
    this.writable = writable;
    this.posts = this.posts.concat(posts.map(data => new PostModel(data)));
    this.totalPages = totalPages;
  }

  *create(data: Partial<Post.CreateRequestDto>): Generator {
    const body = { ...data, boardId: this.boardId } as Post.CreateRequestDto;

    this.post = (yield Repo.create(body)) as Model.Post;

    return this.post;
  }

  *fetch(pid: string): Generator {
    const { boardId, boardName, commentList, ...data } = (yield Repo.findById(pid)) as PostDetail.RootObject;

    this.boardId = boardId;
    this.boardName = boardName;
    this.post = new PostModel(data);
    this.rootStore.comment.setComments(commentList.content.map(data => new CommentModel(data)));
  }

  *edit(pid: string, data: Post.UpdateRequestDto): Generator {
    if (this.post) {
      yield Repo.update(pid, data);

      this.post.title = data.title;
      this.post.content = data.content;
    }
  }

  *deletePost(pid: string): Generator {
    try {
      yield Repo.delete(pid);
      return true;
    } catch (error) {
      return false;
    }
  }

  reset(): void {
    this.boardId = '';
    this.boardName = '';
    this.writable = false;
    this.posts = [];
    this.page = 0;
    this.post = undefined;
  }

  resetDetail(): void {
    this.post = undefined;
  }
}
