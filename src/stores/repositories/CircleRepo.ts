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

  // 내 동아리 게시판 조회
  findCircleBoards = async (circleId: string): Promise<Circle.FindBoards> => {
    const { data } = await API.get<Circle.FindBoardsDto>(`${this.URI}/${circleId}/boards`);

    return {
      circle: new CircleModel(data.circle),
      boards: data.boardList.map(item => new CircleBoardModel(item)),
    };
  };

  // 동아리 탈퇴
  leaveUser = async (circleId: string) => {
    await API.put(`${this.URI}/${circleId}/users/leave`);
  };

  // 동아리 생성
  create = async (body: Circle.CreateRequestDto) => {
    await API.post(this.URI, body);
  };

  // 동아리 정보 수정
  update = async (circleId: string, body: Circle.UpdateRequestDto): Promise<unknown> => {
    return (await API.put(`${this.URI}/${circleId}`, body)) as AxiosResponse<unknown>;
  };

  // 동아리 삭제
  delete = async (circleId: string): Promise<unknown> => {
    return await API.delete(`${this.URI}/${circleId}`);
  };

  // 동아리 회원 관리
  getUserList = async (
    circleId: string,
    status: Circle.Status,
  ): Promise<Circle.GetUserListResponse> => {
    const { data } = await API.get<Circle.GetUserListResponseDto>(
      `${this.URI}/${circleId}/users?circleMemberStatus=${status}`,
    );

    return data.map(user => new CircleUserModel(user));
  };

  // 동아리 가입 승인
  acceptUser = async (applicationId: string): Promise<unknown> => {
    return (await API.put(
      `${this.URI}/applications/${applicationId}/accept`,
    )) as AxiosResponse<unknown>;
  };

  // 동아리 가입 거절
  rejectUser = async (applicationId: string): Promise<unknown> => {
    return (await API.put(
      `${this.URI}/applications/${applicationId}/reject`,
    )) as AxiosResponse<unknown>;
  };

  // 동아리원 추방
  dropUser = async (circleId: string, userId: string): Promise<unknown> => {
    return (await API.put(
      `${this.URI}/${circleId}/users/${userId}/drop`,
    )) as AxiosResponse<unknown>;
  };
}

export const CircleRepoImpl = new CircleRepo();
