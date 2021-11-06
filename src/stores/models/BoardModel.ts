import { BoardDto } from '../repositories/BoardRepo';

export class BoardModel {
  id: string;
  name: string;
  category: string;

  constructor(props: BoardDto) {
    this.id = props.id;
    this.name = props.name;
    this.category = props.category;
  }
}
