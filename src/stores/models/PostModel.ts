import { isToday, format } from 'date-fns';
import { action, makeObservable, observable } from 'mobx';

import { AuthorModel } from './AuthorModel';

export class PostModel {
  id: string;
  title: string;
  author: Model.Author;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  commentCount: number;
  updatable: boolean;
  deletable: boolean;

  constructor(props: Post.Dto) {
    makeObservable(this, {
      commentCount: observable,
      setCommentCount: action.bound,
    });

    this.id = props.id;
    this.title = props.title;
    this.author = new AuthorModel(
      props.writerAdmissionYear,
      props.writerName,
      props.writerProfileImage,
    );
    this.content = props.content ?? '';
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.commentCount = props.numComment;
    this.updatable = props.updatable ?? false;
    this.deletable = props.deletable ?? false;
  }

  setCommentCount(param: (num: number) => number | number): void {
    if ('number' === typeof param) this.commentCount = param;
    else this.commentCount = param(this.commentCount);
  }

  get formattedCreatedAt(): string {
    const date = new Date(this.createdAt);

    return format(date, isToday(date) ? 'HH:mm:ss' : 'yyyy.MM.dd HH:mm');
  }
}
