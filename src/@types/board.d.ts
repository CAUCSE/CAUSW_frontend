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

  export interface CreateResponseDto {
    id: string;
    name: string;
    category: string;
    circleId: string;
    createRoleList: User.Role[];
    description: string;
  }

  export interface CreateRequestDto {
    category: string;
    circleId: string;
    createRoleList: User.Role[];
    description: string;
    name: string;
  }

  // TODO: 게시판 관리 구현 시 서버와 조정 필요
  export interface UpdateRequestDto {
    category: string;
    circleId: string;
    createRoleList: User.Role[];
    description: string;
    name: string;
  }
}
