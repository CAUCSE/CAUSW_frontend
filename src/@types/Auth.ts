export interface ReqSignIn {
  email: string;
  password: string;
}

export enum UserState {
  WAIT = 'wait',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
}
