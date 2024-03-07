import { makeAutoObservable } from 'mobx';

import { DeleteCircleModalUi } from './components/DeleteCircleModal/DeleteCircleModalUi';
import { DeleteRuleModalUi } from './components/DeleteRuleModal/DeleteRuleModalUi';

import { WithUserInfoModalUi } from '@/components';
import { UserInfoModalUi } from '@/components/UserInfoModal/UserInfoModalUi';
import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export type listKey = 'councilUsers' | 'leaderGradeUsers' | 'leaderCircleUsers';

export class SettingRoleManagementPageUiStore implements WithUserInfoModalUi {
  presidentUser: Model.User[] = [];
  vicePresidentUser: Model.User[] = [];
  councilUsers: Model.User[] = [];
  leaderGradeUsers: Model.User[] = [];
  leaderCircleUsers: Model.User[] = [];
  leaderAlumni: Model.User[] = [];

  // Modal
  userInfoModal = new UserInfoModalUi();
  deleteRuleModal = new DeleteRuleModalUi();
  deleteCircleModal = new DeleteCircleModalUi();

  constructor() {
    makeAutoObservable(
      this,
      {
        userInfoModal: false,
        deleteRuleModal: false,
      },
      { autoBind: true },
    );
  }

  reset(): void {
    this.presidentUser = [];
    this.vicePresidentUser = [];
    this.councilUsers = [];
    this.leaderGradeUsers = [];
    this.leaderCircleUsers = [];
    this.leaderAlumni = [];
  }

  *fetch(): Generator {
    const {
      presidentUser,
      vicePresidentUser,
      councilUsers,
      leaderAlumni,
      leaderCircleUsers,
      leaderGradeUsers,
    } = (yield Repo.findPrivilegedUsers()) as unknown as User.FindPrivilegedUsersResponse;
    this.presidentUser = presidentUser;
    this.vicePresidentUser = vicePresidentUser;
    this.councilUsers = councilUsers;
    this.leaderGradeUsers = leaderGradeUsers;
    this.leaderCircleUsers = leaderCircleUsers;
    this.leaderAlumni = leaderAlumni;
  }

  remove(key: 'councilUsers' | 'leaderGradeUsers' | 'leaderCircleUsers', target: Model.User): void {
    this[key] = this[key].filter(user => user.id !== target.id);
  }
}

export const PageUiStoreImpl = new SettingRoleManagementPageUiStore();
