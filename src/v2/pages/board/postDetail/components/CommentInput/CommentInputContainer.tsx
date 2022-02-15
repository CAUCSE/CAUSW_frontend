import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router-dom';
import { VirtuosoHandle } from 'react-virtuoso';

import { usePageUiStore } from '../../PagePostDetailUiStore';
import { CommentInputView } from './CommentInputView';
import { EditChip } from './EditChip';
import { ReplyChip } from './ReplyChip';
import { Nav } from './styled';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

type FormBody = { content: string };

export const CommentInputContainer: React.FC = observer(() => {
  const isReplyComment = !!useRouteMatch(PAGE_URL.PostReplyComment);
  const {
    comment,
    replyComment,
    post: { post },
  } = useRootStore();
  const { virtuosoRef, commentInput } = usePageUiStore();
  const methods = useForm<FormBody>();
  const handleSubmit = useCallback(
    (isReplyComment: boolean, virtuosoRef?: React.MutableRefObject<VirtuosoHandle | null>, post?: Model.Post) =>
      async ({ content }: FormBody) => {
        if (!post) return;

        const { isEdit, target } = commentInput;
        let rtn: Model.Comment | Model.ReplyComment | undefined;
        let index;
        let align: 'start' | 'center' | 'end' | undefined = 'start';

        if (isReplyComment) {
          if (!isEdit) rtn = (await replyComment.create(content, target)) as unknown as Model.ReplyComment;
          else if (target) rtn = (await replyComment.update(content, target)) as unknown as Model.ReplyComment;

          index = replyComment.comments.findIndex(({ id }) => id === rtn?.id);
          align = 'end';
        } else {
          if (!isEdit) rtn = (await comment.create({ postId: post.id, content })) as unknown as Model.Comment;
          else if (target) rtn = (await comment.update(content, target)) as unknown as Model.Comment;

          index = comment.comments.findIndex(({ id }) => id === rtn?.id);
          align = 'start';
        }

        virtuosoRef?.current?.scrollToIndex({
          index,
          align,
          behavior: 'smooth',
        });
        methods.setValue('content', '');
        commentInput.resetState();
      },
    [],
  );

  return (
    <FormProvider {...methods}>
      <Nav>
        <ReplyChip />
        <EditChip />
        <CommentInputView onSubmit={methods.handleSubmit(handleSubmit(isReplyComment, virtuosoRef, post))} />
      </Nav>
    </FormProvider>
  );
});
