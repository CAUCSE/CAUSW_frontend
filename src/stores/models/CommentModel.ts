import { utcToZonedTime, format } from 'date-fns-tz';
import { action, computed, makeObservable, observable } from 'mobx';

import { AuthorModel } from './AuthorModel';

export class CommentModel {
  postId: string;
  id: string;
  author: Model.Author;
  content: string;
  // createdAt: string;
  updatedAt: string;
  numChildComment: number;
  updatable: boolean;
  deletable: boolean;
  isDeleted: boolean;

  constructor(props: Comment.CreateReponseDto) {
    this.postId = props.postId;
    this.id = props.id;
    this.author = new AuthorModel(props.writerAdmissionYear, props.writerName, props.writerProfileImage);
    this.content = props.content;
    // this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.numChildComment = props.numChildComment;
    this.updatable = props.updatable;
    this.deletable = props.deletable;
    // TODO: content가 '삭제된 댓글입니다.'로 변경시 필요 없음, deletable만 필요
    this.isDeleted = props.isDeleted;

    makeObservable(
      this,
      {
        content: observable,
        updatedAt: observable,

        refresh: action,
        formatedDate: computed,
      },
      { autoBind: true },
    );
  }

  /**
   * 대답글 내용, 수정 날짜 업데이트
   */
  refresh(data: CommentModel): void {
    this.content = data.content;
    this.updatedAt = data.updatedAt;
  }

  /**
   * 수정된 날짜 문자열(수정되지 않은 대답글인 경우 생성 날짜)
   */
  get formatedDate(): string {
    const zonedDate = utcToZonedTime(this.updatedAt, 'Asis/Seoul');

    return format(zonedDate, 'yyyy.MM.dd HH:mm');
  }
}
