const UserRoleCodes = {
  ADMIN: '관리자',
  PRESIDENT: '학생회장',
  COUNCIL: '학생회',
  LEADER_1: '학년대표',
  LEADER_2: '학년대표',
  LEADER_3: '학년대표',
  LEADER_4: '학년대표',
  LEADER_CIRCLE: '소모임장',
  LEADER_ALUMNI: '동문회장',
  COMMON: '학생',
  PROFESSOR: '교수',
};

export type UserRole = keyof typeof UserRoleCodes;

export class UserModel {
  email: string;
  name: string;
  admissionYear: number;
  role: UserRole; // TODO: ENUM으로 변경
  profileImage?: string;
  studentId?: string;

  constructor(props: UserResponseDto) {
    this.email = props.email;
    this.name = props.name;
    this.admissionYear = props.admissionYear;
    this.role = props.role;
    this.profileImage = props.profileImage ?? '/images/default_profile.png';
    this.studentId = props.studentId;
  }

  get roleTxt(): string {
    return UserRoleCodes[this.role];
  }

  get nameWithAdmission(): string {
    return `${this.name} (${this.admissionYear % 100})`;
  }

  get isStudent(): boolean {
    return this.role === 'COMMON';
  }

  get isProfessor(): boolean {
    return this.role === 'PROFESSOR';
  }

  get isAdmin(): boolean {
    return this.role === 'ADMIN';
  }

  get isPresident(): boolean {
    return this.role === 'PRESIDENT';
  }

  get isCircleLeader(): boolean {
    return this.role === 'LEADER_CIRCLE';
  }

  get isCouncil(): boolean {
    return this.role === 'COUNCIL';
  }

  get isStudentLeader(): boolean {
    return this.role === 'LEADER_1' || this.role === 'LEADER_2' || this.role === 'LEADER_3' || this.role === 'LEADER_4';
  }

  get isAlumniLeader(): boolean {
    return this.role === 'LEADER_ALUMNI';
  }
}

interface UserResponseDto {
  id: string;
  email: string;
  name: string;
  studentId: string;
  admissionYear: number;
  role: UserRole;
  profileImage?: string;
  state: string;
}
