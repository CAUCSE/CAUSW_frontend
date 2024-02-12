import { format } from 'date-fns';
import { makeObservable, observable } from 'mobx';

export class CircleModel {
  id: string;
  mainImage: string | null;
  name: string;
  description: string;
  createdAt: Date;
  leaderName: string;
  numMember: number;
  isJoined: boolean;
  joinedAt: Date | null;

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
    const date = new Date(this.createdAt);

    return format(date, 'yyyy년 MM월 dd일');
  }

  get formatJoinedAt(): string {
    if (this.joinedAt) {
      const date = new Date(this.joinedAt);

      return format(date, 'yyyy년 MM월 dd일');
    } else {
      return '';
    }
  }

  /**
   * <br>로 개행된 내용
   */
  get newLineDescription(): string {
    return this.description.replace(/(?:\r\n|\n\r|\r|\n)/g, '<br/>');
  }
}
