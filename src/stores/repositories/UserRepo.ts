import { AxiosResponse } from 'axios';

import { AuthorModel } from '../models/AuthorModel';
import { PostModel } from '../models/PostModel';

import { API } from 'configs/axios';

class UserRepo {
  private URI = '/api/v1/users';

  findPosts = async (page: number): Promise<User.FindPostsResponse> => {
    const {
      data: {
        admissionYear,
        name,
        profileImage,
        post: { content, last },
      },
    } = (await API.get(`${this.URI}/posts?pageNum=${page}`)) as AxiosResponse<User.FindPostsResponseDto>;

    return {
      posts: content.map(post => {
        const model = new PostModel(post);
        model.author = new AuthorModel(admissionYear, name, profileImage);

        return model;
      }),
      last,
    };
  };
}

export const UserRepoImpl = new UserRepo();
