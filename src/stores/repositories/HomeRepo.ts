import { BoardModel } from '../models/BoardModel';
import { PostModel } from '../models/PostModel';
import { Content } from '../types/PostType';

import { API } from 'configs/axios';

class HomeRepo {
  URI = '/api/v1/home';

  fetch = async () => {
    const { data } = await API.get(this.URI);

    console.debug(data);

    return data.map(({ board, posts: { content } }: HomeDto) => ({
      board: new BoardModel(board.id, board.category, board.name),
      posts: content.map((data: Content) => new PostModel(data)),
    }));
  };
}

export const HomeRepoImpl = new HomeRepo();

export interface HomeDto {
  board: {
    id: string;
    category: string;
    name: string;
  };
  posts: {
    content: Content[];
  };
}
