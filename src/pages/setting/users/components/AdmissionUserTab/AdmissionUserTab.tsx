import { useEffect } from 'react';

import { TabPanel, TabPanelProps } from '../TabPanel';

import { usePageUiStore } from '@/hooks';

export const AdmissionUserTab: React.FC<TabPanelProps> = props => {
  const {
    admission: { fetch },
  } = usePageUiStore<PageUiStore.SettingUsers>();

  useEffect(() => {
    fetch();
  }, []);

  return <TabPanel {...props}>1</TabPanel>;
};
