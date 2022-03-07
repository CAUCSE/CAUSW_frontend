import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class AdmissionPageUiStore {
  isLoading = false;
  isDisabled = true;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.isLoading = false;
    this.isDisabled = true;
  }

  setSubmitDisabled(flag: boolean): void {
    this.isDisabled = flag;
  }

  *createAdmission(body: User.AdmissionCreateRequestDto): Generator {
    this.isLoading = true;
    this.isDisabled = true;

    try {
      const data = new FormData();
      if (body.email) data.set('email', body.email);
      if (body.attachImage) data.set('attachImage', body.attachImage);
      if (body.description) {
        data.set('description', body.description.replace(/(\r\n|\n|\r)/g, '\n'));
        console.debug(body.description.replace(/(\r\n|\n|\r)/g, '\n').length);
      }

      yield Repo.createAdmission(data);

      return { success: true };
    } catch (err) {
      return err;
    } finally {
      this.reset();
    }
  }
}

export const PageUiStoreImpl = new AdmissionPageUiStore();
