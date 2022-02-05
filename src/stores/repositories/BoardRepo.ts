import { BoardModel } from '../models/BoardModel';

import { API } from 'configs/axios';

class BoardRepo {
  URI = '/api/v1/boards';

  fetch = async (): Promise<Model.Board[]> => {
    const { data } = await API.get(this.URI);

    return data.map(({ id, category, name }: BoardDto) => new BoardModel(id, category, name));
  };
}

export const BoardRepoImpl = new BoardRepo();

export interface BoardDto {
  id: string;
  category: string;
  name: string;

  // XXX: 사용 안함
  writable: boolean;
  isDeleted: boolean;
  circleId: string;
  circleName: string;
  createRoleList: string[];
}
