import { makeObservable, observable } from 'mobx';

export class CircleModel {
  id: string;
  mainImage: string | null;
  name: string;
  description: string;
  isJoined: boolean;

  constructor(props: Circle.Dto) {
    this.id = props.id;
    this.mainImage = props.mainImage;
    this.name = props.name;
    this.description = props.description;
    this.isJoined = props.isJoined;

    makeObservable(this, {
      isJoined: observable,
    });
  }
}
