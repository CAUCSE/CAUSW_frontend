import { makeAutoObservable } from 'mobx';

import { PostModel } from '@/stores/models/PostModel';
import { PostRepoImpl as Repo } from '@/stores/repositories/PostRepo';

export class PostEditorPageUiStore {
  boardName?: string;
  post?: Model.Post;
  submitDisabled = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  reset(): void {
    this.boardName = undefined;
    this.post = undefined;
    this.submitDisabled = false;
  }

  *fetch(boardId: string, postId: string): Generator {
    if (!postId) {
      // 게시글 생성
      // TODO: 게시글 이름만 필요한데 게시글 목록 조회함
      const { boardName } = (yield Repo.findAll(boardId, 0)) as Post.FindAllResponseDto;
      this.boardName = boardName;
    } else {
      // 게시글 수정
      const { boardName, commentList, ...content } = (yield Repo.findById(
        postId,
      )) as Post.FindByIdResponseDto;

      this.boardName = boardName;
      this.post = new PostModel(content);
    }
  }

  *create(body: Post.CreateRequestDto): Generator {
    this.submitDisabled = true;

    try {
      this.post = (yield Repo.create(body)) as Model.Post;

      return { post: this.post };
    } catch (error) {
      return error;
    } finally {
      this.submitDisabled = false;
    }
  }

  *edit(pid: string, data: Post.UpdateRequestDto): Generator {
    this.submitDisabled = true;

    try {
      if (this.post) {
        yield Repo.update(pid, data);

        this.post.title = data.title;
        this.post.content = data.content;
      }
    } catch (error) {
      return error;
    } finally {
      this.submitDisabled = false;
    }
  }
}

export const PageUiStoreImpl = new PostEditorPageUiStore();
