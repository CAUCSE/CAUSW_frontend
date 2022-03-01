import { AxiosResponse } from 'axios';

import { CircleBoardModel } from '../models/CircleBoardModel';
import { CircleModel } from '../models/CircleModel';

import { API } from 'configs/axios';

class CircleRepo {
  URI = '/api/v1/circles';

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
    try {
      await API.get(`${this.URI}/${circleId}/applications`);

      return 'DONE';
    } catch ({ errorCode }) {
      // NOTE: 다루지 않은 에러들
      // 1. invalid user (JWT) & circle id : 400 (4000)
      // 5. 삭제된 소모임인 경우 : 400 (4004)
      // 7. user(JWT)의 학번이 없는 경우 : 400 (4009)

      // 이미 가입된 경우
      if (errorCode === 4001) return 'MEMBER';
      // 대기 상태인 경우
      else if (errorCode === 4008) return 'AWAIT';
      // 이전에 Block된 경우
      else if (errorCode === 4102) return 'BLOCK';
      // LEAVE, REJECT이지만 상태가 업데이트 된지 1일이 지나지 않았을 경우
      else if (errorCode === 4010) return 'BLOCK';
    }

    return 'NONE';
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
