declare namespace User {
  export interface FindPostsResponse {
    posts: Model.HistoryPost[];
    last: boolean;
  }

  export interface FindPostsResponseDto {
    post: {
      content: Post.History[];
      last: boolean;
    };
  }

  //

  export interface FindCommentsResponse {
    comments: Model.Comment[];
    last: boolean;
  }

  export interface FindCommentsResponseDto {
    // TODO: 필요 없음
    // email: string
    // id: string
    // studentId: string

    admissionYear: number;
    name: string;
    profileImage: string | null;
    comment: {
      content: Content[];
      last: boolean;
    };
  }
}
