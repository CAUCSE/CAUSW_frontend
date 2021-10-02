declare namespace Board {
  export interface List {
    key: string;
    name: string;
    notification: boolean;
  }

  export interface Board {
    category: string;
    list: List[];
  }

  export interface RootObject {
    board: Board[];
  }
}
