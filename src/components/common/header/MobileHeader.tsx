import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';

import { BackButton, Header } from './HeaderView';

import { useRootStore } from 'stores/RootStore';

export const MobileHeader: React.FC = observer(() => {
  const {
    ui: {
      header: { visible, setRef, title, backLink },
    },
  } = useRootStore();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setRef(ref);
  }, [ref]);

  return visible ? (
    <Header ref={ref}>
      <BackButton link={backLink} />
      <h2>{title}</h2>
    </Header>
  ) : null;
});
