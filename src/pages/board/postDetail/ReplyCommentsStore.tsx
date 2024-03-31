import { makeAutoObservable } from 'mobx';

import { ReplyCommentRepoImpl as Repo } from '@/stores/repositories/ReplyCommentRepo';

export class ReplyCommentsStore {
  rootStore: PageUiStore.PostDetail;
  parent?: Model.Comment;
  comments: Model.ReplyComment[] = [];
  page = 0;
  hasMore = false;

  constructor(rootStore: PageUiStore.PostDetail) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;
  }

  reset(): void {
    this.parent = undefined;
    this.comments = [];
    this.page = 0;
    this.hasMore = false;
  }

  *fetch(parentCommentId: string, page = 0): Generator {
    const { parent, comments, last } = (yield Repo.findAll(
      parentCommentId,
      page,
    )) as ReplyComment.FindAllResponse;

    if (page === 0) this.comments = [];
    const result = this.comments.concat(comments);
    const ids = this.comments.concat(comments).map(({ id }) => id);

    this.parent = parent;
    this.comments = result.filter(({ id }, index) => !ids.includes(id, index + 1));
    this.page = page;
    this.hasMore = !last;

    // 댓글 스토어의 부모에 해당하는 모델 치환, 전체댓글로 돌아 갔을때 답글 갯수 맞추기 위함
    this.rootStore.comments.setComment(parent);
  }

  *create(content: string, target?: Model.Comment | Model.ReplyComment): Generator {
    const body: Partial<ReplyComment.CreateRequestDto> = { content };

    // if (this.parent) body.parentCommentId = this.parent.id;
    // else throw new Error('[ReplyCommentStore]: parent is undefined');

    if (target) body.parentCommentId = target?.id;
    else throw new Error('[ReplyCommentStore]: target is undefined');

    // if (target && this.parent.id !== target.id) {
    //   body.refChildComment = target.id;
    //   body.tagUserName = target.author.name;
    // }

    const comment = (yield Repo.create(
      body as ReplyComment.CreateRequestDto,
    )) as Model.ReplyComment;
    this.comments = [...this.comments, comment];
    target.setNumChildComment(num => num + 1);

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
