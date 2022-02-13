import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router-dom';

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
  const { commentInput } = usePageUiStore();
  const methods = useForm<FormBody>();
  const handleSubmit = useCallback(
    (isReplyComment: boolean, post?: Model.Post) =>
      async ({ content }: FormBody) => {
        if (!post) return;

        const { isReply, isEdit, target } = commentInput;

        if (isReplyComment) {
          if (!isEdit) await replyComment.create(content, target);
          else if (target) await replyComment.update(content, target);
        } else {
          if (!isEdit) await comment.create({ postId: post.id, content });
          else if (target) await comment.update(content, target);
        }

        if (!isReply) post.upCommentCount();
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
        <CommentInputView onSubmit={methods.handleSubmit(handleSubmit(isReplyComment, post))} />
      </Nav>
    </FormProvider>
  );
});
