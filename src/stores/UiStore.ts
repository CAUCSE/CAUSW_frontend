import { HeaderUiStore } from 'components/common/header';
import { action, makeObservable, observable } from 'mobx';
import React from 'react';

enum DISPLAY {
  MOBILE = 480,
  TABLET = 768,
  DESKTOP = 1024,
}

export class UiStore {
  rootStore: Store.Root;
  displayType: DISPLAY = DISPLAY.MOBILE;
  header: HeaderUiStore = new HeaderUiStore();
  FooterNavigation?: React.FC;
  localUiStores: Map<string, unknown> = new Map();

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      displayType: observable,
      FooterNavigation: observable,
      localUiStores: observable,

      setDisplayType: action.bound,
    });

    this.rootStore = rootStore;
    this.initWindowMatchMedia();
  }

  private initWindowMatchMedia() {
    this.setDisplayType();

    window.matchMedia(`screen and (max-width: ${DISPLAY.MOBILE}px)`).addEventListener('change', this.setDisplayType);
    window.matchMedia(`screen and (max-width: ${DISPLAY.TABLET}px)`).addEventListener('change', this.setDisplayType);
    window.matchMedia(`screen and (min-width: ${DISPLAY.TABLET}px)`).addEventListener('change', this.setDisplayType);
  }

  setDisplayType(): void {
    const { innerWidth } = window;

    if (innerWidth <= DISPLAY.MOBILE) this.displayType = DISPLAY.MOBILE;
    else if (innerWidth <= DISPLAY.TABLET) this.displayType = DISPLAY.TABLET;
    else this.displayType = DISPLAY.DESKTOP;
  }
}
