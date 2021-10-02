import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { computed, makeObservable, observable } from 'mobx';
import boardJson from '@/assets/board.json';
import { useRootStore } from './RootStore';

export class BoardStore {
  rootStore: Store.Root;
  list!: Board.RootObject['board'];
  private postNameMap!: Map<string, string>;

  boardKey?: string;
  postId?: string;

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      boardKey: observable,
      postId: observable,

      boardName: computed,
    });

    this.rootStore = rootStore;
    this.fetchBoard();
  }

  fetchBoard(): void {
    // TODO: 서버 데이터 연동
    this.list = boardJson.board;
    this.postNameMap = new Map<string, string>();

    this.list.forEach(({ items }) =>
      items.forEach(({ key, name }) => {
        this.postNameMap.set(key, name);
      }),
    );
  }

  get boardName(): string {
    return this.postNameMap.get(this.boardKey ?? '') ?? '';
  }
}

export const BoardContainer: React.FC = React.memo(({ children }) => {
  const { boardKey, postId } = useParams<{ boardKey: string; postId: string }>();
  const { board } = useRootStore();

  useEffect(() => {
    if (boardKey) board.boardKey = boardKey;
    if (postId) board.postId = postId;
  }, []);

  return <>{children}</>;
});
