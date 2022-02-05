import { AxiosResponse } from 'axios';

import { CommentModel } from '../models/CommentModel';

import { API } from 'configs/axios';

class CommentRepo {
  URI = '/api/v1/comments';

  create = async (body: CreateCommentBody): Promise<Model.Comment> => {
    const { data } = (await API.post(this.URI, body)) as AxiosResponse<Comment.Dto>;

    return new CommentModel(data, body.parentCommentId ? true : false);
  };

  update = async (id: string, content: string) => {
    const { data } = (await API.put(`${this.URI}/${id}`, { content })) as AxiosResponse<Comment.Dto>;

    return new CommentModel(data);
  };

  delete = async (id: string) => {
    return await API.delete(`${this.URI}/${id}`);
  };
}

export const CommentRepoImpl = new CommentRepo();

export interface CreateCommentBody {
  postId: string;
  parentCommentId?: string;
  content: string;
}
