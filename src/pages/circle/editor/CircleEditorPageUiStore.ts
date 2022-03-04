import { makeAutoObservable } from 'mobx';

import { FormBody } from './SubmitButton';

import {
  SearchUserModalUi,
  WithSearchUserModalUi,
} from '@/components/SearchUserModal/SearchUserModalUi';
import {
  CircleRepoImpl as Repo,
  StorageRepoImpl as StorageRepo,
  IMAGE_TYPE,
} from '@/stores/repositories';

export class CircleEditorPageUiStore implements WithSearchUserModalUi {
  submitDisabled = true;
  target?: Model.User;
  circle?: Model.Circle;

  searchUserModal = new SearchUserModalUi();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.submitDisabled = true;
    this.target = undefined;
    this.circle = undefined;
  }

  setTarget(target: Model.User): void {
    this.target = target;
  }

  setSubmitDisabled(flag: boolean): void {
    this.submitDisabled = flag;
  }

  *fetch(circleId: string): Generator {
    this.circle = (yield Repo.fetchById(circleId)) as Model.Circle;
  }

  private async uploadImage(file: File): Promise<string> {
    return await StorageRepo.upload(IMAGE_TYPE.CIRCLE_PROFILE, file);
  }

  *create(form: FormBody): Generator {
    try {
      const body = {
        name: form.name,
        description: form.description,
        leaderId: form.leaderId,
      } as Circle.CreateRequestDto;

      if (form.mainImage && form.mainImage.length)
        body.mainImage = (yield this.uploadImage(form.mainImage[0])) as string;

      yield Repo.create(body);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }

  *update(circleId: string, form: FormBody): Generator {
    try {
      const body = {
        name: form.name,
        description: form.description,
      } as Circle.CreateRequestDto;

      if ('string' === typeof form.mainImage) body.mainImage = form.mainImage;
      else if (form.mainImage instanceof FileList && form.mainImage.length)
        body.mainImage = (yield this.uploadImage(form.mainImage[0])) as string;

      yield Repo.update(circleId, body);
      return { success: true } as StoreAPI;
    } catch (error) {
      return error;
    }
  }
}

export const PageUiStoreImpl = new CircleEditorPageUiStore();
