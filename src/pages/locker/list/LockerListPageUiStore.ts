import { makeAutoObservable } from 'mobx';

import { LockerRepoImpl as Repo, LockerRepoDummy as Dummy } from '@/stores/repositories/LockerRepo';
import { RootStoreInstance } from '@/stores/RootStore';

export class LockerListPageUiStore {
  rootStore: Store.Root;
  lockers: Model.Locker[] = [];

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *fetch(): Generator {
    this.lockers = (yield Dummy.findAllLocation()) as Model.Locker[];
  }

  get enableLockerCount(): number {
    let count = 0;
    this.lockers.forEach(({ enableLockerCount }) => (count += enableLockerCount));

    return count;
  }

  get totalLockerCount(): number {
    let count = 0;
    this.lockers.forEach(({ totalLockerCount }) => (count += totalLockerCount));

    return count;
  }
}

export const PageUiStoreImpl = new LockerListPageUiStore(RootStoreInstance);
