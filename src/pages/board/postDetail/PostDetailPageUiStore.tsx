import { makeAutoObservable } from 'mobx';
import { VirtuosoHandle } from 'react-virtuoso';

import { CommentsStore } from './CommentsStore';
import { CommentDeleteModalUi } from './components/CommentDeleteModal';
import { CommentInputUiStore } from './components/CommentInput';
import { CommentMenuUi } from './components/CommentMenu';
import { PostDeleteModalUiStore } from './components/PostDeleteModal/PostDeleteModalUiStore';
import { ReplyCommentsStore } from './ReplyCommentsStore';

import { CommentModel } from '@/stores/models/CommentModel';
import { PostModel } from '@/stores/models/PostModel';
import { PostRepoImpl as Repo } from '@/stores/repositories/PostRepo';

export class PostDetailPageUiStore {
  boardName?: string;
  post?: Model.Post;

  // 가상 스크롤 및 스크롤 영역
  screenRef?: React.MutableRefObject<HTMLDivElement | null>;
  virtuosoRef?: React.MutableRefObject<VirtuosoHandle | null>;

  // 댓글
  comments = new CommentsStore(this);
  replyComments = new ReplyCommentsStore(this);
  commentInput = new CommentInputUiStore();

  // 모달 관련
  postDeleteModal = new PostDeleteModalUiStore();
  commentMenuModal = new CommentMenuUi();
  commentDeleteModal = new CommentDeleteModalUi();

  constructor() {
    makeAutoObservable(
      this,
      {
        commentInput: false,
        postDeleteModal: false,
        commentMenuModal: false,
        commentDeleteModal: false,
      },
      { autoBind: true },
    );
  }

  reset(): void {
    this.boardName = undefined;
    this.post = undefined;
    this.comments.reset();
    this.replyComments.reset();
  }

  setScreenRef(ref: React.MutableRefObject<HTMLDivElement | null>): void {
    this.screenRef = ref;
  }

  setVirtuosoRef(ref: React.MutableRefObject<VirtuosoHandle | null>): void {
    this.virtuosoRef = ref;
  }

  *fetch(postId: string): Generator {
    const { boardName, commentList, ...props } = (yield Repo.findById(
      postId,
    )) as Post.FindByIdResponseDto;

    this.boardName = boardName;
    this.post = new PostModel(props.content as Post.Dto);

    this.comments.comments = commentList.content.map(comment => new CommentModel(comment));
    this.comments.page = 0;
    this.comments.hasMore = !commentList.last;
  }

  *deletePost(pid: string): Generator {
    try {
      yield Repo.delete(pid);
      return { sucess: true };
    } catch (error) {
      return error;
    }
  }
}

export const PageUiStoreImpl = new PostDetailPageUiStore();
