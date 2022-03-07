import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { TabPanel, TabPanelProps } from '../TabPanel';
import { AdmissionUserRow } from './AdmissionUserRow';

import { CircleParams } from '@/configs/path';
import { usePageUiStore } from '@/hooks';

export const AdmissionUserTab: React.FC<TabPanelProps> = observer(props => {
  const { circleId } = useParams<CircleParams>();
  const {
    admissionTab: { fetch, reset, users },
  } = usePageUiStore<PageUiStore.CircleUsers>();

  useEffect(() => {
    if (props.index === props.value) fetch(circleId);
    return () => reset();
  }, [props.value]);

  return (
    <TabPanel {...props}>
      {users.map(circleUser => (
        <AdmissionUserRow key={circleUser.user.id} model={circleUser} />
      ))}
    </TabPanel>
  );
});
