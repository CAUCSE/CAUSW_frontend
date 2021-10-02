import boardJson from '@/assets/board.json';

export class BoardStore {
  rootStore: Store.Root;
  list!: Board.RootObject['board'];
  postNameMap!: Map<string, string>;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    this.fetchBoard();
  }

  fetchBoard(): void {
    // TODO: 서버 데이터 연동
    this.list = boardJson.board;
    this.postNameMap = new Map<string, string>();

    this.list.forEach(({ items }) =>
      items.forEach(({ key, name }) => {
        this.postNameMap.set(key, name);
      }),
    );
  }

  getPostName(key = ''): string {
    return this.postNameMap.get(key) ?? '';
  }
}
