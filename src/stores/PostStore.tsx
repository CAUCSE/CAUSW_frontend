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
  posts: Model.Post[] = [];
  hasMore = true;
  page = 0;
  // 게시글 상세
  post?: Model.Post;

  constructor(rootStore: Store.Root) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.rootStore = rootStore;
  }

  *fetch(pid: string): Generator {
    const { boardId, boardName, commentList, ...data } = (yield Repo.findById(
      pid,
    )) as Post.FindByIdResponseDto;

    this.boardId = boardId;
    this.boardName = boardName;
    this.post = new PostModel(data as Post.Dto);
    this.rootStore.comment.resetComments(
      commentList.content.map((data: PostComment.CreateResponseDto) => new CommentModel(data)),
      commentList.last,
    );
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
