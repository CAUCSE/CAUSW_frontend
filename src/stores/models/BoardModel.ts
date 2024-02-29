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
  isDeleted: string;
  writable: boolean;
  createRoleList: User.Role[];

  constructor(
    id: string,
    category: string,
    name: string,
    description: string,
    isDeleted: string,
    writable: boolean,
    createRoleList: User.Role[],
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.isDeleted = isDeleted;
    this.writable = writable;
    this.createRoleList = createRoleList;
  }

  get BoardLink(): string {
    return generatePath(PAGE_URL.PostList, { boardId: this.id });
  }
}
