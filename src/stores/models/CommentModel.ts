import { utcToZonedTime, format } from 'date-fns-tz';
import { action, makeObservable, observable } from 'mobx';
import { AuthorModel } from './AuthorModel';

const DELETE_MESSAGE = '삭제된 댓글입니다.';
export class CommentModel {
  isChild: boolean;
  postId: string;
  id: string;
  author: Model.Author;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  updatable = false;
  deletable = false;
  childComments: Model.Comment[] = [];

  constructor(props: Comment.Dto, isChild = false) {
    makeObservable(this, {
      content: observable,
      childComments: observable,

      delete: action.bound,
      refresh: action.bound,
    });

    this.isChild = isChild;
    this.postId = props.postId;
    this.id = props.id;
    this.author = new AuthorModel(props.writerAdmissionYear, props.writerName, props.writerProfileImage);
    this.content = !props.isDeleted ? props.content : DELETE_MESSAGE;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.updatable = props.updatable;
    this.deletable = props.deletable;
    this.childComments = props.childCommentList.map(data => new CommentModel(data, true));
  }

  get formatedCreatedAt(): string {
    const zonedDate = utcToZonedTime(this.createdAt, 'Asis/Seoul');

    return format(zonedDate, 'yyyy-MM-dd HH:mm');
  }

  delete(): void {
    this.content = DELETE_MESSAGE;
  }

  refresh(data: CommentModel): void {
    this.content = data.content;
    this.updatedAt = data.updatedAt;
  }
}
