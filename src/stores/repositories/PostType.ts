import type { BoardResponseDto } from './BoardType';
import type { CommentResponseDto } from './CommendType';

export interface PostResponseDTO {
  id: string;
  title: string;
  content: string;
  writerId: string;
  writerProfileImage: string | null;
  writerName: string;
  createdAt: string;
  updatedAt: string;
  numComment: number;
  board?: BoardResponseDto;
  commentList?: CommentResponseDto[];
}

export interface PostRequestDTO {
  boardId: string;
  title: string;
  content: string;
}
