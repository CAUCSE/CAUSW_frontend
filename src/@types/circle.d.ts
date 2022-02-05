declare namespace Circle {
  // Server
  export interface findByIdDto {
    id: string;
    mainImage: string | null;
    name: string;
    description: string;
    isJoined: boolean;
    joinedAt: string | null;
    leaderId: string;
    leaderName: string;
    createdAt: string;
    numMember: number;
  }

  export interface userApplyDto {
    circle: Dto;
    id: string;
    status: 'AWAIT';
    userId: string;
    userName: string;
  }

  export interface Board {
    id: string;
    name: string;
    postId: string;
    postTitle: string;
    postCreatedAt: string;
    postNumComment: number;
    postWriterName: string;

    // TODO: 제거 필요
    // category: '공지게시판';
    // isDeleted: false;
    // circleId: '8ab880b67cc5d8e3017ce14684c00001';
    // circleName: 'CLUG';
    // createRoleList: ['admin', 'president', 'leader_circle', 'admin'];
  }
  export interface findBoardsDto {
    boardList: Board[];
    circle: findByIdDto;
  }

  // Client
  // 기본, 신청완료, 대기중, 가입됨, 제한
  export type JoinStatus = 'NONE' | 'DONE' | 'AWAIT' | 'MEMBER' | 'BLOCK';
}
