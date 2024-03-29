declare namespace Board {
  export interface Dto {
    name: string;
    description: string;
    createRoleList: User.Role[];
    category: string;
    circleId: string | null;
  }

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

  export interface ResponseDto extends Dto {
    id: string;
    writable: boolean;
    isDeleted: boolean;
    circleName: string;
    //#83 추가
    name: string;
    category: string;
    circleId: string | null;
    circleName: string | null;
    createRoleList: User.Role[];
  }

  interface RequestDto extends Dto {}

  export interface CreateRequestDto extends RequestDto {}

  // TODO: 게시판 관리 구현 시 서버와 조정 필요
  export interface UpdateRequestDto extends RequestDto {}
}
