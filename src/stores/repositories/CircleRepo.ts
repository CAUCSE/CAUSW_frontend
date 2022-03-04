import { AxiosResponse } from 'axios';

import { CircleBoardModel } from '../models/CircleBoardModel';
import { CircleModel } from '../models/CircleModel';

import { API } from 'configs/axios';

class CircleRepo {
  URI = '/api/v1/circles';

  create = async (body: Circle.CreateRequestDto): Promise<unknown> => {
    return (await API.post(this.URI, body)) as AxiosResponse<unknown>;
  };

  update = async (circleId: string, body: Circle.UpdateRequestDto): Promise<unknown> => {
    return (await API.put(`${this.URI}/${circleId}`, body)) as AxiosResponse<unknown>;
  };

  //

  fetch = async (): Promise<CircleModel[]> => {
    const { data } = (await API.get(this.URI)) as AxiosResponse<Circle.FindByIdDto[]>;

    return data.map(dto => new CircleModel(dto));
  };

  fetchById = async (circleId: string): Promise<CircleModel> => {
    const { data } = (await API.get(
      `${this.URI}/${circleId}`,
    )) as AxiosResponse<Circle.FindByIdDto>;

    return new CircleModel(data);
  };

  join = async (circleId: string): Promise<Circle.JoinStatus> => {
    return await API.get(`${this.URI}/${circleId}/applications`);
  };

  findBoards = async (circleId: string): Promise<Circle.FindBoards> => {
    const { data } = (await API.get(
      `${this.URI}/${circleId}/boards`,
    )) as AxiosResponse<Circle.FindBoardsDto>;

    return {
      circle: new CircleModel(data.circle),
      boards: data.boardList.map(item => new CircleBoardModel(item)),
    };
  };

  leaveUser = async (circleId: string): Promise<unknown> => {
    return await API.put(`${this.URI}/${circleId}/users/leave`);
  };

  delete = async (circleId: string): Promise<unknown> => {
    return await API.delete(`${this.URI}/${circleId}`);
  };
}

export const CircleRepoImpl = new CircleRepo();
