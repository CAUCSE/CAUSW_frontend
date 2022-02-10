declare namespace Post {
  export interface CreateRequestDto {
    boardId: string;
    title: string;
    content: string;
  }

  export interface UpdateRequestDto {
    title: string;
    content: string;
  }
}

//
declare namespace PostDetail {
  export interface Board {
    id: string;
    name: string;
    description: string;
    createRoleList: string[];
    category: string;
    writable: boolean;
    isDeleted: boolean;
    circleId?: any;
    circleName?: any;
  }

  export interface ChildCommentList {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    postId: string;
    writerId: string;
    writerName: string;
    writerProfileImage?: any;
    updatable: boolean;
    deletable: boolean;
    parentCommentId?: any;
    childCommentList: any[];
  }

  export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  }

  export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  }

  export interface Sort2 {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  }

  export interface CommentList {
    content: Comment.Dto[];
    pageable: Pageable;
    totalElements: number;
    last: boolean;
    totalPages: number;
    size: number;
    number: number;
    sort: Sort2;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
  }

  export interface RootObject {
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
    board: Board;
    updatable: boolean;
    deletable: boolean;
    commentList: CommentList;
    boardId: string;
    boardName: string;
  }
}
