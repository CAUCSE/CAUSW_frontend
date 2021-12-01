import { action, flow, makeObservable, observable } from 'mobx';
import { PostRepoImpl as Repo } from './repositories/PostRepo';
import { PostRequestDTO } from './repositories/PostType';
import { PostAllWithBoardResponseDto } from './types/PostType';
import { PostModel } from './models/PostModel';
import { CommentModel } from './models/CommentModel';

export class PostStore {
  rootStore: Store.Root;
  boardId = '';
  boardName = '';
  writable = false;
  // 게시글 목록
  posts: Model.Post[] = [];
  // 게시글 상세
  post?: Model.Post;

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

  reset(): void {
    this.boardId = '';
    this.boardName = '';
    this.writable = false;
    this.posts = [];
    this.post = undefined;
  }

  //
  postId?: string;

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      boardId: observable,
      boardName: observable,
      writable: observable,
      posts: observable,
      post: observable,

      fetch: flow.bound,
      fetchPost: flow.bound,
      reset: action.bound,

      //

      postId: observable,
      create: flow.bound,
      resetDetail: action.bound,
    });

    this.rootStore = rootStore;
  }

  *create(data: Partial<PostRequestDTO>): Generator {
    const body = { ...data, boardId: this.boardId } as PostRequestDTO;

    this.post = (yield Repo.create(body)) as Model.Post;

    return this.post;
  }

  resetDetail(): void {
    this.post = undefined;
  }
}
