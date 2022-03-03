import { action, computed, flow, makeObservable, observable } from 'mobx';

import { ModalUi } from '@/stores';
import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class CircleJoinModalUi extends ModalUi<Model.Circle> {
  status: Circle.JoinStatus = 'NONE';

  constructor() {
    super();
    makeObservable(this, {
      status: observable,

      reset: action.bound,
      join: flow.bound,

      isDone: computed,
      isAwait: computed,
      isMember: computed,
      isBlock: computed,
    });
  }

  reset(): void {
    this.status = 'NONE';
  }

  *join(circle: Model.Circle): Generator {
    try {
      yield Repo.join(circle.id);
      this.status = 'DONE';

      return { success: true } as StoreAPI;
    } catch (error) {
      // NOTE: 다루지 않은 에러들
      // 1. invalid user (JWT) & circle id : 400 (4000)
      // 5. 삭제된 소모임인 경우 : 400 (4004)
      // 7. user(JWT)의 학번이 없는 경우 : 400 (4009)
      const errorCode = (error as { errorCode?: number })?.errorCode;

      // 이미 가입된 경우
      if (errorCode === 4001) this.status = 'MEMBER';
      // 대기 상태인 경우
      else if (errorCode === 4008) this.status = 'AWAIT';
      // 이전에 Block된 경우
      else if (errorCode === 4102) this.status = 'BLOCK';
      // LEAVE, REJECT이지만 상태가 업데이트 된지 1일이 지나지 않았을 경우
      else if (errorCode === 4010) this.status = 'BLOCK';

      return error;
    }
  }

  get isDone(): boolean {
    return this.status === 'DONE';
  }

  get isAwait(): boolean {
    return this.status === 'AWAIT';
  }

  get isMember(): boolean {
    return this.status === 'MEMBER';
  }

  get isBlock(): boolean {
    return this.status === 'BLOCK';
  }
}
