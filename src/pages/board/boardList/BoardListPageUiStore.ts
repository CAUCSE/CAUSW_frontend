import { makeAutoObservable } from 'mobx';

import { BoardRepoImpl as Repo } from '@/stores/repositories/BoardRepo';

export class BoardListPageUiStore {
  boards: Map<string, Model.Board[]> = new Map();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // 생성한 게시판의 카테고리가 이미 있으면 그 카테고리 안에 넣고, 없으면 새로 생성
  *fetchBoards(): Generator {
    const boards = (yield Repo.fetch()) as Model.Board[];
    this.boards = new Map();

    boards.forEach((board: Model.Board) => {
      const arr = this.boards.get(board.category);
      if (arr) arr.push(board);
      else this.boards.set(board.category, [board]);
    });
  }

  // TODO: 게시판 관리 화면 구현 시 추가 검증 필요
  /* *create(body: Board.CreateRequestDto): Generator {
    const board = (yield Repo.create(body)) as Model.Board;
    const arr = this.boards.get(board.category);
    if (arr) arr.push(board);
    else this.boards.set(board.category, [board]);
  } */

  // TODO: 게시판 관리 화면 구현 시 추가 검증 필요
  *edit(boardId: string, data: Board.UpdateRequestDto): Generator {
    yield Repo.update(boardId, data);
  }

  // TODO: 게시판 관리 화면 구현 시 추가 검증 필요
  *deleteBoard(boardId: string): Generator {
    yield Repo.delete(boardId);
  }
}

export const PageUiStoreImpl = new BoardListPageUiStore();
