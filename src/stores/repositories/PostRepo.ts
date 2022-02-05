import { PostModel } from '../models/PostModel';
import { PostAllWithBoardResponseDto } from '../types/PostType';
import { PostRequestDTO } from './PostType';

import { API } from 'configs/axios';

class PostRepo {
  private URI = '/api/v1/posts';

  findAll = async (boardId: string): Promise<PostAllWithBoardResponseDto> => {
    const { data } = await API.get(`${this.URI}?boardId=${boardId}`);

    return data;
  };

  findById = async (postId: string): Promise<PostDetail.RootObject> => {
    const { data } = await API.get(`${this.URI}/${postId}`);

    return data;
  };

  //

  create = async (body: PostRequestDTO): Promise<PostModel> => {
    const { data } = await API.post(this.URI, body);

    return new PostModel(data);
  };
}

export const PostRepoImpl = new PostRepo();
