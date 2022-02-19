declare namespace Home {
  export type GetHomePageResponseDto = {
    board: {
      id: string;
      category: string;
      name: string;
    };
    posts: {
      content: Content[];
    };
  }[];

  export type GetHomePageResponse = {
    board: Model.Board;
    posts: Model.Post[];
  }[];
}
