/// <reference types="react-scripts" />

import type { AuthStore } from './stores/AuthStore';
import type { BoardStore } from './stores/BoardStore';
import type { CircleStore } from './stores/CircleStore';
import type { CommentStore } from './stores/CommentStore';
import type { HomeStore } from './stores/HomeStore';
import type { AuthorModel } from './stores/models/AuthorModel';
import type { BoardModel } from './stores/models/BoardModel';
import type { CircleBoardModel } from './stores/models/CircleBoardModel';
import type { CircleModel } from './stores/models/CircleModel';
import type { CommentModel } from './stores/models/CommentModel';
import type { HistoryCommentModel } from './stores/models/HistoryCommentModel';
import type { HistoryPostModel } from './stores/models/HistoryPostModel';
import type { PostModel } from './stores/models/PostModel';
import type { ReplyCommentModel } from './stores/models/ReplyCommentModel';
import type { UserModel } from './stores/models/UserModel';
import type { PostStore } from './stores/PostStore';
import type { ReplyCommentStore } from './stores/ReplyCommentStore';
import type { RootStore } from './stores/RootStore';
import type { UiStore } from './stores/UiStore';
import type { PostDetailPageUiStore } from './v2/pages/board/postDetail/PageUiStore.PostDetail';
import type { CircleMainPageUiStore } from './v2/pages/circle/main/CircleMainPageUiStore';
import type { HistoryCommentPageUiStore } from './v2/pages/setting/historyComment/HistoryCommentPageUiStore';
import type { HistoryPostPageUiStore } from './v2/pages/setting/historyPost/HistoryPostPageUiStore';
import type { SettingPasswordPageUiStore } from './v2/pages/setting/password/SettingPasswordPageUiStore';

declare global {
  namespace Store {
    type Root = RootStore;
    type Auth = AuthStore;
    type Ui = UiStore;
    type Home = HomeStore;
    type Circle = CircleStore;
    type Board = BoardStore;
    type Post = PostStore;
    type Comment = CommentStore;
    type ReplyComment = ReplyCommentStore;
  }

  namespace PageUiStore {
    type CircleMain = CircleMainPageUiStore;
    type PostDetail = PostDetailPageUiStore;
    type SettingPassword = SettingPasswordPageUiStore;
    type HistroyPost = HistoryPostPageUiStore;
    type HistroyComment = HistoryCommentPageUiStore;
  }

  namespace Model {
    type Board = BoardModel;
    type Author = AuthorModel;
    type User = UserModel;
    type Circle = CircleModel;
    type CircleBoard = CircleBoardModel;

    type Post = PostModel;
    type HistoryPost = HistoryPostModel;
    type Comment = CommentModel;
    type ReplyComment = ReplyCommentModel;
    type HistoryComment = HistoryCommentModel;
  }
}

type NonNullable<T> = Exclude<T, null | undefined>;
