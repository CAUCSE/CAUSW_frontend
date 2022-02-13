declare namespace ReplyComment {
  export interface GetResponseDto {
    childComments: {
      content: CreateReponseDto[];
      totalPages: number;
    };
    parentComment: Comment.CreateReponseDto;
  }

  export interface FindAllResponse {
    parent: Model.Comment;
    comments: Model.ReplyComment[];
    totalPages: number;
  }

  export interface CreateRequestDto {
    parentCommentId: string;
    content: string;
    // 답글의 답글인 경우
    refChildComment?: string;
    tagUserName?: strin;
  }

  export interface CreateReponseDto extends Comment.CreateReponseDto {
    refChildComment: string | null;
    tagUserName: string | null;
  }
}
