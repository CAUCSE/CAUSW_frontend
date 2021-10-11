import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { computed, flow, makeObservable, observable } from 'mobx';
import { useRootStore } from './RootStore';

import { BoardRepoImpl as Repo } from './repositories/BoardRepo';
import { BoardResponseDto } from './repositories/BoardType';

import postJson from '@/assets/post.json';
import { PostModel } from './models/PostModel';

export class BoardStore {
  rootStore: Store.Root;
  post: Model.Post[] = [];

  boardKey?: string;
  postId?: string;

  boards: Map<string, BoardResponseDto[]> = new Map();
  private boardNameMap: Map<string, string> = new Map();

  constructor(rootStore: Store.Root) {
    makeObservable(this, {
      boards: observable,
      boardKey: observable,
      postId: observable,
      post: observable,

      fetchBoard: flow.bound,

      boardName: computed,
    });

    this.rootStore = rootStore;
    this.fetchBoard();
  }

  *fetchBoard(): Generator {
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
