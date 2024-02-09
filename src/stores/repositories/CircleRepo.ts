import axios, { AxiosResponse } from 'axios';

import { CircleUserModel } from '../models';
import { CircleBoardModel } from '../models/CircleBoardModel';
import { CircleModel } from '../models/CircleModel';

import { API } from '@/configs/axios';

class CircleRepo {
  URI = '/api/v1/circles';

  // 동아리 전체 조회
  fetch = async (): Promise<CircleModel[]> => {
    const { data } = await API.get<Circle.FindByIdDto[]>(this.URI);
    return data.map(dto => new CircleModel(dto));
  };

  // 동아리 상세보기
  fetchById = async (circleId: string): Promise<CircleModel> => {
    const { data } = await API.get<Circle.FindByIdDto>(`${this.URI}/${circleId}`);
    return new CircleModel(data);
  };

  // 동아리 지원
  join = async (circleId: string): Promise<Circle.CircleUser> => {
    return await API.get(`${this.URI}/${circleId}/applications`);
  };

  create = async (body: Circle.CreateRequestDto): Promise<unknown> => {
    return (await API.post(this.URI, body)) as AxiosResponse<unknown>;
  };

  update = async (circleId: string, body: Circle.UpdateRequestDto): Promise<unknown> => {
    return (await API.put(`${this.URI}/${circleId}`, body)) as AxiosResponse<unknown>;
  };

  // 동아리 회원 관리
  getUserList = async (
    circleId: string,
    status: Circle.Status,
  ): Promise<Circle.GetUserListResponse> => {
    /* origin
    const { data } = (await API.get(
      `${this.URI}/${circleId}/users?status=${status}`,
    )) as AxiosResponse<Circle.GetUserListResponseDto>; */

    //mocking
    const { data } = await axios.get<Circle.GetUserListResponseDto>(
      `${this.URI}/${circleId}/users?status=${status}`,
    );

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

  findBoards = async (circleId: string): Promise<Circle.FindBoards> => {
    // const { data } = (await API.get(
    //   `${this.URI}/${circleId}/boards`,
    // )) as AxiosResponse<Circle.FindBoardsDto>;

    const { data } = await axios.get<Circle.FindBoardsDto>(`${this.URI}/${circleId}/boards`); // MSW

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
