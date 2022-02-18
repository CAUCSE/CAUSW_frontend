import { makeAutoObservable, runInAction } from 'mobx';

import { AuthRepoImpl as AuthRepo } from '@/stores/repositories/AuthRepo';
import { IMAGE_TYPE, StorageRepoImpl as StorageRepo } from '@/stores/repositories/StorageRepo';
import { UserRepoImpl as Repo } from '@/stores/repositories/UserRepo';

export interface ImageState {
  file: File | null;
  blobUrl?: string;
}

export class SettingProfilePageUiStore {
  me?: Model.User;
  image: ImageState = {
    file: null,
    blobUrl: undefined,
  };
  studentId = '';
  submitDisabled = true;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *fetch(): Generator {
    this.me = (yield AuthRepo.findCurrentUser()) as Model.User;
    this.studentId = this.me.studentId as string;
  }

  reset(): void {
    this.submitDisabled = true;
  }

  set(key: 'image' | 'studentId'): (value: unknown) => void {
    return (value: unknown) => {
      runInAction(() => {
        if (key === 'studentId') this.studentId = value as string;
        else if (key === 'image') this.image = { ...(value as ImageState) };
        this.submitDisabled = false;
      });
    };
  }

  *update(evt: React.FormEvent): Generator {
    evt.preventDefault();

    if (!this.me) return;
    this.submitDisabled = true;

    const body = {
      ...this.me,
      studentId: this.studentId,
    } as User.UserUpdateDto;

    if (this.image.file) {
      const url = (yield StorageRepo.upload(IMAGE_TYPE.USER_PROFILE, this.image.file)) as string;

      // 로컬 캐시 지우기
      if (this.image.blobUrl) URL.revokeObjectURL(this.image?.blobUrl);
      this.image.blobUrl = url;
      body.profileImage = url;
    }

    Repo.update(body);
    this.me.studentId = body.studentId;
    this.me.profileImage = body.profileImage;
    alert('개인정보가 변경되었습니다.');
  }
}

export const PageUiStoreImpl = new SettingProfilePageUiStore();
