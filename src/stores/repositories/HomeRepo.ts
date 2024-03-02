import axios, { AxiosResponse } from 'axios';

import { BoardModel } from '../models/BoardModel';
import { PostModel } from '../models/PostModel';

import { API } from '@/configs/axios';

class HomeRepo {
  URI = '/api/v1/home';

  getHomePage = async (): Promise<Home.GetHomePageResponse> => {
    const { data } = (await API.get(this.URI)) as AxiosResponse<Home.GetHomePageResponseDto>;
    // const { data } = await axios.get<Home.GetHomePageResponseDto>(this.URI);

    return data.map(({ board, posts: { content } }) => ({
      board: new BoardModel(board),
      posts: content.map((data: Post.Dto) => new PostModel(data)),
    }));
  };
}

export const HomeRepoImpl = new HomeRepo();
