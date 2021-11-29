import type { Content } from '../types/PostType';
import { isToday } from 'date-fns';
import { utcToZonedTime, format } from 'date-fns-tz';
import { AuthorModel } from './AuthorModel';

export class PostModel {
  id?: string;
  title: string;
  author: Model.Author;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  numComment: number;
  updatable: boolean;
  deletable: boolean;

  constructor(props: Content | PostDetail.RootObject) {
    this.id = props.id;
    this.title = props.title;
    this.author = new AuthorModel(props.writerAdmissionYear, props.writerName, props.writerProfileImage);
    this.content = props.content ?? '';
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.numComment = props.numComment;
    this.updatable = (props as PostDetail.RootObject).updatable ?? false;
    this.deletable = (props as PostDetail.RootObject).deletable ?? false;
  }

  get formatedCreatedAt(): string {
    const zonedDate = utcToZonedTime(this.createdAt, 'Asis/Seoul');

    return format(zonedDate, isToday(zonedDate) ? 'HH:mm:ss' : 'yyyy.MM.dd HH:mm');
  }
}
