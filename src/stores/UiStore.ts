export class UiStore {
  rootStore: Store.Root;
  // messageUi = new messageUi(); // 메세지 팝업 ui Store

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
  }
}
