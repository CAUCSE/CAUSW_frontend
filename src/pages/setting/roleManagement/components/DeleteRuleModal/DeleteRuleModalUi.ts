import { makeAutoObservable } from 'mobx';

import { listKey } from '../../SettingRoleManagementPageUiStore';

import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export class DeleteRuleModalUi {
  visible = false;
  key?: listKey;
  target?: Model.User;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  open(key: listKey, target: Model.User): void {
    this.visible = true;
    this.key = key;
    this.target = target;
  }

  close(): void {
    this.visible = false;
  }

  *deleteRole(target: Model.User): Generator {
    try {
      yield Repo.updateRole(target.id, 'COMMON');
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
