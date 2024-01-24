declare namespace PostComment {
  export interface GetResponseDto {
    content: CreateResponseDto[];
    last: boolean;
  }

  export interface FindAllResponse {
    comments: Model.Comment[];
    last: boolean;
  }

  export interface CreateRequestDto {
    postId: string;
    content: string;
  }

  export interface CreateResponseDto extends Comment.CreateResponseDto {
    numChildComment: number;
  }
}

declare namespace Comment {
  export interface CreateResponseDto {
    postId: string;
    id: string;
    writerAdmissionYear: number;
    writerName: string;
    writerProfileImage: string | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    updatable: boolean;
    deletable: boolean;
    isDeleted: boolean;
  }
}
