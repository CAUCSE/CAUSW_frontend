export interface ReqSignIn {
  email: string;
  password: string;
}

export interface ReqSignUp {
  email: string;
  name: string;
  password: string;
  studentId: String;
  admissionYear: number;
}

export enum UserState {
  WAIT = 'wait',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
}

export enum Role {
  ADMIN = 'admin',
  PRESIDENT = 'president',
  COUNCIL = 'council',
  LEADER_1 = 'leader_1',
  LEADER_2 = 'leader_2',
  LEADER_3 = 'leader_3',
  LEADER_4 = 'leader_4',
  LEADER_CIRCLE = 'leader_circle',
  LEADER_ALUMNI = 'leader_alumni',
  COMMON = 'common',
  NONE = 'none',
  PROFESSOR = 'professor',
}
