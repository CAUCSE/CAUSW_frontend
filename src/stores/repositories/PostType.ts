import { BoardResponseDto } from './BoardType';

export interface PostResponseDto {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  commentList: Model.Comment[];
  board: BoardResponseDto;
}
