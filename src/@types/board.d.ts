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
