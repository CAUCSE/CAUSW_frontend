import { AxiosResponse } from 'axios';

import { CircleModel } from '../models/CircleModel';

import { API } from 'configs/axios';

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

  join = async (circleId: string): Promise<Circle.JoinStatus> => {
    try {
      await API.get(`${this.URI}/${circleId}/applications`);

      return 'DONE';
    } catch ({
      response: {
        data: { errorCode },
      },
    }) {
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
}

export const CircleRepoImpl = new CircleRepo();
