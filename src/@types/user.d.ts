declare namespace User {
  export interface UserDto {
    admissionYear: number;
    circleIdIfLeader: string;
    circleNameIfLeader: string;
    email: string;
    id: string;
    name: string;
    profileImage: string;
    role:
      | 'ADMIN'
      | 'PRESIDENT'
      | 'COUNCIL'
      | 'LEADER_1'
      | 'LEADER_2'
      | 'LEADER_3'
      | 'LEADER_4'
      | 'LEADER_CIRCLE'
      | 'LEADER_ALUMNI'
      | 'COMMON'
      | 'PROFESSOR';
    state: 'ACTIVE' | 'INACTIVE';
    studentId: string;
  }

  // findByName
  export type FindByNameResponseDto = UserDto[];
  export type FindByNameResponse = Model.User[];

  // updateRole
  export interface UpdateRoleRequestDto {
    role: UserDto['role'];
    circleId?: string;
  }
  // TODO: 작업중

  // findAllAdmissions
  export interface FindAllAdmissionsResponseDto {
    content: UserDto[];
    last: boolean;
  }
  export interface FindAllAdmissionsResponse {
    users: Model.User[];
    last: boolean;
  }

  // findByState
  export interface FindByStateResponseDto {
    content: UserDto[];
    last: boolean;
  }
  export interface FindByStateResponse {
    users: Model.User[];
    last: boolean;
  }

  // ---

  export interface SignInRequestDto {
    email: string;
    password: string;
    auto?: boolean;
  }

  export interface IsDuplicatedEmailResponseDto {
    result: boolean;
  }

  export interface CreateDto {
    email: string;
    password: string;
    name: string;
    admissionYear: number;
    // TODO: 필요 없는 파라미터
    // profileImage?: string | null;
    studentId: string;
  }

  export interface AdmissionCreateRequestDto {
    email: string;
    attachImage: File | null;
    description: string;
  }

  export interface UpdateDto {
    admissionYear: number;
    email: string;
    name: string;
    profileImage: string | null;
    studentId: string;
  }

  export interface PasswordUpdateRequestDto {
    originPassword: string;
    updatedPassword: string;
  }

  // ==

  export interface FindPostsResponse {
    posts: Model.HistoryPost[];
    last: boolean;
  }

  export interface FindPostsResponseDto {
    post: {
      content: HistoryData.Post[];
      last: boolean;
    };
  }

  export interface FindCommentsResponse {
    comments: Model.HistoryComment[];
    last: boolean;
  }

  export interface FindCommentsResponseDto {
    comment: {
      content: HistoryData.Comment[];
      last: boolean;
    };
  }
}
