import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { action, computed, flow, makeObservable, observable } from 'mobx';
import { useRootStore } from './RootStore';
import { PostRepoImpl as Repo } from './repositories/PostRepo';

export class PostStore {
  rootStore: Store.Root;
  postId?: string;
  posts: Model.Post[] = [];

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      postId: observable,
      posts: observable,

      fetch: flow.bound,
      reset: action.bound,

      boardId: computed,
    });
    this.rootStore = rootStore;
  }

  *fetch(): Generator {
    this.posts = (yield Repo.fetch(this.boardId)) as Model.Post[];
  }

  reset(): void {
    this.posts = [];
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
