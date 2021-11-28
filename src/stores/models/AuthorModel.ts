export class AuthorModel {
  admissionYear: number;
  name: string;
  profileImage: string;

  constructor(admissionYear: number, name: string, profileImage: string | null) {
    this.admissionYear = admissionYear;
    this.name = name;
    this.profileImage = profileImage ?? '/images/default_profile.png';
  }

  get nameWithAdmission(): string {
    return `${this.name} (${this.admissionYear % 100})`;
  }
}
