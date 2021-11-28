import type { Content } from '../types/PostType';
import { isToday } from 'date-fns';
import { utcToZonedTime, format } from 'date-fns-tz';

export class PostModel {
  id?: string;
  title: string;
  writerName: string;
  createdAt: Date;
  updatedAt: Date;
  numComment: number;

  constructor(props: Content) {
    this.id = props.id;
    this.title = props.title;
    this.writerName = props.writerName;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.numComment = props.numComment;
  }

  get formatedCreatedAt(): string {
    const zonedDate = utcToZonedTime(this.createdAt, 'Asis/Seoul');

    return format(zonedDate, isToday(zonedDate) ? 'HH:mm:ss' : 'yyyy.MM.dd HH:mm');
  }
}
