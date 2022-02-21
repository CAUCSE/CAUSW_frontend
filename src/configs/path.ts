export enum PAGE_URL {
  Auth = '/auth',
  SignIn = '/auth/signin',
  SignUp = '/auth/singup',
  Admission = '/auth/admission',

  Home = '/home',

  // 소모임
  Circle = '/circle',
  CircleMain = '/circle/:circleId',
  CircleJoin = '/circle/:circleId/join',

  // 게시글
  Board = '/boards',
  PostList = '/boards/:boardId/posts',
  PostWrite = '/boards/:boardId/posts/write',
  PostEdit = '/boards/:boardId/posts/:postId/edit',
  PostDetail = '/boards/:boardId/posts/:postId',
  PostReplyComment = '/boards/:boardId/posts/:postId/comment/:commentId',

  Setting = '/setting',
  SettingProfile = '/setting/profile',
  SettingPassword = '/setting/password',

  History = '/history',
  HistoryPost = '/history/post',
  HistoryComment = '/history/comment',

  Err404 = '/error/404',
}

export interface PostParams {
  boardId: string;
  postId: string;
  commentId: string;
}
