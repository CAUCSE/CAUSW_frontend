declare namespace Post {
  export interface Dto {
    id: string;
    title: string;
    writerName: string;
    writerAdmissionYear: number;
    writerProfileImage: string | null;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    numComment: number;
    updatable: boolean;
    deletable: boolean;
    isDeleted: boolean;
    attachmentList: IAttachment[];
  }

  export interface FindAllResponseDto {
    boardId: string;
    boardName: string;
    writable: boolean;
    post: {
      content: Post.Dto[];
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

  interface IAttachment {
    downloadFilePath: string;
    originalFileName: string;
  }

  export interface FindByIdResponseDto {
    // boardId: string;
    boardName: string;
    commentList: PostComment.GetResponseDto;
    attachmentList: IAttachment[];

    // content: Dto;
    id: string;
    title: string;
    writerName: string;
    writerAdmissionYear: number;
    writerProfileImage: string | null;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    numComment: number;
    updatable: boolean;
    deletable: boolean;
    isDeleted: boolean;
  }

  type DeleteResponseKind = 'SUCCESS' | 'ERROR';

  export interface DeleteResponseDto {
    kind: DeleteResponseKind;
    success: boolean;
    errorCode?: number;
    message?: string;
    timeStamp?: Date;
  }
}
