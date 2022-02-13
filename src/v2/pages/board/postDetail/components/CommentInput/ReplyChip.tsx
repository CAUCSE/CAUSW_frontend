import { observer } from 'mobx-react-lite';

import { usePageUiStore } from '../../PagePostDetailUiStore';
import { Chip } from './styled';

export const ReplyChip = observer(() => {
  const {
    commentInput: { isReply, resetState, target },
  } = usePageUiStore();

  return isReply ? (
    <Chip isReply onClick={resetState}>
      답글 작성: {target?.author.nameWithAdmission}
    </Chip>
  ) : null;
});
