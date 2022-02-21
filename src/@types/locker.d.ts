declare namespace Locker {
  export interface Dto {
    id: string;
    name: string;
    description: string;
    enableLockerCount: number;
    totalLockerCount: number;
  }

  export type FindAllLocationResponseDto = Dto[];

  export interface LocationDto {
    id: string;
    lockerNumber: number;
    lockerLocationName: string;
    updatedAt: string;
    isActive: boolean;
    isMine: boolean;
  }

  export type FindByLocationResponseDto = LockerLocationDto[];
}
