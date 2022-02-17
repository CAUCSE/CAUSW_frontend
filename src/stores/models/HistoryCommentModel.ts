import { isToday } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';
import { generatePath } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';

export class HistoryCommentModel {
  boardId: string;
  postId: string;
  parentCommentId: string | null;
  circleName: string | null;
  boardName: string;
  postName: string;
  id: string;
  content: string;
  tagUserName: string | null;
  createdAt: string;
  updatedAt: string;

  constructor(props: HistoryData.Comment) {
    this.boardId = props.boardId;
    this.postId = props.postId;
    this.parentCommentId = props.parentCommentId;
    this.circleName = props.circleName;
    this.boardName = props.boardName;
    this.postName = props.postName;
    this.id = props.id;
    this.content = props.content;
    this.tagUserName = props.tagUserName;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  get to(): string {
    let url, params;

    if (this.parentCommentId) {
      url = PAGE_URL.PostReplyComment;
      params = { boardId: this.boardId, postId: this.postId };
    } else {
      url = PAGE_URL.PostDetail;
      params = { boardId: this.boardId, postId: this.postId, commtId: this.parentCommentId };
    }

    return generatePath(url, params);
  }

  get formatedCreatedAt(): string {
    const zonedDate = utcToZonedTime(this.createdAt, 'Asis/Seoul');

    return format(zonedDate, isToday(zonedDate) ? 'HH:mm:ss' : 'yyyy.MM.dd HH:mm');
  }
}
