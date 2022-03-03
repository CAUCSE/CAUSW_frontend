import { format } from 'date-fns';

export class CircleBoardModel {
  board: {
    id: string;
    name: string;
  } = {
    id: '',
    name: '',
  };

  post?: {
    id: string;
    title: string;
    formatedCreatedAt: string;
    writerName: string;
    numComment: number;
  };

  constructor(props: Circle.Board) {
    this.board = {
      id: props.id,
      name: props.name,
    };

    if (props.postId && props.postCreatedAt) {
      const date = new Date(props.postCreatedAt);

      this.post = {
        id: props.postId,
        title: props.postTitle ?? '',
        formatedCreatedAt: format(date, 'yyyy.MM.dd HH:mm'),
        writerName: `${props.postWriterName} (${props.postWriterStudentId?.slice(2, 4)})`,
        numComment: props.postNumComment ?? 0,
      };
    }
  }
}
