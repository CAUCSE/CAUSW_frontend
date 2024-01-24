declare namespace Board {
  export interface Item {
    key: string;
    name: string;
    notification: boolean;
  }

  export interface Board {
    category: string;
    items: Item[];
  }

  export interface RootObject {
    board: Board[];
  }

  export interface ResponseDto {
    id: string;
    category: string;
    name: string;

    // TODO: 타입 일치 필요
    writable?: boolean;
    isDeleted?: boolean;
    circleId?: string;
    circleName?: string;
    createRoleList?: string[];
  }
}
