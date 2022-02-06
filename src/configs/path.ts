export enum PAGE_URL {
  Auth = '/auth',
  SignIn = '/auth/signin',
  SignUp = '/singup',

  Home = '/home',

  // 소모임
  Circle = '/circle',
  CircleMain = '/circle/:circleId',
  CircleJoin = '/circle/:circleId/join',

  // 게시글
  Board = '/boards',
  PostList = '/boards/:boardId/posts',
  PostWrite = '/boards/:boardId/posts/write',
  PostDetail = '/boards/:boardId/posts/:postId',
  PostEdit = '/boards/:boardId/posts/:postId/edit',

  Setting = '/settings',

  Err404 = '/error/404',
}
