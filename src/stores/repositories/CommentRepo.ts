import { AxiosResponse } from 'axios';

import { CommentModel } from '../models/CommentModel';

import { API } from 'configs/axios';

class CommentRepo {
  URI = '/api/v1/comments';

  create = async (body: Comment.CreateRequestDto): Promise<Model.Comment> => {
    const { data } = (await API.post(this.URI, body)) as AxiosResponse<Comment.CreateReponseDto>;

    return new CommentModel(data);
  };

  update = async (cid: string, content: string) => {
    const { data } = (await API.put(`${this.URI}/${cid}`, { content })) as AxiosResponse<Comment.CreateReponseDto>;

    return new CommentModel(data);
  };

  delete = async (cid: string) => {
    const { data } = (await API.delete(`${this.URI}/${cid}`)) as AxiosResponse<Comment.CreateReponseDto>;
    return new CommentModel(data);
  };
}

export const CommentRepoImpl = new CommentRepo();
