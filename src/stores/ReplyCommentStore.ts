import { makeAutoObservable } from 'mobx';

import { ReplyCommentRepoImpl as Repo } from './repositories/ReplyCommentRepo';

export class ReplyCommentStore {
  rootStore: Store.Root;
  parent?: Model.Comment; // 댓글의 답글인 경우
  target?: Model.Comment; // 답글의 답글인 경우
  comments: Model.Comment[] = [];
  page = 0;
  totalPages = 0;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *fetch(pcid: string, page: number): Generator {
    const { parent, comments, totalPages } = (yield Repo.findAll(pcid, page)) as ReplyComment.FindAllResponse;

    this.page = page;
    this.parent = parent;
    this.comments = comments;
    this.totalPages = totalPages;
  }

  *create(content: string): Generator {
    const body: Partial<ReplyComment.CreateRequestDto> = { content };

    if (this.parent) body.parentCommentId = this.parent.id;
    else throw new Error('[ReplyCommentStore]: parent is undefined');

    if (this.target) {
      body.refChildComment = this.target.id;
      body.tagUserName = this.target.author.nameWithAdmission;
    }

    const comment = (yield Repo.create(body as ReplyComment.CreateRequestDto)) as Model.ReplyComment;
    this.comments.push(comment);
    // this.resetState();
  }

  *update(rcid: string, content: string): Generator {
    yield Repo.update(rcid, content);
    // const comment = () as Model.Comment;
    // this.target?.refresh(comment);
    // this.resetState();
  }
}
