import { AxiosResponse } from 'axios';

import { BoardModel } from '../models/BoardModel';
import { PostModel } from '../models/PostModel';
import { Content } from '../types/PostType';

import { API } from 'configs/axios';

class HomeRepo {
  URI = '/api/v1/home';

  getHomePage = async (): Promise<Home.GetHomePageResponse> => {
    const { data } = (await API.get(this.URI)) as AxiosResponse<Home.GetHomePageResponseDto>;

    return data.map(({ board, posts: { content } }) => ({
      board: new BoardModel(board.id, board.category, board.name),
      posts: content.map((data: Content) => new PostModel(data)),
    }));
  };
}

export const HomeRepoImpl = new HomeRepo();
