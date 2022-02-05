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
    postId: string | null;
    postTitle: string | null;
    postCreatedAt: string | null;
    postNumComment: number | null;
    postWriterName: string | null;
    postWriterStudentId: string | null;
  }
  export interface findBoardsDto {
    boardList: Board[];
    circle: findByIdDto;
  }

  // Client
  // 기본, 신청완료, 대기중, 가입됨, 제한
  export type JoinStatus = 'NONE' | 'DONE' | 'AWAIT' | 'MEMBER' | 'BLOCK';
}
