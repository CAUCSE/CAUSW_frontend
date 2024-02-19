import axios, { AxiosResponse } from 'axios';

import { CommentModel } from '../models/CommentModel';

import { API } from '@/configs/axios';

class CommentRepo {
  URI = '/api/v1/comments';

  findAll = async (pid: string, page: number): Promise<PostComment.FindAllResponse> => {
    const {
      data: { content, ...other },
    } = (await API.get(
      `${this.URI}?postId=${pid}&pageNum=${page}`,
    )) as AxiosResponse<PostComment.GetResponseDto>;

    /* mocking
    const {
      data: { content, ...other },
    } = await axios.get<PostComment.GetResponseDto>(`${this.URI}?postId=${pid}&pageNum=${page}`); */

    return {
      comments: content.map(comment => new CommentModel(comment)),
      ...other,
    };
  };

  create = async (body: PostComment.CreateRequestDto): Promise<Model.Comment> => {
    const { data } = (await API.post(
      this.URI,
      body,
    )) as AxiosResponse<PostComment.CreateResponseDto>;

    // mocking
    // const { data } = await axios.post<PostComment.CreateResponseDto>(this.URI, body);

    return new CommentModel(data);
  };

  update = async (cid: string, content: string) => {
    const { data } = (await API.put(`${this.URI}/${cid}`, {
      content,
    })) as AxiosResponse<PostComment.CreateResponseDto>;

    /* mocking
    const { data } = await axios.put<PostComment.CreateResponseDto>(`${this.URI}/${cid}`, {
      content,
    }); */
    return new CommentModel(data);
  };

  delete = async (cid: string) => {
    const { data } = (await API.delete(
      `${this.URI}/${cid}`,
    )) as AxiosResponse<PostComment.CreateResponseDto>;

    return new CommentModel(data);
  };
}

export const CommentRepoImpl = new CommentRepo();
