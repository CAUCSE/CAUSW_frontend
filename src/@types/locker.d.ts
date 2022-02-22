declare namespace Locker {
  export interface Dto {
    id: string;
    name: string;
    description: string;
    enableLockerCount: number;
    totalLockerCount: number;
  }
  export interface LocationDto {
    id: string;
    lockerNumber: number;
    lockerLocationName: string;
    updatedAt: string;
    isActive: boolean;
    isMine: boolean;
  }

  export interface FindAllLocationResponseDto {
    lockerLocations: Dto[];
    myLocker: LocationDto;
  }

  export interface FindAllLocationResponse {
    lockers: Model.Locker[];
    myLocker?: Model.LockerLocation;
  }

  export interface FindByLocationResponseDto {
    locationName: string;
    lockerList: LockerLocationDto[];
  }

  export interface FindByLocationResponse {
    locationName: string;
    lockerList: Model.LockerLocation[];
  }
}
