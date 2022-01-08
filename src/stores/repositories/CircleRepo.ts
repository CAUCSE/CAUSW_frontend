import { AxiosResponse } from 'axios';
import { API } from 'configs/axios';
import { CircleModel } from '../models/CircleModel';

class CircleRepo {
  URI = '/api/v1/circles';

  fetch = async (): Promise<CircleModel[]> => {
    const { data } = (await API.get(this.URI)) as AxiosResponse<Circle.Dto[]>;

    return data.map(dto => new CircleModel(dto));
  };

  fetchById = async (circleId: string): Promise<CircleModel> => {
    const { data } = (await API.get(`${this.URI}/${circleId}`)) as AxiosResponse<Circle.Dto>;

    return new CircleModel(data);
  };
}

export const CircleRepoImpl = new CircleRepo();
