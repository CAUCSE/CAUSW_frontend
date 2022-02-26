import { AxiosResponse } from 'axios';

import { HistoryCommentModel } from '../models/HistoryCommentModel';
import { HistoryPostModel } from '../models/HistoryPostModel';

import { API } from 'configs/axios';

class UserRepo {
  private URI = '/api/v1/users';

  update = async (body: User.UpdateDto): Promise<void> => {
    return await API.put(this.URI, body);
  };

  leave = async (): Promise<void> => {
    return await API.delete(this.URI);
  };

  findPosts = async (page: number): Promise<User.FindPostsResponse> => {
    const {
      data: {
        post: { content, last },
      },
    } = (await API.get(
      `${this.URI}/posts?pageNum=${page}`,
    )) as AxiosResponse<User.FindPostsResponseDto>;

    return {
      posts: content.map(post => new HistoryPostModel(post)),
      last,
    };
  };

  findComments = async (page: number): Promise<User.FindCommentsResponse> => {
    const {
      data: {
        comment: { content, last },
      },
    } = (await API.get(
      `${this.URI}/comments?pageNum=${page}`,
    )) as AxiosResponse<User.FindCommentsResponseDto>;

    return {
      comments: content.map(comment => new HistoryCommentModel(comment)),
      last,
    };
  };
}

export const UserRepoImpl = new UserRepo();
