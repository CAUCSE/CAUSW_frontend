import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { Cell } from './styled';

import { usePageUiStore } from '@/hooks';

export const LocationCell: React.FC<{ model: Model.LockerLocation }> = observer(({ model }) => {
  const { id, lockerNumber, isActive, isMine } = model;
  const store = usePageUiStore<PageUiStore.LockerLocations>();
  const handleClick = useCallback(() => store.setTarget(model), [model]);
  const isSeleted = computed(() => store.target?.id === model.id).get();

  return (
    <Cell key={id} onClick={handleClick} isActive={isActive} isMine={isMine} isSeleted={isSeleted}>
      <span className="absolute-center">{lockerNumber}</span>
    </Cell>
  );
});

LocationCell.displayName = 'LocationCell';
