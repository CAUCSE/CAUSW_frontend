import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { action, flow, makeObservable, observable } from 'mobx';
import { useRootStore } from './RootStore';
import { PostRepoImpl as Repo } from './repositories/PostRepo';
import { PostRequestDTO } from './repositories/PostType';
import { PostAllWithBoardResponseDto } from './types/PostType';
import { PostModel } from './models/PostModel';

export class PostStore {
  boardId = '';
  boardName = '';
  writable = false;
  posts: Model.Post[] = [];
  post?: Model.Post;

  *fetch(bid: string): Generator {
    const { boardId, boardName, writable, post } = (yield Repo.findAll(bid)) as PostAllWithBoardResponseDto;

    this.boardId = boardId;
    this.boardName = boardName;
    this.writable = writable;
    this.posts = post?.content.map(data => new PostModel(data)) ?? [];
  }

  *fetchPost(pid: string): Generator {
    const { boardId, boardName, ...data } = (yield Repo.findById(pid)) as PostDetail.RootObject;

    this.boardId = boardId;
    this.boardName = boardName;
    this.post = new PostModel(data);
  }

  reset(): void {
    this.boardId = '';
    this.boardName = '';
    this.writable = false;
    this.posts = [];
    this.post = undefined;
  }

  //
  rootStore: Store.Root;
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

export const PostProvider: React.FC = memo(({ children }) => {
  const { boardId, postId } = useParams<{ boardId: string; postId: string }>();
  const { board, post } = useRootStore();

  useEffect(() => {
    const init = async () => {
      if (boardId) {
        board.boardId = boardId;

        await board.fetch();
        if (!postId) await post.fetch(boardId);
      }
    };

    init();

    return () => {
      post.reset();
      post.resetDetail();
    };
  }, [boardId, postId]);

  return <>{children}</>;
});
