import { HeaderUiStore } from 'components/common/header';

export class UiStore {
  rootStore: Store.Root;
  header: HeaderUiStore;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    this.header = new HeaderUiStore();
  }
}
