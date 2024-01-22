import axios, { AxiosResponse } from 'axios';

import { LockerLocationModel, LockerModel } from '../models';

import { API } from '@/configs/axios';

class LockerRepo {
  URI = '/api/v1/lockers';

  findAllLocation = async (): Promise<Locker.FindAllLocationResponse> => {
    const {
      data: { lockerLocations, myLocker },
    } =
      process.env.NODE_ENV !== 'development'
        ? ((await API.get(
            `${this.URI}/locations`,
          )) as AxiosResponse<Locker.FindAllLocationResponseDto>) //orgin
        : await axios.get<Locker.FindAllLocationResponseDto>(`${this.URI}/locations`); //mocking

    return {
      lockers: lockerLocations.map(props => new LockerModel(props)),
      myLocker: myLocker ? new LockerLocationModel(myLocker) : undefined,
    };
  };

  findByLocation = async (locationId: string): Promise<Locker.FindByLocationResponse> => {
    const {
      data: { locationName, lockerList },
    } =
      process.env.NODE_ENV !== 'development'
        ? ((await API.get(
            `${this.URI}/locations/${locationId}`,
          )) as AxiosResponse<Locker.FindByLocationResponseDto>) //orgin
        : await axios.get<Locker.FindByLocationResponseDto>(`${this.URI}/locations/${locationId}`); //mocking

    return {
      locationName,
      lockerList: lockerList.map(props => new LockerLocationModel(props)),
    };
  };

  register = async (lockerId: string): Promise<unknown> => {
    //orgin
    //return await API.put(`${this.URI}/${lockerId}`, { action: 'register' });

    //mocking
    return axios.put(`${this.URI}/${lockerId}`, { action: 'register' });
  };

  return = async (lockerId: string): Promise<unknown> => {
    //orgin
    //return await API.put(`${this.URI}/${lockerId}`, { action: 'return' });

    //mocking
    return axios.put(`${this.URI}/${lockerId}`, { action: 'return' });
  };

  extend = async (lockerId: string): Promise<unknown> => {
    //orgin
    //return await API.put(`${this.URI}/${lockerId}`, { action: 'extend' });

    //mocking
    return axios.put(`${this.URI}/${lockerId}`, { action: 'extend' });
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
          expireAt: '',
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
              expireAt: '',
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
