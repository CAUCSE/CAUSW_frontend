import { format } from 'date-fns';
import { action, computed, makeObservable, observable } from 'mobx';

import { AuthorModel } from './AuthorModel';

export class CommentModel {
  postId: string;
  id: string;
  author: Model.Author;
  content: string;
  createdAt: string;
  updatedAt: string;

  updatable: boolean;
  deletable: boolean;
  isDeleted: boolean;

  constructor(props: Comment.CreateResponseDto) {
    this.postId = props.postId;
    this.id = props.id;
    this.author = new AuthorModel(
      props.writerAdmissionYear,
      props.writerName,
      props.writerProfileImage,
    );
    this.content = props.content;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;

    this.updatable = props.updatable;
    this.deletable = props.deletable;
    this.isDeleted = props.isDeleted;

    makeObservable(this, {
      content: observable,
      updatedAt: observable,

      updatable: observable,
      deletable: observable,
      isDeleted: observable,

      refresh: action.bound,

      formatedDate: computed,
      newLineContent: computed,
      editable: computed,
    });
  }

  /**
   * 대답글 내용, 수정 날짜 업데이트
   */
  refresh(data: CommentModel): void {
    this.content = data.content;
    this.updatedAt = data.updatedAt;
    this.updatable = data.updatable;
    this.deletable = data.deletable;
    this.isDeleted = data.isDeleted;
  }

  /**
   * 수정된 날짜 문자열(수정되지 않은 대답글인 경우 생성 날짜)
   */
  get formatedDate(): string {
    const date = new Date(this.createdAt);

    return format(date, 'yyyy.MM.dd HH:mm');
  }

  /**
   * <br>로 개행된 내용
   */
  get newLineContent(): string {
    return this.content.replace(/(?:\r\n|\r|\n)/g, '<br/>');
  }

  /**
   * 답글, 수정, 삭제가 가능한지 여부를 반환
   */
  get editable(): boolean {
    return !this.isDeleted || this.updatable || this.deletable;
  }
}
