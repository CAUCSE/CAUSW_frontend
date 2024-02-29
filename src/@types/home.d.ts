declare namespace Home {
  export type GetHomePageResponseDto = {
    board: {
      id: string;
      category: string;
      name: string;
      description: string;
      isDeleted: string;
      writable: boolean;
      createRoleList: User.Role[];
    };
    posts: {
      content: Post.Dto[];
      empty: boolean;
      first: boolean;
      last: boolean;
      number: number;
      numberOfElements: number;
      pageable: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        sort: {
          empty: boolean;
          sorted: boolean;
          unsorted: boolean;
        };
        unpaged: boolean;
      };
      size: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      totalElements: number;
      totalPages: number;
    };
  }[];

  export type GetHomePageResponse = {
    board: Model.Board;
    posts: Model.Post[];
  }[];
}
