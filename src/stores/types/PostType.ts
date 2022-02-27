// TODO: 레거시 코드
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
