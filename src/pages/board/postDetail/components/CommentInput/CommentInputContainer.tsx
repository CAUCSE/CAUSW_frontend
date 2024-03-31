import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams, useRouteMatch } from 'react-router-dom';
import { VirtuosoHandle } from 'react-virtuoso';

import { CommentInputView } from './CommentInputView';
import { EditChip } from './EditChip';
import { ReplyChip } from './ReplyChip';
import { Nav } from './styled';

import { PAGE_URL, PostParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';
import { useRootStore } from '@/stores';

type FormBody = { content: string };

export const CommentInputContainer: React.FC = observer(() => {
  //const isReplyComment = !!useRouteMatch(PAGE_URL.PostReplyComment);

  const { postId } = useParams<PostParams>();
  const {
    ui: { alert },
  } = useRootStore();
  const { virtuosoRef, commentInput, replyComments, comments } =
    usePageUiStore<PageUiStore.PostDetail>();
  const { fetch, reset } = usePageUiStore<PageUiStore.PostDetail>();

  const methods = useForm<FormBody>();
  const handleSubmit = useCallback(
    (virtuosoRef?: React.MutableRefObject<VirtuosoHandle | null>) =>
      async ({ content }: FormBody) => {
        const { isReply, isEdit, target } = commentInput;
        let rtn: Model.Comment | Model.ReplyComment | undefined;
        let index;
        let align: 'start' | 'center' | 'end' | undefined;

        if (content.length === 0) {
          alert({ message: '댓글 내용을 입력해주세요.' });
          return;
        }

        if (isReply) {
          if (!isEdit)
            rtn = (await replyComments.create(content, target)) as unknown as Model.ReplyComment;
          else if (target)
            rtn = (await replyComments.update(content, target)) as unknown as Model.ReplyComment;

          index = replyComments.comments.findIndex(({ id }) => id === rtn?.id);
          align = 'end';
        } else {
          if (!isEdit)
            rtn = (await comments.create({
              postId,
              content,
            })) as unknown as Model.Comment;
          else if (target)
            rtn = (await comments.update(content, target)) as unknown as Model.Comment;

          index = comments.comments.findIndex(({ id }) => id === rtn?.id);
          align = 'center';
        }

        virtuosoRef?.current?.scrollToIndex({
          index,
          align,
          behavior: 'smooth',
        });
        methods.setValue('content', '');
        commentInput.resetState();
        reset();
        fetch(postId);
      },
    [postId],
  );

  return (
    <FormProvider {...methods}>
      <Nav>
        {/* <ReplyChip />
        <EditChip /> */}
        <CommentInputView onSubmit={methods.handleSubmit(handleSubmit(virtuosoRef))} />
      </Nav>
    </FormProvider>
  );
});
