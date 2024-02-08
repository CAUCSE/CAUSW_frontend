import { PostModel } from '../models/PostModel';

import { API } from '@/configs/axios';

class PostRepo {
  private URI = '/api/v1/posts';

  findAll = async (boardId: string, page: number): Promise<Post.FindAllResponse> => {
    const { data } = await API.get<Post.FindAllResponseDto>(
      `${this.URI}?boardId=${boardId}&pageNum=${page}`,
    );

    const result = {
      ...data,
      post: { ...data.post, content: [...data.post.content].map(post => new PostModel(post)) },
    };

    return result;
  };

  create = async (body: Post.CreateRequestDto): Promise<PostModel> => {
    const { data } = await API.post<Post.Dto>(this.URI, body);

    return new PostModel(data);
  };

  update = async (postId: string, body: Post.UpdateRequestDto): Promise<void> => {
    await API.put(`${this.URI}/${postId}`, body);
  };

  findById = async (postId: string): Promise<Post.FindByIdResponseDto> => {
    const { data } = await API.get<Post.FindByIdResponseDto>(`${this.URI}/${postId}`);
    const { boardName, commentList, ...postDetailContent } = data;
    return { boardName, commentList, ...postDetailContent };
  };

  delete = async (postId: string): Promise<void> => {
    await API.delete(`${this.URI}/${postId}`);
  };

  search = async (bid: string, keyword: string, page: number): Promise<Post.FindAllResponse> => {
    const { data } = await API.get(
      `${this.URI}/search?boardId=${bid}&keyword=${keyword}&option=title&pageNum=${page}`,
    );

    const result = {
      ...data,
      post: { ...data.post, content: [...data.post.content].map(post => new PostModel(post)) },
    };

    return result;
  };

  // TODO: 게시판 관리 화면 구현 시 추가 검증 필요
  restore = async (postId: string): Promise<void> => {
    await API.put(`${this.URI}/${postId}/restore`);
  };
}

export const PostRepoImpl = new PostRepo();
