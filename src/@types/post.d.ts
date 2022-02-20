declare namespace Post {
  export interface Dto {
    id: string;
    title: string;
    writerName: string;
    writerAdmissionYear: number;
    writerProfileImage: string | null;
    content?: string;
    createdAt: Date;
    updatedAt: Date;
    numComment: number;
    updatable: boolean;
    deletable: boolean;
    isDeleted: boolean;
  }

  export interface FindAllResponseDto {
    boardId: string;
    boardName: string;
    writable: boolean;
    post: {
      content: Content[];
      last: boolean;
    };
  }

  export interface FindAllResponse {
    boardId: string;
    boardName: string;
    writable: boolean;
    post: {
      content: Model.Post[];
      last: boolean;
    };
  }

  export interface CreateRequestDto {
    boardId: string;
    title: string;
    content: string;
  }

  export interface UpdateRequestDto {
    title: string;
    content: string;
  }

  export interface FindByIdResponseDto extends PostDto {
    boardId: string;
    boardName: string;
    commentList: CommentList;
  }
}
