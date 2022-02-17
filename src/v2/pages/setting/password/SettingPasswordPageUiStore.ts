import { makeAutoObservable } from 'mobx';

export class SettingPasswordPageUiStore {
  formRef?: React.MutableRefObject<HTMLFormElement | null>;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setFormRef(ref: React.MutableRefObject<HTMLFormElement | null>): void {
    this.formRef = ref;
  }
}

export const PageUiStoreImpl = new SettingPasswordPageUiStore();
