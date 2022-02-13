import { observer } from 'mobx-react-lite';

import { usePageUiStore } from '../../PagePostDetailUiStore';
import { Chip } from './styled';

export const EditChip = observer(() => {
  const {
    commentInput: { isEdit, resetState, target },
  } = usePageUiStore();

  return isEdit ? (
    <Chip isEdit onClick={resetState}>
      댓글 수정: {target?.author.nameWithAdmission}
    </Chip>
  ) : null;
});
