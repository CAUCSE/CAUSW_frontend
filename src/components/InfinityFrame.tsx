/* eslint-disable @typescript-eslint/ban-types */
import { observer } from 'mobx-react-lite';
import { useCallback, useRef } from 'react';
import { Virtuoso } from 'react-virtuoso';

interface Props<T> {
  bodyRef: React.MutableRefObject<HTMLDivElement | null>;
  loadMore: () => void;
  data: T[];
  ItemComponent: (index: number, item: T) => React.ReactNode;
}

export const InfinityFrame = observer(
  <T extends {}>({ bodyRef, loadMore, data, ItemComponent }: Props<T>): JSX.Element => {
    const timer = useRef<NodeJS.Timeout>();
    const handleEndReached = useCallback(() => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => loadMore(), 50);
    }, [loadMore]);

    return (
      <Virtuoso
        customScrollParent={bodyRef?.current as HTMLDivElement}
        style={{ maxHeight: '100vh' }}
        endReached={handleEndReached}
        overscan={200}
        data={data}
        itemContent={ItemComponent}
      />
    );
  },
);
