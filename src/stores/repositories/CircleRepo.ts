import { AxiosResponse } from 'axios';

import { CircleUserModel } from '../models';
import { CircleBoardModel } from '../models/CircleBoardModel';
import { CircleModel } from '../models/CircleModel';

import { API } from 'configs/axios';

class CircleRepo {
  URI = '/api/v1/circles';

  create = async (body: Circle.CreateRequestDto): Promise<unknown> => {
    return (await API.post(this.URI, body)) as AxiosResponse<unknown>;
  };

  fetchById = async (circleId: string): Promise<CircleModel> => {
    const { data } = (await API.get(
      `${this.URI}/${circleId}`,
    )) as AxiosResponse<Circle.FindByIdDto>;

    return new CircleModel(data);
  };

  update = async (circleId: string, body: Circle.UpdateRequestDto): Promise<unknown> => {
    return (await API.put(`${this.URI}/${circleId}`, body)) as AxiosResponse<unknown>;
  };

  // 동아리 회원 관리
  getUserList = async (
    circleId: string,
    status: Circle.Status,
  ): Promise<Circle.GetUserListResponse> => {
    const { data } = (await API.get(
      `${this.URI}/${circleId}/users?status=${status}`,
    )) as AxiosResponse<Circle.GetUserListResponseDto>;

    return data.map(user => new CircleUserModel(user));
  };

  acceptUser = async (applicationId: string): Promise<unknown> => {
    return (await API.put(
      `${this.URI}/applications/${applicationId}/accept`,
    )) as AxiosResponse<unknown>;
  };

  rejectUser = async (applicationId: string): Promise<unknown> => {
    return (await API.put(
      `${this.URI}/applications/${applicationId}/reject`,
    )) as AxiosResponse<unknown>;
  };

  dropUser = async (circleId: string, userId: string): Promise<unknown> => {
    return (await API.put(
      `${this.URI}/${circleId}/users/${userId}/drop`,
    )) as AxiosResponse<unknown>;
  };

  //

  fetch = async (): Promise<CircleModel[]> => {
    const { data } = (await API.get(this.URI)) as AxiosResponse<Circle.FindByIdDto[]>;

    return data.map(dto => new CircleModel(dto));
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
