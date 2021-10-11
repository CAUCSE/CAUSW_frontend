import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { action, computed, flow, makeObservable, observable } from 'mobx';
import { useRootStore } from './RootStore';
import { PostRepoImpl as Repo } from './repositories/PostRepo';

export class PostStore {
  rootStore: Store.Root;
  postId?: string;
  posts: Model.Post[] = [];
  post?: Model.Post;

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      postId: observable,
      posts: observable,
      post: observable,

      fetch: flow.bound,
      fetchById: flow.bound,
      reset: action.bound,
      resetDetail: action.bound,

      boardId: computed,
    });
    this.rootStore = rootStore;
  }

  *fetch(): Generator {
    this.posts = (yield Repo.fetch(this.boardId)) as Model.Post[];
  }

  *fetchById(): Generator {
    this.post = (yield Repo.fetchById(this.postId as string)) as Model.Post;
  }

  reset(): void {
    this.posts = [];
  }

  resetDetail(): void {
    this.post = undefined;
  }

  get boardId(): string {
    return this.rootStore.board.boardId ?? '';
  }
}

export const PostProvider: React.FC = memo(({ children }) => {
  const { boardId, postId } = useParams<{ boardId: string; postId: string }>();
  const { board, post } = useRootStore();

  useEffect(() => {
    if (boardId) board.boardId = boardId;
    if (postId) post.postId = postId;
  }, [boardId, postId]);

  return <>{children}</>;
});
