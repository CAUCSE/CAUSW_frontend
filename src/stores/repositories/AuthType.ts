export enum UserState {
  WAIT = 'wait',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
}

export interface DtoUserSignInRequest {
  email: string;
  password: string;
}
