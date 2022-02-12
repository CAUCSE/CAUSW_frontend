import { observer } from 'mobx-react-lite';

import { Chip } from './styled';

import { useRootStore } from '@/stores/RootStore';

export const ReplyChip = observer(() => {
  const {
    comment: { isReply, target, resetState },
  } = useRootStore();

  return isReply ? (
    <Chip isReply onClick={resetState}>
      답글 작성: {target?.author.nameWithAdmission}
    </Chip>
  ) : null;
});
