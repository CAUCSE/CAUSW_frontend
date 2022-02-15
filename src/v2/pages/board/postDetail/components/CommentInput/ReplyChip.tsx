import { observer } from 'mobx-react-lite';

import { Chip } from './styled';

import { usePageUiStore } from '@/v2/hooks';

export const ReplyChip = observer(() => {
  const {
    commentInput: { isReply, resetState, target },
  } = usePageUiStore<PageUiStore.PostDetail>();

  return isReply ? (
    <Chip isReply onClick={resetState}>
      답글 작성: {target?.author.nameWithAdmission}
    </Chip>
  ) : null;
});
