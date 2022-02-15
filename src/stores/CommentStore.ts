import { makeAutoObservable } from 'mobx';

import { CommentRepoImpl as Repo } from './repositories/CommentRepo';

export class CommentStore {
  rootStore: Store.Root;
  comments: Model.Comment[] = [];
  hasMore = true;
  page = 0;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    makeAutoObservable(this, { rootStore: false }, { autoBind: true });
  }

  setPage(page: number): void {
    this.page = page;
  }

  setComment(target: Model.Comment): void {
    const index = this.comments.findIndex(({ id }) => id === target.id);

    if (index !== -1) this.comments[index] = target;
  }

  resetComments(comments: Model.Comment[], last: boolean): void {
    this.comments = comments;
    this.page = 0;
    this.hasMore = !last;
  }

  *fetch(pid: string, page: number): Generator {
    const { comments, last } = (yield Repo.findAll(pid, page)) as PostComment.FindAllResponse;
    this.page = page;
    this.hasMore = !last;

    const result = this.comments.concat(comments);
    const ids = this.comments.concat(comments).map(({ id }) => id);
    this.comments = result.filter(({ id }, index) => !ids.includes(id, index + 1));
  }

  *create(data: PostComment.CreateRequestDto): Generator {
    const comment = (yield Repo.create(data)) as Model.Comment;
    this.comments.unshift(comment);
    this.rootStore.post.post?.setCommentCount(num => num + 1);

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
    this.rootStore.post.post?.setCommentCount(num => num - 1);
  }
}
