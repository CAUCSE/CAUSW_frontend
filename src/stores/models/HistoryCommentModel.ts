import { isToday, format } from 'date-fns';
import { generatePath } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';

export class HistoryCommentModel {
  boardId: string;
  postId: string;

  circleName: string | null;
  boardName: string;
  postName: string;
  id: string;
  content: string;

  createdAt: string;
  updatedAt: string;

  //#71 추가
  isDeleted: boolean;
  circleId: string;

  //tagUserName: string | null;
  //parentCommentId: string | null;

  constructor(props: HistoryData.Comment) {
    this.boardId = props.boardId;
    this.postId = props.postId;
    this.circleName = props.circleName;
    this.boardName = props.boardName;
    this.postName = props.postName;
    this.id = props.id;
    this.content = props.content;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    //#71 추가
    this.isDeleted = props.isDeleted;
    this.circleId = props.circleId;
  }

  get to(): string {
    const url = PAGE_URL.PostDetail;
    const params = { boardId: this.boardId, postId: this.postId };

    //#71 수정
    /*     let url, params;
    if (this.parentCommentId) {
      url = PAGE_URL.PostReplyComment;
      params = { boardId: this.boardId, postId: this.postId };
    } else {
      url = PAGE_URL.PostDetail;
      params = { boardId: this.boardId, postId: this.postId, commtId: this.parentCommentId };
    } */

    return generatePath(url, params);
  }

  get formatedCreatedAt(): string {
    const date = new Date(this.createdAt);

    return format(date, isToday(date) ? 'HH:mm:ss' : 'yyyy.MM.dd HH:mm');
  }
}
