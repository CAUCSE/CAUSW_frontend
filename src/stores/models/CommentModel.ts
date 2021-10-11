import { format, parseISO } from 'date-fns';
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
    return format(parseISO(this.createdAt), 'yyyy-MM-dd HH:mm:ss');
  }

  get isChild(): boolean {
    return this.parent ? true : false;
  }
}
