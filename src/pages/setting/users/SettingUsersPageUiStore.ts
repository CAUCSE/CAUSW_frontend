import { makeAutoObservable } from 'mobx';

import { AdmissionUserTabUi } from './components/AdmissionUserTab/AdmissionUserTabUi';

export class SettingUsersPageUiStore {
  admission = new AdmissionUserTabUi();

  constructor() {
    makeAutoObservable(
      this,
      {
        admission: false,
      },
      { autoBind: true },
    );
  }
}

export const PageUiStoreImpl = new SettingUsersPageUiStore();
