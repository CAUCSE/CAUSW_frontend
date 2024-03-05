import axios, { AxiosResponse } from 'axios';

import { AdmissionUserModel } from '../models';
import { HistoryCommentModel } from '../models/HistoryCommentModel';
import { HistoryPostModel } from '../models/HistoryPostModel';
import { UserModel } from '../models/UserModel';

import { API } from '@/configs/axios';

class UserRepo {
  private URI = '/api/v1/users';

  findByName = async (name: string): Promise<User.FindByNameResponse> => {
    const { data } = await API.get<User.FindByNameResponseDto>(`${this.URI}/name/${name}`);

    return data.map(user => new UserModel(user));
  };

  updateRole = async (
    userId: string,
    role: User.UserDto['role'],
    circleId?: string,
  ): Promise<unknown> => {
    //UserDto type 확정시 변경 예정
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

    //mocking
    /* const {
      data: {
        post: { content, last },
      },
    } = await axios.get<User.FindPostsResponseDto>(`${this.URI}/posts?pageNum=${page}`); */

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

    //mocking
    /* const {
      data: {
        comment: { content, last },
      },
    } = await axios.get<User.FindCommentsResponseDto>(`${this.URI}/comments?pageNum=${page}`); */

    return {
      comments: content.map(comment => new HistoryCommentModel(comment)),
      last,
    };
  };

  // 권한 관리 페이지
  findPrivilegedUsers = async (): Promise<User.FindPrivilegedUsersResponse> => {
    const {
      data: { presidentUsers, councilUsers, leaderAlumni, leaderCircleUsers, leaderGradeUsers },
    } = (await API.get(
      `${this.URI}/privileged`,
    )) as AxiosResponse<User.FindPrivilegedUsersResponseDto>;

    /* mocking
    const {
      data: { councilUsers, leaderAlumni, leaderCircleUsers, leaderGradeUsers },
    } = await axios.get<User.FindPrivilegedUsersResponseDto>(`${this.URI}/privileged`); */

    return {
      presidentUsers: presidentUsers ? new UserModel(presidentUsers) : null,
      councilUsers: councilUsers.map(user => new UserModel(user)),
      leaderGradeUsers: leaderGradeUsers.map(user => new UserModel(user)),
      leaderCircleUsers: leaderCircleUsers.map(user => new UserModel(user)),
      leaderAlumni: leaderAlumni ? new UserModel(leaderAlumni) : null,
    };
  };

  // 유저 관리 페이지
  findAllAdmissions = async (
    name: string | null,
    page: number,
  ): Promise<User.FindAllAdmissionsResponse> => {
    const {
      data: { content, last },
    } = name
      ? ((await API.get(
          `${this.URI}/admissions?name=${name}&pageNum=${page}`,
        )) as AxiosResponse<User.FindAllAdmissionsResponseDto>)
      : ((await API.get(
          `${this.URI}/admissions?pageNum=${page}`,
        )) as AxiosResponse<User.FindAllAdmissionsResponseDto>);

    return {
      users: content.map(user => new AdmissionUserModel(user)),
      last,
    };
  };

  findByState = async (
    state: User.UserDto['state'],
    name: string | null,
    page: number,
  ): Promise<User.FindByStateResponse> => {
    const {
      data: { content, last },
    } = name
      ? ((await API.get(
          `${this.URI}/state/${state}?name=${name}&pageNum=${page}`,
        )) as AxiosResponse<User.FindByStateResponseDto>)
      : ((await API.get(
          `${this.URI}/state/${state}?pageNum=${page}`,
        )) as AxiosResponse<User.FindByStateResponseDto>);

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

  restore = async (userId: string): Promise<unknown> => {
    return await API.put(`${this.URI}/restore/${userId}`);
  };

  // ---
  update = async (body: User.UpdateDto): Promise<void> => {
    return await API.put(this.URI, body);
  };

  leave = async (): Promise<unknown> => {
    //UserDto type 확정시 변경 예정
    return await API.delete(this.URI);
  };
}

export const UserRepoImpl = new UserRepo();
