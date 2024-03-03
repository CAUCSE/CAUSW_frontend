import { BoardModel } from '../models/BoardModel';

import { API } from '@/configs/axios';

class BoardRepo {
  URI = '/api/v1/boards';

  fetch = async (): Promise<Model.Board[]> => {
    const { data } = await API.get<Board.ResponseDto[]>(this.URI);

    return data.filter(content => content.isDeleted === false).map(board => new BoardModel(board));
  };

  create = async (body: Board.CreateRequestDto): Promise<BoardModel> => {
    const { data } = await API.post<Board.ResponseDto>(this.URI, body);
    return new BoardModel(data);
  };

  update = async (boardId: string, body: Board.UpdateRequestDto): Promise<void> => {
    await API.put(`${this.URI}/${boardId}`, body);
  };

  delete = async (boardId: string): Promise<void> => {
    await API.delete(`${this.URI}/${boardId}`);
  };

  restore = async (boardId: string): Promise<void> => {
    await API.put(`${this.URI}/${boardId}`);
  };
}

export const BoardRepoImpl = new BoardRepo();
