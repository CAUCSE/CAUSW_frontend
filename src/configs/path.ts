export enum PAGE_URL {
  Auth = '/auth',
  SignIn = '/auth/signin',
  SignUp = '/auth/singup',
  Admission = '/auth/admission',

  Home = '/home',

  // 동아리
  Circle = '/circle',
  CircleAdd = '/circle/add',
  CircleMain = '/circle/:circleId',
  CircleEdit = '/circle/:circleId/edit',
  CircleJoin = '/circle/:circleId/join',
  CircleUsers = '/circle/:circleId/users',

  // 게시글
  Board = '/boards',
  BoardCreate = '/boards/create',
  BoardEdit = '/boards/:boardId/edit',
  PostList = '/boards/:boardId/posts',
  PostWrite = '/boards/:boardId/posts/add',
  PostEdit = '/boards/:boardId/posts/:postId/edit',
  PostDetail = '/boards/:boardId/posts/:postId',
  PostReplyComment = '/boards/:boardId/posts/:postId/comment/:commentId',

  // 설정
  Setting = '/setting',
  SettingProfile = '/setting/profile',
  SettingPassword = '/setting/password',
  SettingUsers = '/setting/users',
  // SettingBoards = '/setting/boards',

  // 설정 > 권한 관리
  SettingRoleManagement = '/setting/role',
  SettingRoleCounil = '/setting/role/counil',
  SettingRoleLeaderGrade = '/setting/role/leader-grade',
  SettingRoleLeaderCircle = '/setting/role/leader-circle',
  SettingRoleAlumni = '/setting/role/alumni',
  SettingRoleDelegation = '/setting/role/delegation',
  // SettingCircleBoards = '/setting/circle/boards',

  // 내가 쓴 글, 댓글
  History = '/history',
  HistoryPost = '/history/post',
  HistoryComment = '/history/comment',

  // 사물함
  Locker = '/locker',
  //LockerList = '/locker',
  LockerLocation = '/locker/:locationId',

  Err404 = '/error/404',
}

export interface LocationParams {
  locationId: string;
}

export interface PostParams {
  boardId: string;
  postId: string;
  commentId: string;
}

export interface CircleParams {
  circleId: string;
}
