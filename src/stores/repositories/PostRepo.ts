import { API } from 'configs/axios';
import { PostModel } from '../models/PostModel';
import { PostResponseDTO, PostRequestDTO } from './PostType';

class PostRepo {
  private URI = '/api/v1/posts';

  fetch = async (boardId: string): Promise<PostModel[]> => {
    const { data } = await API.get(`${this.URI}?boardId=${boardId}`);

    return data.map((item: PostResponseDTO) => new PostModel(item));
  };

  fetchById = async (postId: string): Promise<PostModel> => {
    const { data } = await API.get(`${this.URI}/${postId}`);

    return new PostModel(data);
  };

  create = async (body: PostRequestDTO): Promise<PostModel> => {
    const { data } = await API.post(this.URI, body);

    return new PostModel(data);
  };
}

export const PostRepoImpl = new PostRepo();
