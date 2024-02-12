import { makeAutoObservable } from 'mobx';

import { CircleLeaveModalUi, CircleInfoModalUi } from './components';

import { CircleRepoImpl as Repo } from '@/stores/repositories/CircleRepo';

export class CircleMainPageUiStore {
  circle?: Model.Circle;
  boards: Model.CircleBoard[] = [];

  // 모달
  infoModal: CircleInfoModalUi = new CircleInfoModalUi();
  leaveModal: CircleLeaveModalUi = new CircleLeaveModalUi();

  constructor() {
    makeAutoObservable(
      this,
      {
        infoModal: false,
        leaveModal: false,
      },
      { autoBind: true },
    );
  }

  reset(): void {
    this.circle = undefined;
    this.boards = [];
  }

  *fetch(circleId: string): Generator {
    const { circle, boards } = (yield Repo.findCircleBoards(circleId)) as Circle.FindBoards;

    this.circle = circle;
    this.boards = boards;
  }
}

export const PageUiStoreImpl = new CircleMainPageUiStore();
