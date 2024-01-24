import { action, makeObservable } from 'mobx';

import { CommentModel } from './CommentModel';

export class PostCommentModel extends CommentModel {
  numChildComment: number;

  constructor(props: PostComment.CreateResponseDto) {
    super(props);

    this.numChildComment = props.numChildComment;

    makeObservable(this, {
      setNumChildComment: action.bound,
    });
  }

  /**
   * 답글 수 설정
   */
  setNumChildComment(param: (num: number) => number | number): void {
    if ('number' === typeof param) this.numChildComment = param;
    else this.numChildComment = param(this.numChildComment);
  }
}
