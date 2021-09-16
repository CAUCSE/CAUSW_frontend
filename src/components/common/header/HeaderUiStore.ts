import { action, computed, makeObservable, observable } from 'mobx';

export class HeaderUiStore {
  visible: boolean;
  ref?: React.RefObject<HTMLElement>;
  title: string;
  backLink?: string;

  constructor() {
    makeObservable(this, {
      visible: observable,
      ref: observable,
      title: observable,
      backLink: observable,
      setRef: action.bound,
      headerHeight: computed,
    });

    this.visible = false;
    this.title = '';
    this.backLink = undefined;
  }

  setRef(ref: React.RefObject<HTMLElement>): void {
    this.ref = ref;
  }

  get headerHeight(): number {
    return this.ref?.current?.clientHeight ?? 0;
  }
}
