import { API } from 'configs/axios';
import { PostModel } from '../models/PostModel';
import { PostResponseDto } from './PostType';

class PostRepo {
  private URI = '/api/v1/posts';

  fetch = async (boardId: string): Promise<PostModel[]> => {
    const { data } = await API.get(`${this.URI}?boardId=${boardId}`);

    return data.map((item: PostResponseDto) => new PostModel(item));
  };
}

export const PostRepoImpl = new PostRepo();
