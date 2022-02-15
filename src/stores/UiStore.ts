import { makeAutoObservable, runInAction } from 'mobx';
import React from 'react';

import { HeaderUiStore } from '@/components/common/header';

enum DISPLAY {
  MOBILE = 480,
  TABLET = 768,
  DESKTOP = 1024,
}

export class UiStore {
  rootStore: Store.Root;
  header = new HeaderUiStore();

  displayType: DISPLAY = DISPLAY.MOBILE;
  mainRef?: React.MutableRefObject<HTMLDivElement | null>;

  constructor(rootStore: Store.Root) {
    makeAutoObservable(
      this,
      {
        rootStore: false,
        header: false,
      },
      { autoBind: true },
    );

    this.rootStore = rootStore;
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

  setMainRef(ref: React.MutableRefObject<HTMLDivElement | null>): void {
    this.mainRef = ref;
  }
}
