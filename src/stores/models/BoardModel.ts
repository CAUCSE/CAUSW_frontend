import { generatePath } from 'react-router';

import { PAGE_URL } from '@/configs/path';

export interface BoardModelProps {
  id: string;
  category: string;
  name: string;
}

export class BoardModel {
  id: string;
  category: string;
  name: string;
  description: string;
  isDeleted: boolean;
  writable: boolean;
  createRoleList: User.Role[];
  //#83 추가
  circleId: string;
  circleName: string;

  constructor(board: Board.ResponseDto) {
    this.id = board.id;
    this.name = board.name;
    this.category = board.category;
    this.description = board.description;
    this.isDeleted = board.isDeleted;
    this.writable = board.writable;
    this.createRoleList = board.createRoleList;
    this.circleId = board.circleId;
    this.circleName = board.circleName;
  }

  get BoardLink(): string {
    return generatePath(PAGE_URL.PostList, { boardId: this.id });
  }
}
