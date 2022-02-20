import { utcToZonedTime, format } from 'date-fns-tz';
import { makeObservable, observable } from 'mobx';

export class CircleModel {
  id: string;
  mainImage: string | null;
  name: string;
  description: string;
  createdAt: string;
  leaderName: string;
  numMember: number;
  isJoined: boolean;
  joinedAt: string | null;

  constructor(props: Circle.FindByIdDto) {
    this.id = props.id;
    this.mainImage = props.mainImage;
    this.name = props.name;
    this.description = props.description;
    this.createdAt = props.createdAt;
    this.leaderName = props.leaderName;
    this.numMember = props.numMember;
    this.isJoined = props.isJoined;
    this.joinedAt = props.joinedAt;

    makeObservable(this, {
      isJoined: observable,
      joinedAt: observable,
    });
  }

  get formatedCreatedAt(): string {
    const zonedDate = utcToZonedTime(this.createdAt, 'Asis/Seoul');

    return format(zonedDate, 'yyyy년 MM월 dd일');
  }

  get formatJoinedAt(): string {
    if (this.joinedAt) {
      const zonedDate = utcToZonedTime(this.joinedAt, 'Asis/Seoul');

      return format(zonedDate, 'yyyy년 MM월 dd일');
    } else {
      return '';
    }
  }
}
