import { AxiosResponse } from 'axios';

import { HistoryCommentModel } from '../models/HistoryCommentModel';
import { HistoryPostModel } from '../models/HistoryPostModel';
import { UserModel } from '../models/UserModel';

import { API } from 'configs/axios';

class UserRepo {
  private URI = '/api/v1/users';

  findByName = async (name: string): Promise<User.FindByNameResponse> => {
    const { data } = (await API.get(
      `${this.URI}/name/${name}`,
    )) as AxiosResponse<User.FindByNameResponseDto>;

    return data.map(user => new UserModel(user));
  };

  updateRole = async (
    userId: string,
    role: User.UserDto['role'],
    circleId?: string,
  ): Promise<string> => {
    const body = { role } as User.UpdateRoleRequestDto;

    if (circleId) body.circleId = circleId;

    return await API.put(`${this.URI}/${userId}/role`, body);
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

  // 유저 관리 페이지
  findAllAdmissions = async (page: number): Promise<User.FindAllAdmissionsResponse> => {
    const {
      data: { content, last },
    } = (await API.get(
      `${this.URI}/admissions?pageNum=${page}`,
    )) as AxiosResponse<User.FindAllAdmissionsResponseDto>;

    return {
      users: content.map(user => new UserModel(user)),
      last,
    };
  };

  findByState = async (
    state: User.UserDto['state'],
    page: number,
  ): Promise<User.FindByStateResponse> => {
    const {
      data: { content, last },
    } = (await API.get(
      `${this.URI}/state/${state}?pageNum=${page}`,
    )) as AxiosResponse<User.FindByStateResponseDto>;

    return {
      users: content.map(user => new UserModel(user)),
      last,
    };
  };

  acceptAdmission = async (userId: string): Promise<unknown> => {
    return await API.put(`${this.URI}/admissions/${userId}/accept`);
  };

  rejectAdmission = async (userId: string): Promise<unknown> => {
    return await API.put(`${this.URI}/admissions/${userId}/reject`);
  };

  drop = async (userId: string): Promise<unknown> => {
    return await API.put(`${this.URI}/${userId}/drop`);
  };

  // ---
  update = async (body: User.UpdateDto): Promise<void> => {
    return await API.put(this.URI, body);
  };

  leave = async (): Promise<void> => {
    return await API.delete(this.URI);
  };
}

export const UserRepoImpl = new UserRepo();
