import axios, { AxiosResponse } from 'axios';

import { PostModel } from '../models/PostModel';

import { API } from '@/configs/axios';

class PostRepo {
  private URI = '/api/v1/posts';

  findAll = async (boardId: string, page: number): Promise<Post.FindAllResponse> => {
    // const { data } = (await API.get(
    //   `${this.URI}?boardId=${boardId}&pageNum=${page}`,
    // )) as AxiosResponse<Post.FindAllResponseDto>;

    const { data } = await axios.get<Post.FindAllResponseDto>(
      `${this.URI}?boardId=${boardId}&pageNum=${page}`,
    ); // MSW

    const result = {
      ...data,
      post: { ...data.post, content: [...data.post.content].map(post => new PostModel(post)) },
    };

    return result;
  };

  create = async (body: Post.CreateRequestDto): Promise<PostModel> => {
    // const { data } = await API.post(this.URI, body);

    const { data } = await axios.post<Post.Dto>(this.URI, body); // MSW

    return new PostModel(data);
  };

  update = async (postId: string, body: Post.UpdateRequestDto): Promise<void> => {
    // return await API.put(`${this.URI}/${postId}`, body);
    await axios.put(`${this.URI}/${postId}`, body); // MSW
  };

  findById = async (postId: string): Promise<Post.FindByIdResponseDto> => {
    // const { data } = (await API.get(
    //   `${this.URI}/${postId}`,
    // )) as AxiosResponse<Post.FindByIdResponseDto>;

    const { data } = await axios.get(`${this.URI}/${postId}`); // MSW

    return data;
  };

  delete = async (postId: string): Promise<void> => {
    await API.delete(`${this.URI}/${postId}`);
  };
}

export const PostRepoImpl = new PostRepo();
