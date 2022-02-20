import { makeAutoObservable } from 'mobx';

import { CommentRepoImpl as Repo } from '@/stores/repositories/CommentRepo';

export class CommentsStore {
  rootStore: PageUiStore.PostDetail;
  comments: Model.Comment[] = [];
  page = 0;
  hasMore = false;

  constructor(rootStore: PageUiStore.PostDetail) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;
  }

  reset(): void {
    this.comments = [];
    this.page = 0;
    this.hasMore = false;
  }

  setComment(target: Model.Comment): void {
    const index = this.comments.findIndex(({ id }) => id === target.id);

    if (index !== -1) this.comments[index] = target;
  }

  *fetch(postId: string, page: number): Generator {
    const { comments, last } = (yield Repo.findAll(postId, page)) as PostComment.FindAllResponse;

    if (page === 0) this.comments = [];
    const result = this.comments.concat(comments);
    const ids = this.comments.concat(comments).map(({ id }) => id);

    this.comments = result.filter(({ id }, index) => !ids.includes(id, index + 1));
    this.page = page;
    this.hasMore = !last;
  }

  *create(data: PostComment.CreateRequestDto): Generator {
    const comment = (yield Repo.create(data)) as Model.Comment;
    this.comments = [comment, ...this.comments];
    this.rootStore.post?.setCommentCount(num => num + 1);

    return comment;
  }

  *update(content: string, target: Model.Comment): Generator {
    const comment = (yield Repo.update(target.id, content)) as Model.Comment;
    target.refresh(comment);

    return comment;
  }

  *deleteComment(target: Model.Comment): Generator {
    const comment = (yield Repo.delete(target.id)) as Model.Comment;
    target.refresh(comment);
    this.rootStore.post?.setCommentCount(num => num - 1);
  }
}
