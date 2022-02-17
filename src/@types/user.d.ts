declare namespace User {
  export interface FindPostsResponse {
    posts: Model.Post[];
    last: boolean;
  }

  export interface FindPostsResponseDto {
    // TODO: 필요 없음
    // email: string
    // id: string
    // studentId: string

    admissionYear: number;
    name: string;
    profileImage: string | null;
    post: {
      content: Content[];
      last: boolean;
    };
  }
}
