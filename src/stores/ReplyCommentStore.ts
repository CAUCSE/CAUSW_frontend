import { makeAutoObservable } from 'mobx';

import { ReplyCommentRepoImpl as Repo } from './repositories/ReplyCommentRepo';

export class ReplyCommentStore {
  rootStore: Store.Root;
  parent?: Model.Comment;
  comments: Model.Comment[] = [];
  hasMore = true;
  page = 0;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.comments = [];
    this.hasMore = true;
    this.page = 0;
  }

  *fetch(pcid: string, page = 0): Generator {
    const { parent, comments, last } = (yield Repo.findAll(pcid, page)) as ReplyComment.FindAllResponse;

    this.page = page;
    this.hasMore = !last;
    const result = this.comments.concat(comments);
    const ids = this.comments.concat(comments).map(({ id }) => id);
    this.comments = result.filter(({ id }, index) => !ids.includes(id, index + 1));

    // 댓글 스토어의 부모에 해당하는 모델 치환
    this.parent = parent;
    this.rootStore.comment.setComment(parent);
  }

  *create(content: string, target?: Model.Comment | Model.ReplyComment): Generator {
    const body: Partial<ReplyComment.CreateRequestDto> = { content };

    if (this.parent) body.parentCommentId = this.parent.id;
    else throw new Error('[ReplyCommentStore]: parent is undefined');

    if (target && this.parent.id !== target.id) {
      body.refChildComment = target.id;
      body.tagUserName = target.author.name;
    }

    const comment = (yield Repo.create(body as ReplyComment.CreateRequestDto)) as Model.ReplyComment;
    this.comments = [...this.comments, comment];
    this.parent.setNumChildComment(num => num + 1);

    return comment;
  }

  *update(content: string, target: Model.Comment): Generator {
    const comment = (yield Repo.update(target.id, content)) as Model.ReplyComment;
    target.refresh(comment);

    return comment;
  }

  *deleteComment(target: Model.ReplyComment): Generator {
    if (!this.parent) throw new Error('[ReplyCommentStore]: parent is undefined');

    const comment = (yield Repo.delete(target.id)) as Model.ReplyComment;
    target.refresh(comment);
    this.parent.setNumChildComment(num => num - 1);
  }
}
