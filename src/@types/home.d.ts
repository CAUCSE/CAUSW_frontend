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
    };
  }[];

  export type GetHomePageResponse = {
    board: Model.Board;
    posts: Model.Post[];
  }[];
}
