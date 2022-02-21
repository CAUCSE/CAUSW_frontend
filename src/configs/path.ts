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

  // 설정
  Setting = '/setting',
  SettingProfile = '/setting/profile',
  SettingPassword = '/setting/password',

  // 내가 쓴 글, 댓글
  History = '/history',
  HistoryPost = '/history/post',
  HistoryComment = '/history/comment',

  // 사물함
  Locker = '/locker',
  LockerList = '/locker',
  LockerLocation = '/locker/:lockerId',

  Err404 = '/error/404',
}

export interface PostParams {
  boardId: string;
  postId: string;
  commentId: string;
}
