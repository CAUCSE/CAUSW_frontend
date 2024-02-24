import axios, { AxiosResponse } from 'axios';

import { CommentModel } from '../models/CommentModel';
import { ReplyCommentModel } from '../models/ReplyCommentModel';

import { API } from '@/configs/axios';

class ReplyCommentRepo {
  URI = '/api/v1/child-comments';

  findAll = async (pcid: string, pageNum: number): Promise<ReplyComment.FindAllResponse> => {
    const { data } = (await API.get(
      `${this.URI}?parentCommentId=${pcid}&pageNum=${pageNum}`,
    )) as AxiosResponse<ReplyComment.GetResponseDto>;

    /* mocking
    const { data } = await axios.get<ReplyComment.GetResponseDto>(
      `${this.URI}?parentCommentId=${pcid}&pageNum=${pageNum}`,
    ); */

    return {
      parent: new CommentModel(data.parentComment),
      comments: data.childComments.content.map(comment => new ReplyCommentModel(comment)),
      last: data.childComments.last,
    };
  };

  create = async (body: ReplyComment.CreateRequestDto): Promise<Model.ReplyComment> => {
    const { data } = (await API.post(
      this.URI,
      body,
    )) as AxiosResponse<ReplyComment.CreateResponseDto>;

    return new ReplyCommentModel(data);
  };

  update = async (rcid: string, content: string): Promise<Model.ReplyComment> => {
    const { data } = (await API.put(`${this.URI}/${rcid}`, {
      content,
    })) as AxiosResponse<ReplyComment.CreateResponseDto>;

    return new ReplyCommentModel(data);
  };

  delete = async (rcid: string): Promise<Model.ReplyComment> => {
    const { data } = (await API.delete(
      `${this.URI}/${rcid}`,
    )) as AxiosResponse<ReplyComment.CreateResponseDto>;
    return new ReplyCommentModel(data);
  };
}

export const ReplyCommentRepoImpl = new ReplyCommentRepo();
