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

  *fetch(pcid: string, page: number): Generator {
    const { parent, comments, last } = (yield Repo.findAll(pcid, page)) as ReplyComment.FindAllResponse;

    this.page = page;
    this.hasMore = !last;
    this.comments = this.comments.concat(comments);

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
    this.comments.push(comment);
    this.parent.setNumChildComment(num => num + 1);
  }

  *update(content: string, target: Model.Comment): Generator {
    const comment = (yield Repo.update(target.id, content)) as Model.ReplyComment;
    target.refresh(comment);
  }

  *deleteComment(target: Model.ReplyComment): Generator {
    if (!this.parent) throw new Error('[ReplyCommentStore]: parent is undefined');

    const comment = (yield Repo.delete(target.id)) as Model.ReplyComment;
    target.refresh(comment);
    this.parent.setNumChildComment(num => num - 1);
  }
}
