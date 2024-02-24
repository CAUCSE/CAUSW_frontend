import { makeAutoObservable } from 'mobx';

import { listKey } from '../../SettingRoleManagementPageUiStore';

import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class DeleteCircleModalUi {
  visible = false;
  key?: listKey;
  target?: Model.User;
  circleIndex?: number;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  open(key: listKey, target: Model.User, circleIndex: number): void {
    this.visible = true;
    this.key = key;
    this.target = target;
    this.circleIndex = circleIndex;
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
