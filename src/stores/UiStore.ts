import { action, makeObservable, observable, runInAction } from 'mobx';
import React from 'react';

import { HeaderUiStore } from '@/components/common/header';

enum DISPLAY {
  MOBILE = 480,
  TABLET = 768,
  DESKTOP = 1024,
}

export class UiStore {
  rootStore: Store.Root;

  displayType: DISPLAY = DISPLAY.MOBILE;
  header = new HeaderUiStore();
  CustomNav?: React.FC | null;

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      displayType: observable,
      CustomNav: observable,
      setNav: action.bound,
    });

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

  setNav(nav?: React.FC | null): void {
    this.CustomNav = nav;
  }
}
