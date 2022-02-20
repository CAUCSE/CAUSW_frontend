import { makeAutoObservable } from 'mobx';

import { PostModel } from '@/stores/models/PostModel';
import { PostRepoImpl as Repo } from '@/stores/repositories/PostRepo';

export class PostEditorPageUiStore {
  boardName?: string;
  post?: Model.Post;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.post = undefined;
    this.boardName = undefined;
  }

  *fetch(boardId: string, postId: string): Generator {
    if (!postId) {
      // TODO: 게시글 이름만 필요한데 게시글 목록 조회함
      const { boardName } = (yield Repo.findAll(boardId, 0)) as Post.FindAllResponseDto;

      this.boardName = boardName;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { boardId, boardName, commentList, ...props } = (yield Repo.findById(
        postId,
      )) as Post.FindByIdResponseDto;

      this.boardName = boardName;
      this.post = new PostModel(props as Post.Dto);
    }
  }

  *create(body: Post.CreateRequestDto): Generator {
    this.post = (yield Repo.create(body)) as Model.Post;

    return this.post;
  }

  *edit(pid: string, data: Post.UpdateRequestDto): Generator {
    if (this.post) {
      yield Repo.update(pid, data);

      this.post.title = data.title;
      this.post.content = data.content;
    }
  }
}

export const PageUiStoreImpl = new PostEditorPageUiStore();
