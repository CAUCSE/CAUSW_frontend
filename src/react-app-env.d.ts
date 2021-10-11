/// <reference types="react-scripts" />

import type { RootStore } from './stores/RootStore';
import type { AuthStore } from './stores/AuthStore';
import type { UiStore } from './stores/UiStore';
import type { BoardStore } from './stores/BoardStore';
import type { PostStore } from './stores/PostStore';

import type { AuthorModel } from './stores/models/AuthorModel';
import type { PostModel } from './stores/models/PostModel';
import type { CommentModel } from './stores/models/CommentModel';

declare global {
  namespace Store {
    type Root = RootStore;
    type Auth = AuthStore;
    type Ui = UiStore;
    type Board = BoardStore;
    type Post = PostStore;
  }

  namespace Model {
    type Author = AuthorModel;
    type Post = PostModel;
    type Comment = CommentModel;
  }
}
