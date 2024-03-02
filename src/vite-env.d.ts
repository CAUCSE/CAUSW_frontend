/// <reference types="vite/client" />

import type { AdmissionPageUiStore } from './pages/auth/admission/AdmissionPageUiStore';
import type { SignInPageUiStore } from './pages/auth/signIn/SignInPageUiStore';
import type { SignUpPageUiStore } from './pages/auth/signUp/SignUpPageUiStore';
import type { BoardListPageUiStore } from './pages/board/boardList/BoardListPageUiStore';
import type { PostDetailPageUiStore } from './pages/board/postDetail/PostDetailPageUiStore';
import type { PostEditorPageUiStore } from './pages/board/postEditor/PostEditorPageUiStore';
import type { PostListPageUiStore } from './pages/board/postList/PostListPageUiStore';
import type { CircleEditorPageUiStore } from './pages/circle/editor/CircleEditorPageUiStore';
import type { CircleHomePageUiStore } from './pages/circle/home/CircleHomePageUiStore';
import type { CircleJoinPageUiStore } from './pages/circle/join/CircleJoinPageUiStore';
import type { CircleMainPageUiStore } from './pages/circle/main/CircleMainPageUiStore';
import type { CircleUsersPageUiStore } from './pages/circle/users/CircleUsersPageUiStore';
import type { HistoryCommentPageUiStore } from './pages/history/comment/HistoryCommentPageUiStore';
import type { HistoryPostPageUiStore } from './pages/history/post/HistoryPostPageUiStore';
import type { HomePageUiStore } from './pages/home/HomePageUiStore';
import type { LockerListPageUiStore } from './pages/locker/list/LockerListPageUiStore';
import type { LockerLocationsPageUiStore } from './pages/locker/locations/LockerLocationsPageUiStore';
import type { SettingPasswordPageUiStore } from './pages/setting/password/SettingPasswordPageUiStore';
import type { SettingProfilePageUiStore } from './pages/setting/profile/SettingProfilePageUiStore';
import type { SettingRoleAlumniPageUiStore } from './pages/setting/roleAlumni/SettingRoleAlumniPageUiStore';
import type { SettingRoleCouncilPageUiStore } from './pages/setting/roleCouncil/SettingRoleCouncilPageUiStore';
import type { SettingRoleDelegationPageUiStore } from './pages/setting/roleDelegation/SettingRoleDelegationPageUiStore';
import type { SettingRoleLeaderCirclePageUiStore } from './pages/setting/roleLeaderCircle/SettingRoleLeaderCirclePageUiStore';
import type { SettingRoleLeaderGradePageUiStore } from './pages/setting/roleLeaderGrade/SettingRoleLeaderGradePageUiStore';
import type { SettingRoleManagementPageUiStore } from './pages/setting/roleManagement/SettingRoleManagementPageUiStore';
import type { SettingUsersPageUiStore } from './pages/setting/users/SettingUsersPageUiStore';
import type { AuthStore } from './stores/AuthStore';
import type {
  AdmissionUserModel,
  CircleUserModel,
  LockerLocationModel,
  LockerModel,
} from './stores/models';
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
  }

  namespace PageUiStore {
    type LockerList = LockerListPageUiStore;
    type LockerLocations = LockerLocationsPageUiStore;

    type CircleEditor = CircleEditorPageUiStore;
    type CircleUsers = CircleUsersPageUiStore;

    type SettingRoleManagement = SettingRoleManagementPageUiStore;
    type SettingUsers = SettingUsersPageUiStore;
    type SettingRoleDelegation = SettingRoleDelegationPageUiStore;
    type SettingRoleCouncil = SettingRoleCouncilPageUiStore;
    type SettingRoleLeaderGrade = SettingRoleLeaderGradePageUiStore;
    type SettingRoleLeaderCircle = SettingRoleLeaderCirclePageUiStore;
    type SettingRoleAlumni = SettingRoleAlumniPageUiStore;

    //
    type SignIn = SignInPageUiStore;
    type SignUp = SignUpPageUiStore;
    type Admission = AdmissionPageUiStore;
    type Home = HomePageUiStore;
    type CircleHome = CircleHomePageUiStore;
    type CircleJoin = CircleJoinPageUiStore;
    type CircleMain = CircleMainPageUiStore;
    type BoardList = BoardListPageUiStore;
    type BoardCreate = BoardCreate;
    type PostList = PostListPageUiStore;
    type PostDetail = PostDetailPageUiStore;
    type PostEditor = PostEditorPageUiStore;
    type SettingProfile = SettingProfilePageUiStore;
    type SettingPassword = SettingPasswordPageUiStore;
    type HistroyPost = HistoryPostPageUiStore;
    type HistroyComment = HistoryCommentPageUiStore;
  }

  namespace Model {
    type AdmissionUser = AdmissionUserModel;
    type Locker = LockerModel;
    type LockerLocation = LockerLocationModel;

    type CircleUser = CircleUserModel;
    //
    type Post = PostModel;
    type HistoryPost = HistoryPostModel;
    type Comment = CommentModel;
    type ReplyComment = ReplyCommentModel;
    type HistoryComment = HistoryCommentModel;
    //
    type Board = BoardModel;
    type Author = AuthorModel;
    type User = UserModel;
    type Circle = CircleModel;
    type CircleBoard = CircleBoardModel;
  }

  interface StoreAPI {
    success: boolean;
    errorCode?: number | string;
    message?: string;
    timeStamp: string;
  }

  interface ImageState {
    file: File | null;
    blobUrl?: string;
  }
}

type NonNullable<T> = Exclude<T, null | undefined>;
