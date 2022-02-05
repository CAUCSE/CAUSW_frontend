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

  constructor(id: string, category: string, name: string) {
    this.id = id;
    this.name = name;
    this.category = category;
  }

  get BoardLink(): string {
    return generatePath(PAGE_URL.Post, { boardId: this.id });
  }
}
