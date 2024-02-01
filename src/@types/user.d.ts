declare namespace User {
  export interface UserDto {
    admissionYear: number;
    circleIdIfLeader: string[] | null;
    circleNameIfLeader: string[] | null;
    email: string;
    id: string;
    name: string;
    profileImage: string;
    role: Role;
    state: 'ACTIVE' | 'INACTIVE';
    studentId: string;
  }

  export type Role =
    | 'ADMIN'
    | 'PRESIDENT'
    | 'VICE_PRESIDENT'
    | 'COUNCIL'
    | 'LEADER_1'
    | 'LEADER_2'
    | 'LEADER_3'
    | 'LEADER_4'
    | 'LEADER_CIRCLE'
    | 'LEADER_ALUMNI'
    | 'COMMON'
    | 'PROFESSOR';

  // findByName
  export type FindByNameResponseDto = UserDto[];
  export type FindByNameResponse = Model.User[];

  // updateRole
  export interface UpdateRoleRequestDto {
    role: UserDto['role'];
    circleId?: string;
  }

  // findAllAdmissions
  export interface AdmissionUserDto {
    admissionYear: number;
    attachImage: string | null;
    createdAt: string;
    description: string;
    id: string;
    updatedAt: string;
    userEmail: string;
    userName: string;
  }
  export interface FindAllAdmissionsResponseDto {
    content: AdmissionUserDto[];
    last: boolean;
  }
  export interface FindAllAdmissionsResponse {
    users: Model.AdmissionUser[];
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

  // findPrivilegedUsers
  export interface FindPrivilegedUsersResponseDto {
    councilUsers: UserDto[];
    leaderGradeUsers: UserDto[];
    leaderCircleUsers: UserDto[];
    leaderAlumni: UserDto | null;
  }

  export interface FindPrivilegedUsersResponse {
    councilUsers: Model.User[];
    leaderGradeUsers: Model.User[];
    leaderCircleUsers: Model.User[];
    leaderAlumni: Model.User | null;
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
    profileImage?: string | null;
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

  export type Role =
    | 'ADMIN'
    | 'PRESIDENT'
    | 'VICE_PRESIDENT'
    | 'COUNCIL'
    | 'LEADER_1'
    | 'LEADER_2'
    | 'LEADER_3'
    | 'LEADER_4'
    | 'LEADER_CIRCLE'
    | 'LEADER_ALUMNI'
    | 'COMMON'
    | 'PROFESSOR';
}
