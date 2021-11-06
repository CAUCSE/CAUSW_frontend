import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { action, computed, flow, makeObservable, observable } from 'mobx';
import { useRootStore } from './RootStore';
import { FindAllResponse, PostRepoImpl as Repo } from './repositories/PostRepo';
import { PostRequestDTO } from './repositories/PostType';

export class PostStore {
  boardId = '';
  boardName = '';
  writable = false;

  *fetch(id: string): Generator {
    const { boardId, boardName, writable } = (yield Repo.fetch(id)) as FindAllResponse;

    this.boardId = boardId;
    this.boardName = boardName;
    this.writable = writable;
  }

  reset(): void {
    this.boardName = '';
  }

  //
  rootStore: Store.Root;
  postId?: string;
  posts: Model.Post[] = [];
  post?: Model.Post;

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      boardId: observable,
      boardName: observable,
      writable: observable,

      fetch: flow.bound,
      reset: action.bound,

      //
      posts: observable,

      postId: observable,
      post: observable,

      fetchById: flow.bound,
      create: flow.bound,
      resetDetail: action.bound,
    });

    this.rootStore = rootStore;
  }

  *fetchById(postId: string): Generator {
    this.postId = postId;
    this.post = (yield Repo.fetchById(postId)) as Model.Post;
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
      if (postId) await post.fetchById(postId);
    };

    init();

    return () => {
      post.reset();
      post.resetDetail();
    };
  }, [boardId, postId]);

  return <>{children}</>;
});
