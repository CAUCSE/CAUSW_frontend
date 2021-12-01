import { action, makeObservable, observable } from 'mobx';
import { CommentUiStore } from './ui/CommentUi';
import { HeaderUiStore } from '@/components/common/header';
import React from 'react';

enum DISPLAY {
  MOBILE = 480,
  TABLET = 768,
  DESKTOP = 1024,
}

export class UiStore {
  rootStore: Store.Root;
  displayType: DISPLAY = DISPLAY.MOBILE;
  header = new HeaderUiStore();
  CustomNav?: React.FC;
  commentUi = new CommentUiStore();

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      displayType: observable,
      CustomNav: observable,
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
