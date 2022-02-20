import { makeAutoObservable } from 'mobx';

import { IMAGE_TYPE, StorageRepoImpl as StorageRepo } from '@/stores/repositories/StorageRepo';
import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';
import { RootStoreInstance } from '@/stores/RootStore';

export type FormBody = Pick<User.UpdateDto, 'studentId'>;

export class SettingProfilePageUiStore {
  rootStore: Store.Root;
  submitDisabled = false;
  file: File | null = null;
  blobUrl?: string;

  constructor(rootStore: Store.Root) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.file = null;
    if (this.blobUrl) URL.revokeObjectURL(this.blobUrl);
    this.blobUrl = undefined;
    this.submitDisabled = false;
  }

  setFile(file?: File | null): void {
    if (file) {
      if (this.blobUrl) URL.revokeObjectURL(this.blobUrl);

      this.file = file;
      this.blobUrl = URL.createObjectURL(file);
    }
  }

  *update(formBody: FormBody): Generator {
    if (!this.me) return;

    this.submitDisabled = true;

    try {
      const body = {
        ...this.me,
        ...formBody,
      } as User.UpdateDto;

      if (this.file) {
        body.profileImage = (yield StorageRepo.upload(
          IMAGE_TYPE.USER_PROFILE,
          this.file,
        )) as string;
      }

      yield Repo.update(body);

      if (this.blobUrl) URL.revokeObjectURL(this.blobUrl);
      this.blobUrl = body.profileImage ?? '';
      this.me.studentId = body.studentId;
      this.me.profileImage = body.profileImage;

      return { success: true };
    } catch (error) {
      return error;
    } finally {
      this.submitDisabled = false;
    }
  }

  get me(): Model.User | undefined {
    return this.rootStore.auth.me;
  }
}

export const PageUiStoreImpl = new SettingProfilePageUiStore(RootStoreInstance);
