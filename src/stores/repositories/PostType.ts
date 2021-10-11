import type { BoardResponseDto } from './BoardType';
import type { CommentResponseDto } from './CommendType';

export interface PostResponseDto {
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
