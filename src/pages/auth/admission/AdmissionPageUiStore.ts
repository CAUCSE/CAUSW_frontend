import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class AdmissionPageUiStore {
  submitDisabled = true;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.submitDisabled = false;
  }

  setSubmitDisabled(flag: boolean): void {
    this.submitDisabled = flag;
  }

  *createAdmission(body: User.AdmissionCreateRequestDto): Generator {
    try {
      this.submitDisabled = true;

      const data = new FormData();
      if (body.email) data.set('email', body.email);
      if (body.attachImage) data.set('attachImage', body.attachImage);
      if (body.description) data.set('description', body.description);

      yield Repo.createAdmission(data);

      return { success: true };
    } catch (err) {
      return err;
    } finally {
      this.submitDisabled = false;
    }
  }
}

export const PageUiStoreImpl = new AdmissionPageUiStore();
