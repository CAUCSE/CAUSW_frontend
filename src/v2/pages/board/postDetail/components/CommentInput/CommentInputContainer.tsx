import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { CommentInputView } from './CommentInputView';
import { EditChip } from './EditChip';
import { ReplyChip } from './ReplyChip';
import { Nav } from './styled';

import { useRootStore } from '@/stores/RootStore';

interface FormBody {
  content: string;
}

export const CommentInputContainer: React.FC = observer(() => {
  const {
    comment,
    post: { post },
  } = useRootStore();
  const methods = useForm<FormBody>();
  const onSubmit = useCallback(
    async ({ content }: FormBody) => {
      const { isEdit, target } = comment;

      if (!post) return;

      if (isEdit && target) {
        comment.update(target.id, content);
      } else {
        await comment.create({
          postId: post.id,
          content,
        });
        post.upCommentCount();
        methods.setValue('content', '');
      }
    },
    [comment, post],
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
