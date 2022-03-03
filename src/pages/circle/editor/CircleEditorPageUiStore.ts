import { makeAutoObservable } from 'mobx';

import {
  SearchUserModalUi,
  WithSearchUserModalUi,
} from '@/components/SearchUserModal/SearchUserModalUi';

export class CircleEditorPageUiStore implements WithSearchUserModalUi {
  submitDisabled = true;
  target?: Model.User;

  searchUserModal = new SearchUserModalUi();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.submitDisabled = true;
    this.target = undefined;
  }

  setTarget(target: Model.User): void {
    this.target = target;
  }

  setSubmitDisabled(flag: boolean): void {
    this.submitDisabled = flag;
  }
}

export const PageUiStoreImpl = new CircleEditorPageUiStore();
