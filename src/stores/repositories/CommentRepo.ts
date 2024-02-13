import { CommentModel } from '../models/CommentModel';

import { API } from '@/configs/axios';

class CommentRepo {
  URI = '/api/v1/comments';

  findAll = async (pid: string, page: number): Promise<PostComment.FindAllResponse> => {
    const {
      data: { content, ...other },
    } = await API.get<PostComment.GetResponseDto>(`${this.URI}?postId=${pid}&pageNum=${page}`);

    return {
      comments: content.map(comment => new CommentModel(comment)),
      ...other,
    };
  };

  create = async (body: PostComment.CreateRequestDto): Promise<Model.Comment> => {
    const { data } = await API.post<PostComment.CreateResponseDto>(this.URI, body);

    return new CommentModel(data);
  };

  update = async (cid: string, content: string) => {
    const { data } = await API.put<PostComment.CreateResponseDto>(`${this.URI}/${cid}`, {
      content,
    });

    return new CommentModel(data);
  };

  delete = async (cid: string) => {
    const { data } = await API.delete<PostComment.CreateResponseDto>(`${this.URI}/${cid}`);

    return new CommentModel(data);
  };
}

export const CommentRepoImpl = new CommentRepo();
