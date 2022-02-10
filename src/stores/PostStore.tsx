import { makeAutoObservable } from 'mobx';

import { CommentModel } from './models/CommentModel';
import { PostModel } from './models/PostModel';
import { PostRepoImpl as Repo } from './repositories/PostRepo';
import { PostRequestDTO } from './repositories/PostType';
import { PostAllWithBoardResponseDto } from './types/PostType';

export class PostStore {
  rootStore: Store.Root;
  boardId = '';
  boardName = '';
  writable = false;
  // 게시글 목록
  posts: Model.Post[] = [];
  // 게시글 상세
  post?: Model.Post;

  constructor(rootStore: Store.Root) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.rootStore = rootStore;
  }

  *fetch(bid: string): Generator {
    const { boardId, boardName, writable, post } = (yield Repo.findAll(bid)) as PostAllWithBoardResponseDto;

    this.boardId = boardId;
    this.boardName = boardName;
    this.writable = writable;
    this.posts = post?.content.map(data => new PostModel(data)) ?? [];
  }

  *fetchPost(pid: string): Generator {
    const { boardId, boardName, commentList, ...data } = (yield Repo.findById(pid)) as PostDetail.RootObject;

    this.boardId = boardId;
    this.boardName = boardName;
    this.post = new PostModel(data);
    this.rootStore.ui.commentUi.setComments(commentList.content.map(data => new CommentModel(data)));
  }

  *create(data: Partial<PostRequestDTO>): Generator {
    const body = { ...data, boardId: this.boardId } as PostRequestDTO;

    this.post = (yield Repo.create(body)) as Model.Post;

    return this.post;
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
    this.post = undefined;
  }

  resetDetail(): void {
    this.post = undefined;
  }
}
