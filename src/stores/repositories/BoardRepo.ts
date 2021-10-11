import { API } from 'configs/axios';
import { BoardResponseDto } from './BoardType';

class BoardRepo {
  URI = '/api/v1/boards';

  fetch = async (): Promise<BoardResponseDto[]> => {
    const { data } = await API.get(this.URI);

    return data;
  };
}

export const BoardRepoImpl = new BoardRepo();
