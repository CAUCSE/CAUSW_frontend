import { API } from '@/configs/axios';

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
    formData.append('file', file);

    const {
      data: { downloadFilePath },
    } = await API.post(`${this.URI}/?type=${type}`, formData);

    return downloadFilePath;
  };
}

export const StorageRepoImpl = new StorageRepo();
