import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { UserRow } from './UserRow';
import { TabPanel, TabPanelProps } from '../TabPanel';

import { CircleParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

interface Props extends TabPanelProps {
  status: Circle.Status;
}

export const UserTab: React.FC<Props> = observer(({ status, ...props }) => {
  const { circleId } = useParams<CircleParams>();
  const {
    userTab: { fetch, reset, users },
  } = usePageUiStore<PageUiStore.CircleUsers>();

  useEffect(() => {
    if (props.index === props.value) fetch(circleId, status);
    return () => reset();
  }, [props.value]);

  return (
    <TabPanel {...props}>
      {users.map(circleUser => (
        <UserRow key={circleUser.user.id} model={circleUser} />
      ))}
    </TabPanel>
  );
});
