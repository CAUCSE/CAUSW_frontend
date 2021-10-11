import { formatISO, format, parseISO } from 'date-fns';
import { PostResponseDto } from '../repositories/PostType';

export class PostModel {
  id?: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  commentList: Model.Comment[];

  constructor(props?: PostResponseDto) {
    const now = formatISO(new Date());

    this.id = props?.id ?? undefined;
    this.title = props?.title ?? '';
    this.content = props?.content ?? '';
    this.commentList = props?.commentList ?? [];
    this.createdAt = props?.createdAt ?? now;
    this.updatedAt = props?.updatedAt ?? now;
  }

  get commentNum(): number {
    return this.commentList.length;
  }

  get formatedCreatedAt(): string {
    return format(parseISO(this.createdAt), 'yyyy-MM-dd HH:mm:ss');
  }
}
