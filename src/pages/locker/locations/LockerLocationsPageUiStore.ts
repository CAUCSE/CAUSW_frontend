import { makeAutoObservable } from 'mobx';

import { LockerApplicationModalUi, LockerReturnModalUi, LockerExtendModalUi } from './components';

import { LockerRepoImpl as Repo } from '@/stores/repositories/LockerRepo';

export class LockerLocationsPageUiStore {
  locationName?: string;
  locations: Model.LockerLocation[] = [];
  target?: Model.LockerLocation;

  applicationModal = new LockerApplicationModalUi();
  returnModal = new LockerReturnModalUi();
  extendModal = new LockerExtendModalUi();

  constructor() {
    makeAutoObservable(
      this,
      {
        applicationModal: false,
        returnModal: false,
        extendModal: false,
      },
      { autoBind: true },
    );
  }

  reset(): void {
    this.locationName = undefined;
    this.locations = [];
  }

  *fetch(locationId: string): Generator {
    const { locationName, lockerList } = (yield Repo.findByLocation(
      locationId,
    )) as Locker.FindByLocationResponse;

    this.locationName = locationName;
    this.locations = lockerList;
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
