declare namespace User {
  // /api/v1/users/sign-in
  export interface SignInRequestDto {
    email: string;
    password: string;
    auto?: boolean;
  }

  // ==

  export interface UserUpdateDto {
    admissionYear: number;
    email: string;
    name: string;
    profileImage: string | null;
    studentId: string;
  }

  export interface FindPostsResponse {
    posts: Model.HistoryPost[];
    last: boolean;
  }

  export interface FindPostsResponseDto {
    post: {
      content: HistoryData.Post[];
      last: boolean;
    };
  }

  export interface FindCommentsResponse {
    comments: Model.HistoryComment[];
    last: boolean;
  }

  export interface FindCommentsResponseDto {
    comment: {
      content: HistoryData.Comment[];
      last: boolean;
    };
  }
}
