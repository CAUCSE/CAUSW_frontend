import { AxiosResponse } from 'axios';

import { LockerLocationModel, LockerModel } from '../models';

import { API } from '@/configs/axios';

class LockerRepo {
  URI = '/api/v1/lockers';

  findAllLocation = async (): Promise<Locker.FindAllLocationResponse> => {
    const {
      data: { lockerLocations, myLocker },
    } = (await API.get(
      `${this.URI}/locations`,
    )) as AxiosResponse<Locker.FindAllLocationResponseDto>;

    return {
      lockers: lockerLocations.map(props => new LockerModel(props)),
      myLocker: myLocker ? new LockerLocationModel(myLocker) : undefined,
    };
  };

  findByLocation = async (locationId: string): Promise<Model.LockerLocation[]> => {
    const { data } = (await API.get(
      `${this.URI}/locations/${locationId}`,
    )) as AxiosResponse<Locker.FindByLocationResponseDto>;

    return data.map(props => new LockerLocationModel(props));
  };

  register = async (lockerId: string): Promise<unknown> => {
    return await API.put(`${this.URI}/${lockerId}`, { action: 'register' });
  };

  return = async (lockerId: string): Promise<unknown> => {
    return await API.put(`${this.URI}/${lockerId}`, { action: 'return' });
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findByLocation = async (locationId: string): Promise<Model.LockerLocation[]> => {
    return new Promise(resovle => {
      resovle([
        new LockerLocationModel({
          id: 'test',
          lockerNumber: 0,
          lockerLocationName: '0번',
          updatedAt: '',
          isActive: true,
          isMine: true,
        }),
        ...Array.from(
          {
            length: Math.round(Math.random() * 20 + 20),
          },
          (value, index) =>
            new LockerLocationModel({
              id: `test-${index + 1}`,
              lockerNumber: index + 1,
              lockerLocationName: `${index + 1}번`,
              updatedAt: '',
              isActive: Math.random() > 0.5,
              isMine: false,
            }),
        ),
      ]);
    });
  };
}

export const LockerRepoImpl = new LockerRepo();
export const LockerRepoDummy = new LockerDummyRepo();
