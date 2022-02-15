declare namespace ReplyComment {
  export interface GetResponseDto {
    childComments: {
      content: CreateReponseDto[];
      last: boolean;
    };
    parentComment: Comment.CreateReponseDto;
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
    tagUserName?: strin;
  }

  export interface CreateResponseDto extends PostComment.CreateResponseDto {
    refChildComment: string | null;
    tagUserName: string | null;
  }
}
