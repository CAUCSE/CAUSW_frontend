export class AdmissionUserModel {
  id: string;
  email: string;
  name: string;
  admissionYear: number;
  attachImage: string | null;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: User.AdmissionUserDto) {
    this.id = props.id;
    this.email = props.userEmail;
    this.name = props.userName;
    this.admissionYear = props.admissionYear;
    this.attachImage = props.attachImage ?? '';
    this.description = props.description;
    this.createdAt = new Date(props.createdAt);
    this.updatedAt = new Date(props.updatedAt);
  }

  get nameWithAdmission(): string {
    return `${this.name} (${this.admissionYear % 100})`;
  }
}
