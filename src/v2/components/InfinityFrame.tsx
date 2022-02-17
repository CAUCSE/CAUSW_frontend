import { observer } from 'mobx-react-lite';
import { useCallback, useRef } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { useRootStore } from '@/stores/RootStore';

interface Props<T> {
  loadMore: () => void;
  data: T[];
  ItemComponent: (index: number, item: T) => React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const InfinityFrame = observer(<T extends {}>({ loadMore, data, ItemComponent }: Props<T>): JSX.Element => {
  const {
    ui: { mainRef },
  } = useRootStore();
  const timer = useRef<NodeJS.Timeout>();
  const handleEndReached = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => loadMore(), 50);
  }, [loadMore]);

  return (
    <Virtuoso
      customScrollParent={mainRef?.current as HTMLElement}
      style={{ maxHeight: '100vh' }}
      endReached={handleEndReached}
      overscan={200}
      data={data}
      itemContent={ItemComponent}
    />
  );
});
