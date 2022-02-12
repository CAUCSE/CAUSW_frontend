import { observer } from 'mobx-react-lite';

import { Chip } from './styled';

import { useRootStore } from '@/stores/RootStore';

export const EditChip = observer(() => {
  const {
    comment: { isEdit, target, resetState },
  } = useRootStore();

  return isEdit ? (
    <Chip isEdit onClick={resetState}>
      댓글 수정: {target?.author.nameWithAdmission}
    </Chip>
  ) : null;
});
