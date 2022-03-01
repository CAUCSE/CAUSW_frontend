import { makeAutoObservable } from 'mobx';

import { SelectGradeModalUi } from './components/SelectGradeModal/SelectGradeModalUi';

import {
  SearchUserModalUi,
  WithSearchUserModalUi,
} from '@/components/SearchUserModal/SearchUserModalUi';
import { UserRoleCodes } from '@/stores/models';
import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export type Role = 'LEADER_1' | 'LEADER_2' | 'LEADER_3' | 'LEADER_4';

export class SettingRoleLeaderGradePageUiStore implements WithSearchUserModalUi {
  submitDisabled = true;
  role?: Role;
  target?: Model.User;

  // Modal
  searchUserModal = new SearchUserModalUi();
  selectGradeModal = new SelectGradeModalUi();

  constructor() {
    makeAutoObservable(
      this,
      {
        searchUserModal: false,
      },
      { autoBind: true },
    );
  }

  reset(): void {
    this.submitDisabled = true;
    this.role = undefined;
    this.target = undefined;
  }

  setRole(role: Role): void {
    this.role = role;
  }

  setTarget(target: Model.User): void {
    this.submitDisabled = false;
    this.target = target;
  }

  *update(target: Model.User, role: User.UserDto['role']): Generator {
    try {
      this.submitDisabled = true;
      yield Repo.updateRole(target.id, role);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    } finally {
      this.submitDisabled = false;
    }
  }

  get roleText(): string {
    if (this.role) return UserRoleCodes[this.role];

    return '';
  }
}

export const PageUiStoreImpl = new SettingRoleLeaderGradePageUiStore();
