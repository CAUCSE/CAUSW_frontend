import { utcToZonedTime, format } from 'date-fns-tz';
import { CommentResponseDto } from '../repositories/CommendType';
import { AuthorModel } from './AuthorModel';

export class CommentModel {
  parent?: CommentModel;
  id: string;
  content: string;
  author: Model.Author;
  createdAt: string;
  updatedAt: string;
  postId: string;
  childComments: CommentModel[];

  constructor(props: CommentResponseDto, parent?: CommentModel) {
    this.parent = parent;
    this.id = props.id;
    this.content = props.content;
    this.author = new AuthorModel(props);
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.postId = props.postId;
    this.childComments = props.childCommentList.map(item => new CommentModel(item, this));
  }

  get formatedCreatedAt(): string {
    const date = new Date(this.createdAt);
    const zonedDate = utcToZonedTime(date, 'Asis/Seoul');

    return format(zonedDate, 'yyyy-MM-dd HH:mm:ss');
  }

  get isChild(): boolean {
    return this.parent ? true : false;
  }
}
