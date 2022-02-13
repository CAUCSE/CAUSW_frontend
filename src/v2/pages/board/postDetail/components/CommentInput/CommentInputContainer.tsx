import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router-dom';

import { CommentInputView } from './CommentInputView';
import { EditChip } from './EditChip';
import { ReplyChip } from './ReplyChip';
import { Nav } from './styled';

import { PAGE_URL } from '@/configs/path';
import { useRootStore } from '@/stores/RootStore';

interface FormBody {
  content: string;
}

export const CommentInputContainer: React.FC = observer(() => {
  const isReplyComment = !!useRouteMatch(PAGE_URL.PostReplyComment);
  const {
    replyComment,
    comment,
    post: { post },
  } = useRootStore();
  const methods = useForm<FormBody>();
  const onSubmit = useCallback(
    async ({ content }: FormBody) => {
      const { isEdit } = comment;

      if (isReplyComment) {
        await replyComment.create(content);
      } else {
        if (!post) return;

        if (isEdit && comment.target) {
          comment.update(comment.target.id, content);
        } else {
          await comment.create({
            postId: post.id,
            content,
          });
          post.upCommentCount();
          methods.setValue('content', '');
        }
      }
    },
    [comment, post, isReplyComment],
  );

  useEffect(() => {
    const { isEdit, isReply, target } = comment;

    if (isEdit) {
      methods.setFocus('content');
      methods.setValue('content', target?.content ?? '');
    } else if (isReply) {
      methods.setFocus('content');
    } else {
      methods.setValue('content', '');
    }
  }, [comment.state]);

  return (
    <FormProvider {...methods}>
      <Nav>
        <ReplyChip />
        <EditChip />
        <CommentInputView onSubmit={methods.handleSubmit(onSubmit)} />
      </Nav>
    </FormProvider>
  );
});
