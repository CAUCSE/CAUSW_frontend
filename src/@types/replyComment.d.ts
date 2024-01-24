declare namespace ReplyComment {
  export interface GetResponseDto {
    childComments: {
      content: CreateResponseDto[];
      last: boolean;
    };
    parentComment: PostComment.CreateResponseDto;
  }

  export interface FindAllResponse {
    parent: Model.Comment;
    comments: Model.ReplyComment[];
    last: boolean;
  }

  export interface CreateRequestDto {
    parentCommentId: string;
    content: string;
    // 답글의 답글인 경우
    refChildComment?: string;
    tagUserName?: string;
  }

  export interface CreateResponseDto extends Comment.CreateResponseDto {
    refChildComment: string | null;
    tagUserName: string | null;
  }
}
