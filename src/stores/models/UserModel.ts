export const UserRoleCodes: {
  [key in User.UserDto['role']]: string;
} = {
  ADMIN: '관리자',
  PRESIDENT: '학생회장',
  VICE_PRESIDENT: '부학생회장',
  COUNCIL: '학생회',
  LEADER_1: '1학년 학년대표',
  LEADER_2: '2학년 학년대표',
  LEADER_3: '3학년 학년대표',
  LEADER_4: '4학년 학년대표',
  LEADER_CIRCLE: '동아리장',
  LEADER_ALUMNI: '동문회장',
  COMMON: '학생',
  PROFESSOR: '교수',
  COUNCIL_N_LEADER_CIRCLE: '학생회 / 동아리장',
  LEADER_1_N_LEADER_CIRCLE: '1학년 학년대표 / 동아리장',
  LEADER_2_N_LEADER_CIRCLE: '2학년 학년대표 / 동아리장',
  LEADER_3_N_LEADER_CIRCLE: '3학년 학년대표 / 동아리장',
  LEADER_4_N_LEADER_CIRCLE: '4학년 학년대표 / 동아리장',
};

export class UserModel {
  id: string;
  email: string;
  name: string;
  admissionYear: number;
  role: User.UserDto['role'];
  profileImage: string | null;
  studentId?: string;
  circleIds?: string[];
  circleNames?: string[];
  state: User.UserDto['state'];

  constructor(props: User.UserDto) {
    this.id = props.id;
    this.email = props.email;
    this.name = props.name;
    this.admissionYear = props.admissionYear;
    this.role = props.role;
    this.profileImage =
      !props.profileImage || props.profileImage === ''
        ? '/images/default_profile.png'
        : props.profileImage;
    this.studentId = props.studentId;
    this.circleIds = props.circleIdIfLeader ?? [];
    this.circleNames = props.circleNameIfLeader ?? [];
    this.state = props.state;
  }

  get roleTxt(): string {
    return UserRoleCodes[this.role];
  }

  get nameWithAdmission(): string {
    return `${this.name} (${this.admissionYear % 100})`;
  }

  get profileImageSrc(): string {
    return !this.profileImage || this.profileImage === ''
      ? '/images/default_profile.png'
      : this.profileImage;
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

  get isPresidents(): boolean {
    return this.role === 'PRESIDENT' || this.role === 'VICE_PRESIDENT';
  }

  get isVicePresidents(): boolean {
    return this.role === 'VICE_PRESIDENT';
  }

  get isCircleLeader(): boolean {
    return (
      this.role === 'LEADER_CIRCLE' ||
      this.role === 'COUNCIL_N_LEADER_CIRCLE' ||
      this.role === 'LEADER_1_N_LEADER_CIRCLE' ||
      this.role === 'LEADER_2_N_LEADER_CIRCLE' ||
      this.role === 'LEADER_3_N_LEADER_CIRCLE' ||
      this.role === 'LEADER_4_N_LEADER_CIRCLE'
    );
  }

  get isCouncil(): boolean {
    return (
      this.role === 'COUNCIL' ||
      this.role === 'VICE_PRESIDENT' ||
      this.role === 'COUNCIL_N_LEADER_CIRCLE'
    );
  }

  get isStudentLeader(): boolean {
    return (
      this.role === 'LEADER_1' ||
      this.role === 'LEADER_2' ||
      this.role === 'LEADER_3' ||
      this.role === 'LEADER_4' ||
      this.role === 'LEADER_1_N_LEADER_CIRCLE' ||
      this.role === 'LEADER_2_N_LEADER_CIRCLE' ||
      this.role === 'LEADER_3_N_LEADER_CIRCLE' ||
      this.role === 'LEADER_4_N_LEADER_CIRCLE'
    );
  }

  get isAlumniLeader(): boolean {
    return this.role === 'LEADER_ALUMNI';
  }
}
