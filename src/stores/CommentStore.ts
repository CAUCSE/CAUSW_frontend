import { makeAutoObservable } from 'mobx';

import { CommentRepoImpl as Repo } from './repositories/CommentRepo';

export class CommentStore {
  rootStore: Store.Root;
  comments: Model.Comment[] = [];

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    makeAutoObservable(this, { rootStore: false }, { autoBind: true });
  }

  setComments(comments: Model.Comment[]): void {
    this.comments = comments;
  }

  *create(data: Comment.CreateRequestDto): Generator {
    const comment = (yield Repo.create(data)) as Model.Comment;
    this.comments.unshift(comment);
  }

  *update(content: string, target: Model.Comment): Generator {
    const comment = (yield Repo.update(target.id, content)) as Model.Comment;
    target.refresh(comment);
  }

  *deleteComment(target: Model.Comment): Generator {
    const comment = (yield Repo.delete(target.id)) as Model.Comment;
    target.refresh(comment);
  }
}
