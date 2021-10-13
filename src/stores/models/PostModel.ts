import { generatePath } from 'react-router';
import { formatISO, isToday } from 'date-fns';
import { utcToZonedTime, format } from 'date-fns-tz';
import { PAGE_URL } from '@/configs/path';
import type { BoardResponseDto } from '../repositories/BoardType';
import type { PostResponseDTO } from '../repositories/PostType';
import { AuthorModel } from './AuthorModel';
import { CommentModel } from './CommentModel';

export class PostModel {
  id?: string;
  title: string;
  content: string;
  author: Model.Author;
  createdAt: string;
  updatedAt: string;
  numComment: number;
  board?: BoardResponseDto;
  comments: Model.Comment[];

  constructor(props: PostResponseDTO) {
    const now = formatISO(new Date());

    this.id = props?.id ?? undefined;
    this.title = props?.title ?? '';
    this.content = props?.content ?? '';
    this.author = new AuthorModel(props);
    this.createdAt = props?.createdAt ?? now;
    this.updatedAt = props?.updatedAt ?? now;
    this.numComment =
      // List
      props?.numComment ??
      // Detail
      props?.commentList?.length ??
      0;
    this.board = props?.board;
    this.comments = (props?.commentList ?? []).map(item => new CommentModel(item));
  }

  get formatedCreatedAt(): string {
    const date = new Date(this.createdAt);
    const zonedDate = utcToZonedTime(date, 'Asis/Seoul');

    return format(zonedDate, isToday(zonedDate) ? 'yyyy.MM.dd HH:mm:ss' : 'yyyy.MM.dd');
  }

  get boardName(): string {
    return this.board?.name ?? '';
  }

  get boardLink(): string {
    return generatePath(PAGE_URL.Post, { boardId: this.board?.id ?? '' });
  }
}
