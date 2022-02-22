import { makeAutoObservable, runInAction } from 'mobx';

import { ToastUi } from '@/components/Toast/ToastUi';

enum DISPLAY {
  MOBILE = 480,
  TABLET = 768,
  DESKTOP = 1024,
}

export class UiStore {
  rootStore: Store.Root;
  toast: ToastUi;

  displayType: DISPLAY = DISPLAY.MOBILE;

  constructor(rootStore: Store.Root) {
    makeAutoObservable(
      this,
      {
        rootStore: false,
        toast: false,
      },
      { autoBind: true },
    );

    this.rootStore = rootStore;
    this.toast = new ToastUi();
    this.initWindowMatchMedia();
  }

  private initWindowMatchMedia() {
    this.setDisplayType();

    window
      .matchMedia(`screen and (max-width: ${DISPLAY.MOBILE}px)`)
      .addEventListener('change', this.setDisplayType.bind(this));
    window
      .matchMedia(`screen and (max-width: ${DISPLAY.TABLET}px)`)
      .addEventListener('change', this.setDisplayType.bind(this));
    window
      .matchMedia(`screen and (min-width: ${DISPLAY.TABLET}px)`)
      .addEventListener('change', this.setDisplayType.bind(this));
  }

  private setDisplayType(): void {
    const { innerWidth } = window;

    runInAction(() => {
      if (innerWidth <= DISPLAY.MOBILE) this.displayType = DISPLAY.MOBILE;
      else if (innerWidth <= DISPLAY.TABLET) this.displayType = DISPLAY.TABLET;
      else this.displayType = DISPLAY.DESKTOP;
    });
  }

  alert({
    message,
    duration = 1000,
    onClose,
  }: {
    message: string;
    duration?: number;
    onClose?: () => unknown;
  }): void {
    this.toast.duration = duration;
    this.toast.messages.push({ key: new Date().getTime(), message, onClose });
  }
}
