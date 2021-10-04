import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { computed, makeObservable, observable } from 'mobx';
import { useRootStore } from './RootStore';

import boardJson from '@/assets/board.json';
import postJson from '@/assets/post.json';
import { PostModel } from './models/PostModel';

export class BoardStore {
  rootStore: Store.Root;
  board!: Board.RootObject['board'];
  post: Model.Post[] = [];

  boardKey?: string;
  postId?: string;

  private boardNameMap!: Map<string, string>;

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      board: observable,
      boardKey: observable,
      postId: observable,
      post: observable,

      boardName: computed,
    });

    this.rootStore = rootStore;
    this.fetchBoard();
  }

  private fetchBoard(): void {
    // TODO: 서버 데이터 연동
    this.board = boardJson.board;
    this.boardNameMap = new Map<string, string>();

    this.board.forEach(({ items }) =>
      items.forEach(({ key, name }) => {
        this.boardNameMap.set(key, name);
      }),
    );
  }

  fetchPost(): void {
    // TODO: 서버 데이터 연동
    this.post = postJson.posts.map(item => new PostModel(item));
    console.debug('fetchPost');
  }

  get boardName(): string {
    return this.boardNameMap.get(this.boardKey ?? '') ?? '';
  }
}

export const BoardContainer: React.FC = React.memo(({ children }) => {
  const { boardKey, postId } = useParams<{ boardKey: string; postId: string }>();
  const { board } = useRootStore();

  useEffect(() => {
    if (boardKey) {
      board.boardKey = boardKey;
      board.fetchPost();
    }
    if (postId) {
      board.postId = postId;
    }
  }, []);

  return <>{children}</>;
});
