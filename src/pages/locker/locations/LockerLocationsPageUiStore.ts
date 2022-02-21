import { makeAutoObservable } from 'mobx';

import { LockerApplicationModalUi, LockerReturnModalUi } from './components';

import { LockerRepoImpl as Repo } from '@/stores/repositories/LockerRepo';

export class LockerLocationsPageUiStore {
  locations: Model.LockerLocation[] = [];
  target?: Model.LockerLocation;

  applicationModal = new LockerApplicationModalUi();
  returnModal = new LockerReturnModalUi();

  constructor() {
    makeAutoObservable(
      this,
      {
        applicationModal: false,
        returnModal: false,
      },
      { autoBind: true },
    );
  }

  *fetch(locationId: string): Generator {
    this.locations = (yield Repo.findByLocation(locationId)) as Model.LockerLocation[];
  }

  setTarget(model: Model.LockerLocation): void {
    if (model.id === this.target?.id) this.target = undefined;
    else if (model.isMine || model.isActive) this.target = model;
  }

  get myLocation(): Model.LockerLocation | undefined {
    return this.locations.find(({ isMine }) => isMine);
  }

  get enableLockerCount(): number {
    return this.locations.filter(({ isActive, isMine }) => isActive && !isMine).length;
  }

  get totalLockerCount(): number {
    return this.locations.length;
  }
}

export const PageUiStoreImpl = new LockerLocationsPageUiStore();
