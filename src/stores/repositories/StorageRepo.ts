import { AxiosResponse } from 'axios';

import { API } from 'configs/axios';

export enum IMAGE_TYPE {
  USER_PROFILE = 'USER_PROFILE',
  USER_ADMISSION = 'USER_ADMISSION',
  CIRCLE_PROFILE = 'CIRCLE_PROFILE',
  POST = 'POST',
  ETC = 'ETC',
}

class StorageRepo {
  private URI = '/api/v1/storage';

  upload = async (type: IMAGE_TYPE, file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file);

    const {
      data: { path },
    } = await API.post(`${this.URI}/image/upload?imageLocation=${type}`, formData);

    return path;
  };
}

export const StorageRepoImpl = new StorageRepo();
