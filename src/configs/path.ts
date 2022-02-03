export enum PAGE_URL {
  Auth = '/auth',
  SignIn = '/auth/signin',
  SignUp = '/singup',

  Home = '/home',

  Circle = '/circle',
  CircleJoin = '/circle/:circleId/join',

  Board = '/boards',
  Setting = '/settings',

  Post = '/boards/:boardId',
  PostWrite = '/posts/write',
  PostDetail = '/posts/:postId',

  Err404 = '/error/404',
}
