import { makeAutoObservable } from 'mobx';

import { AuthRepoImpl as Repo } from '@/stores/repositories/AuthRepo';

export class AdmissionPageUiStore {
  email?: string;
  submitDisabled = false;
  file: File | null = null;
  blobUrl?: string;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.email = undefined;
    this.submitDisabled = false;
    this.file = null;
    if (this.blobUrl) URL.revokeObjectURL(this.blobUrl);
    this.blobUrl = undefined;
  }

  setFile(file?: File | null): void {
    if (file) {
      if (this.blobUrl) URL.revokeObjectURL(this.blobUrl);

      this.file = file;
      this.blobUrl = URL.createObjectURL(file);
    }
  }

  setEmail(email?: string): void {
    this.email = email;
  }

  *createAdmission(body: Pick<User.AdmissionCreateRequestDto, 'description'>): Generator {
    this.submitDisabled = true;

    if (this.file && this.email) {
      const data = new FormData();
      data.set('email', this.email);
      data.set('description', body.description);
      data.set('attachImage', this.file);

      return yield Repo.createAdmission(data);
    }

    this.submitDisabled = false;
  }
}

export const PageUiStoreImpl = new AdmissionPageUiStore();
