import { API } from 'configs/axios';
import { BoardModel } from '../models/BoardModel';

class BoardRepo {
  URI = '/api/v1/boards';

  fetch = async (): Promise<Model.Board[]> => {
    const { data } = await API.get(this.URI);

    return data.map((item: BoardDto) => new BoardModel(item));
  };
}

export const BoardRepoImpl = new BoardRepo();

export interface BoardDto {
  id: string;
  category: string;
  name: string;
  writable: boolean;
  isDeleted: boolean;
  circleId: string;
  circleName: string;
  createRoleList: string[];
}
