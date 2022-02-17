import { isToday } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';
import { generatePath } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';

export class HistoryPostModel {
  circleName: string | null;
  boardId: string;
  boardName: string;
  id: string;
  title: string;
  numComment: number;
  createdAt: string;
  updatedAt: string;

  constructor(props: HistoryData.Post) {
    this.circleName = props.circleName ?? '';
    this.boardId = props.boardId;
    this.boardName = props.boardName;
    this.id = props.id;
    this.title = props.title;
    this.numComment = props.numComment;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  get to(): string {
    return generatePath(PAGE_URL.PostDetail, { boardId: this.boardId, postId: this.id });
  }

  get formatedCreatedAt(): string {
    const zonedDate = utcToZonedTime(this.createdAt, 'Asis/Seoul');

    return format(zonedDate, isToday(zonedDate) ? 'HH:mm:ss' : 'yyyy.MM.dd HH:mm');
  }
}
