import { AxiosResponse } from 'axios';

import { AuthorModel } from '../models/AuthorModel';
import { CommentModel } from '../models/CommentModel';
import { HistoryPostModel } from '../models/HistoryPostModel';

import { API } from 'configs/axios';

class UserRepo {
  private URI = '/api/v1/users';

  findPosts = async (page: number): Promise<User.FindPostsResponse> => {
    const {
      data: {
        post: { content, last },
      },
    } = (await API.get(`${this.URI}/posts?pageNum=${page}`)) as AxiosResponse<User.FindPostsResponseDto>;

    return {
      posts: content.map(post => new HistoryPostModel(post)),
      last,
    };
  };

  findComments = async (page: number): Promise<User.FindCommentsResponse> => {
    const {
      data: {
        admissionYear,
        name,
        profileImage,
        comment: { content, last },
      },
    } = (await API.get(`${this.URI}/comments?pageNum=${page}`)) as AxiosResponse<User.FindCommentsResponseDto>;

    return {
      comments: content.map(comment => {
        const model = new CommentModel(comment);
        model.author = new AuthorModel(admissionYear, name, profileImage);

        return model;
      }),
      last,
    };
  };
}

export const UserRepoImpl = new UserRepo();
