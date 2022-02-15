import { CommentModel } from './CommentModel';

export class ReplyCommentModel extends CommentModel {
  refChildComment: string | null;
  tagUserName: string | null;

  constructor(props: ReplyComment.CreateResponseDto) {
    super(props);

    this.refChildComment = props.refChildComment;
    this.tagUserName = props.tagUserName;
  }
}
