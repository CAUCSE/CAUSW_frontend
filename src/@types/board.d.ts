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
    name: string;
    category: string;
    createRoleList: User.Role[];
    description: string;
    writable: boolean;
    circleId: string;
    circleName: string;
    isDeleted: boolean;
  }
}
