import { makeAutoObservable } from 'mobx';

export class SettingPasswordPageUiStore {
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
  checkSignIn = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.checkSignIn = false;
  }

  setFormRef(ref: React.MutableRefObject<HTMLFormElement | null>): void {
    this.formRef = ref;
  }
}

export const PageUiStoreImpl = new SettingPasswordPageUiStore();
