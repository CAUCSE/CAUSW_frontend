/// <reference types="react-scripts" />

import type { AdmissionPageUiStore } from './pages/auth/admission/AdmissionPageUiStore';
import type { SignInPageUiStore } from './pages/auth/signIn/SignInPageUiStore';
import type { SignUpPageUiStore } from './pages/auth/signUp/SignUpPageUiStore';
import type { BoardListPageUiStore } from './pages/board/boardList/BoardListPageUiStore';
import type { PostDetailPageUiStore } from './pages/board/postDetail/PostDetailPageUiStore';
import type { PostEditorPageUiStore } from './pages/board/postEditor/PostEditorPageUiStore';
import type { PostListPageUiStore } from './pages/board/postList/PostListPageUiStore';
import type { CircleHomePageUiStore } from './pages/circle/home/CircleHomePageUiStore';
import type { CircleJoinPageUiStore } from './pages/circle/join/CircleJoinPageUiStore';
import type { CircleMainPageUiStore } from './pages/circle/main/CircleMainPageUiStore';
import type { HistoryCommentPageUiStore } from './pages/history/comment/HistoryCommentPageUiStore';
import type { HistoryPostPageUiStore } from './pages/history/post/HistoryPostPageUiStore';
import type { HomePageUiStore } from './pages/home/HomePageUiStore';
import type { SettingPasswordPageUiStore } from './pages/setting/password/SettingPasswordPageUiStore';
import { SettingProfilePageUiStore } from './pages/setting/profile/SettingProfilePageUiStore';
//
import type { AuthStore } from './stores/AuthStore';
import type { CircleStore } from './stores/CircleStore';
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
import type { RootStore } from './stores/RootStore';
import type { UiStore } from './stores/UiStore';

declare global {
  namespace Store {
    type Root = RootStore;
    type Auth = AuthStore;
    type Ui = UiStore;
    type Circle = CircleStore;
  }

  namespace PageUiStore {
    type SignIn = SignInPageUiStore;
    type SignUp = SignUpPageUiStore;
    type Admission = AdmissionPageUiStore;
    type Home = HomePageUiStore;
    type CircleHome = CircleHomePageUiStore;
    type CircleJoin = CircleJoinPageUiStore;
    type CircleMain = CircleMainPageUiStore;
    type BoardList = BoardListPageUiStore;
    type PostList = PostListPageUiStore;
    type PostDetail = PostDetailPageUiStore;
    type PostEditor = PostEditorPageUiStore;
    type SettingProfile = SettingProfilePageUiStore;
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

  interface StoreAPI {
    success: boolean;
    errorCode?: number;
    message?: string;
    timeStamp: string;
  }

  interface ImageState {
    file: File | null;
    blobUrl?: string;
  }
}

type NonNullable<T> = Exclude<T, null | undefined>;
