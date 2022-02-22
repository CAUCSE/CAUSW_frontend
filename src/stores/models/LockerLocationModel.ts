import { makeObservable, observable } from 'mobx';

export class LockerLocationModel implements Locker.LocationDto {
  id: string;
  lockerNumber: number;
  lockerLocationName: string;
  updatedAt: string;
  isActive: boolean;
  isMine: boolean;

  constructor(props: Locker.LocationDto) {
    this.id = props.id;
    this.lockerNumber = props.lockerNumber;
    this.lockerLocationName = props.lockerLocationName;
    this.updatedAt = props.updatedAt;
    this.isActive = props.isActive;
    this.isMine = props.isMine;

    makeObservable(
      this,
      {
        updatedAt: observable,
        isActive: observable,
        isMine: observable,
      },
      { autoBind: true },
    );
  }
}
