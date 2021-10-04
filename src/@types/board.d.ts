declare namespace Board {
  export interface Item {
    key: string;
    name: string;
    notification: boolean;
  }

  export interface Board {
    category: string;
    items: Item[];
  }

  export interface RootObject {
    board: Board[];
  }
}

declare namespace Post {
  export interface CommentList {
    id?: number;
  }

  export interface Post {
    id?: number;
    title: string;
    content: string;
    commentList: any[];
    writer: string;
    createdat: string;
    updatedat: string;
  }

  export interface RootObject {
    posts: Post[];
  }
}
