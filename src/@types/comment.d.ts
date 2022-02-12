declare namespace Comment {
  export interface CreateRequestDto {
    postId: string;
    content: string;
  }

  export interface CreateReponseDto {
    postId: string;
    id: string;
    writerAdmissionYear: number;
    writerName: string;
    writerProfileImage: string | null;
    content: string;
    createdAt: string;
    updatedAt: string;
    numChildComment: number;
    updatable: boolean;
    deletable: boolean;
    isDeleted: boolean;
  }
}
