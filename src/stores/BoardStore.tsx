import React, { useEffect } from 'react';
import { computed, flow, makeObservable, observable } from 'mobx';
import { useRootStore } from './RootStore';
import { BoardRepoImpl as Repo } from './repositories/BoardRepo';
import type { BoardResponseDto } from './repositories/BoardType';

export class BoardStore {
  rootStore: Store.Root;
  boardId = '';
  boards: Map<string, BoardResponseDto[]> = new Map();
  boardMap: Map<string, BoardResponseDto> = new Map();

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      boardId: observable,
      boards: observable,
      boardMap: observable,
      fetch: flow.bound,

      boardName: computed,
    });

    this.rootStore = rootStore;
  }

  *fetch(fire = false): Generator {
    if (!fire && this.boards.size > 0) return;

    const boards = (yield Repo.fetch()) as BoardResponseDto[];

    this.boards = new Map();
    this.boardMap = new Map();

    boards.forEach(board => {
      const { category, id } = board;
      const arr = this.boards.get(category);

      if (arr) arr.push(board);
      else this.boards.set(category, [board]);

      this.boardMap.set(id, board);
    });
  }

  get boardName(): string {
    return this.boardMap.get(this.boardId)?.name ?? '';
  }

  get writable(): boolean {
    return this.boardMap.get(this.boardId)?.writable ?? false;
  }
}

export const BoardProvider: React.FC = React.memo(({ children }) => {
  const { board } = useRootStore();

  useEffect(() => {
    board.fetch(true);
  }, []);

  return <>{children}</>;
});
