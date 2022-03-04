declare namespace Circle {
  export interface CreateRequestDto {
    mainImage: string;
    name: string;
    description: string;
    leaderId: string;
  }

  export type UpdateRequestDto = Omit<CreateRequestDto, 'leaderId'>;

  //
  export interface FindByIdDto {
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

  export interface UserApplyDto {
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

  export interface FindBoardsDto {
    circle: findByIdDto;
    boardList: Board[];
  }

  export interface FindBoards {
    circle: Model.Circle;
    boards: Model.CircleBoard[];
  }

  // Client
  // 기본, 신청완료, 대기중, 가입됨, 제한
  export type JoinStatus = 'NONE' | 'DONE' | 'AWAIT' | 'MEMBER' | 'BLOCK';
}
