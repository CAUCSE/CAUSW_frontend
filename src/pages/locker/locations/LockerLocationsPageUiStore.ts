import { makeAutoObservable } from 'mobx';

import { LockerRepoImpl as Repo, LockerRepoDummy as Dummy } from '@/stores/repositories/LockerRepo';
import { RootStoreInstance } from '@/stores/RootStore';

export class LockerLocationsPageUiStore {
  rootStore: Store.Root;
  locations: Model.LockerLocation[] = [];
  targe?: Model.LockerLocation;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *fetch(): Generator {
    this.locations = (yield Dummy.findByLocation()) as Model.LockerLocation[];
  }

  setTarget(model: Model.LockerLocation): void {
    if (model.isMine || !model.isActive) this.targe = model;
  }

  get myLocation(): Model.LockerLocation | undefined {
    return this.locations.find(({ isMine }) => isMine);
  }

  get enableLockerCount(): number {
    return this.locations.filter(({ isActive }) => !isActive).length;
  }

  get totalLockerCount(): number {
    return this.locations.length;
  }
}

export const PageUiStoreImpl = new LockerLocationsPageUiStore(RootStoreInstance);
