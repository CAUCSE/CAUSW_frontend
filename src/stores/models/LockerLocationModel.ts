import { action, makeObservable, observable } from 'mobx';

export class LockerLocationModel implements Locker.LocationDto {
  id: string;
  lockerNumber: number;
  //lockerLocationName: string;
  updatedAt: string;
  expireAt: string;
  isActive: boolean;
  isMine: boolean;

  constructor(props: Locker.LocationDto) {
    this.id = props.id;
    this.lockerNumber = props.lockerNumber;
    //this.lockerLocationName = props.lockerLocationName;
    this.updatedAt = props.updatedAt;
    this.expireAt = props.expireAt;
    this.isActive = props.isActive;
    this.isMine = props.isMine;

    makeObservable(this, {
      updatedAt: observable,
      expireAt: observable,
      isActive: observable,
      isMine: observable,
      makeMine: action.bound,
      reset: action.bound,
    });
  }

  makeMine(): void {
    this.isActive = false;
    this.isMine = true;
  }

  reset(): void {
    this.isActive = true;
    this.isMine = false;
  }
}
