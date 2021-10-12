export enum PAGE_URL {
  SignIn = '/signin',
  SignUp = '/singup',

  Home = '/home',
  Circle = '/circle',

  Board = '/board',
  Post = '/board/:boardId',
  PostWrite = '/board/:boardId/post/write',
  PostDetail = '/board/:boardId/post/:postId',

  Err404 = '/error/404',
}
