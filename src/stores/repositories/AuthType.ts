export enum UserState {
  WAIT = 'wait',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
}

export interface DtoUserCreate {
  admissionYear: number;
  email: string;
  name: string;
  password: string;
  studentId: string;
}

export interface DtoUserSignInRequest {
  email: string;
  password: string;
}
