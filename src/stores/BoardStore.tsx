import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { computed, flow, makeObservable, observable } from 'mobx';
import { useRootStore } from './RootStore';
import { BoardRepoImpl as Repo } from './repositories/BoardRepo';
import type { BoardResponseDto } from './repositories/BoardType';

export class BoardStore {
  rootStore: Store.Root;
  boardId = '';
  boards: Map<string, BoardResponseDto[]> = new Map();
  boardNameMap: Map<string, string> = new Map();

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      boardId: observable,
      boards: observable,
      boardNameMap: observable,
      fetch: flow.bound,

      boardName: computed,
    });

    this.rootStore = rootStore;
  }

  *fetch(): Generator {
    const boards = (yield Repo.fetch()) as BoardResponseDto[];

    this.boards = new Map();
    this.boardNameMap = new Map();

    boards.forEach(board => {
      const { category, id, name } = board;
      const arr = this.boards.get(category);

      if (arr) arr.push(board);
      else this.boards.set(category, [board]);

      this.boardNameMap.set(id, name);
    });
  }

  get boardName(): string {
    return this.boardNameMap.get(this.boardId) ?? '';
  }
}

export const BoardProvider: React.FC = React.memo(({ children }) => {
  const { boardId } = useParams<{ boardId: string }>();
  const { board } = useRootStore();

  useEffect(() => {
    if (boardId) board.boardId = boardId;
  }, [boardId]);

  return <>{children}</>;
});
