export class PostModel implements Post.Post {
  id?: number;
  title: string;
  content: string;
  commentList: Model.Comment[];
  writer: string;
  createdat: string;
  updatedat: string;

  constructor(props: Post.Post) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.commentList = [];
    this.writer = props.writer;
    this.createdat = props.createdat;
    this.updatedat = props.createdat;
  }

  get commentNum(): number {
    return this.commentList.length;
  }
}
