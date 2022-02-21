import { AxiosResponse } from 'axios';

import { LockerModel } from '../models';

import { API } from '@/configs/axios';

class LockerRepo {
  URI = '/api/v1/lockers';

  findAllLocation = async (): Promise<Model.Locker[]> => {
    const { data } = (await API.get(
      `${this.URI}/locations`,
    )) as AxiosResponse<Locker.FindAllLocationResponseDto>;

    return data.map(props => new LockerModel(props));
  };
}

class LockerDummyRepo {
  findAllLocation = async (): Promise<Model.Locker[]> => {
    return new Promise(resovle => {
      resovle([
        new LockerModel({
          id: '1',
          name: '3층 사물함',
          description: '208관 3층 312호 앞',
          enableLockerCount: 80,
          totalLockerCount: 100,
        }),
        new LockerModel({
          id: '2',
          name: '4층 사물함',
          description: '208관 4층 407호 앞',
          enableLockerCount: 160,
          totalLockerCount: 160,
        }),
        new LockerModel({
          id: '3',
          name: '5층 사물함',
          description: '208관 5층 515호 앞',
          enableLockerCount: 80,
          totalLockerCount: 160,
        }),
      ]);
    });
  };
}

export const LockerRepoImpl = new LockerRepo();
export const LockerRepoDummy = new LockerDummyRepo();
