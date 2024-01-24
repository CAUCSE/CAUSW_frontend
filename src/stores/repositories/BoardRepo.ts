import axios from 'axios';

import { BoardModel } from '../models/BoardModel';

import { API } from '@/configs/axios';

class BoardRepo {
  URI = '/api/v1/boards';

  fetch = async (): Promise<Model.Board[]> => {
    // const { data } = await API.get(this.URI);
    const { data } = await axios.get<Board.ResponseDto[]>(this.URI); // MSW

    return data.map(({ id, category, name }) => new BoardModel(id, category, name));
  };
}

export const BoardRepoImpl = new BoardRepo();
