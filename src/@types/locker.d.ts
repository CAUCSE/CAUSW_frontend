declare namespace Locker {
  export interface Dto {
    id: string;
    name: string;
    description: string;
    enableLockerCount: number;
    totalLockerCount: number;
  }

  export type FindAllLocationResponseDto = Dto[];
}
