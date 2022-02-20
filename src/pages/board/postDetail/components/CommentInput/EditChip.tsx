import { observer } from 'mobx-react-lite';

import { Chip } from './styled';

import { usePageUiStore } from '@/hooks';

export const EditChip = observer(() => {
  const {
    commentInput: { isEdit, resetState, target },
  } = usePageUiStore<PageUiStore.PostDetail>();

  return isEdit ? (
    <Chip isEdit onClick={resetState}>
      댓글 수정: {target?.author.nameWithAdmission}
    </Chip>
  ) : null;
});
