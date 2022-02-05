/// <reference types="react-scripts" />

import type { AuthStore } from './stores/AuthStore';
import type { BoardStore } from './stores/BoardStore';
import type { CircleStore } from './stores/CircleStore';
import type { HomeStore } from './stores/HomeStore';
import type { AuthorModel } from './stores/models/AuthorModel';
import type { BoardModel } from './stores/models/BoardModel';
import type { CircleBoardModel } from './stores/models/CircleBoardModel';
import type { CircleModel } from './stores/models/CircleModel';
import type { CommentModel } from './stores/models/CommentModel';
import type { PostModel } from './stores/models/PostModel';
import type { UserModel } from './stores/models/UserModel';
import type { PostStore } from './stores/PostStore';
import type { RootStore } from './stores/RootStore';
import type { UiStore } from './stores/UiStore';

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
    type CircleBoard = CircleBoardModel;
  }
}

type NonNullable<T> = Exclude<T, null | undefined>;
