import { makeAutoObservable } from 'mobx';

import { listKey } from '../../SettingRoleManagementPageUiStore';

import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class DeleteCircleModalUi {
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

  *deleteCircle(circleId: string): Generator {
    try {
      yield Repo.delete(circleId);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}
