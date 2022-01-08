/// <reference types="react-scripts" />

import type { RootStore } from './stores/RootStore';
import type { AuthStore } from './stores/AuthStore';
import type { UiStore } from './stores/UiStore';
import type { HomeStore } from './stores/HomeStore';
import type { CircleStore } from './stores/CircleStore';
import type { BoardStore } from './stores/BoardStore';
import type { PostStore } from './stores/PostStore';

import type { BoardModel } from './stores/models/BoardModel';
import type { AuthorModel } from './stores/models/AuthorModel';
import type { PostModel } from './stores/models/PostModel';
import type { CommentModel } from './stores/models/CommentModel';
import type { UserModel } from './stores/models/UserModel';
import type { CircleModel } from './stores/models/CircleModel';

declare global {
  namespace Store {
    type Root = RootStore;
    type Auth = AuthStore;
    type Ui = UiStore;
    type Home = HomeStore;
    type Circle = CircleStore;
    type Board = BoardStore;
    type Post = PostStore;
  }

  namespace Model {
    type Board = BoardModel;
    type Author = AuthorModel;
    type Post = PostModel;
    type Comment = CommentModel;
    type User = UserModel;
    type Circle = CircleModel;
  }
}
