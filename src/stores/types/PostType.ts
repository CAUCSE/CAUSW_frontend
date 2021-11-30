export interface Content {
  id: string;
  title: string;
  writerName: string;
  writerAdmissionYear: number;
  writerProfileImage: string | null;
  content?: string;
  createdAt: Date;
  updatedAt: Date;
  numComment: number;
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

export interface Post {
  content: Content[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort2;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface PostAllWithBoardResponseDto {
  boardId: string;
  boardName: string;
  writable: boolean;
  post: Post;
}