export class AuthorModel {
  id: string;
  profileImg: string;
  name: string;

  constructor({
    writerId,
    writerProfileImage,
    writerName,
  }: {
    writerId: string;
    writerProfileImage: string | null;
    writerName: string;
  }) {
    this.id = writerId;
    this.profileImg = writerProfileImage ?? '/images/default_profile.png';
    this.name = writerName ?? '';
  }
}
