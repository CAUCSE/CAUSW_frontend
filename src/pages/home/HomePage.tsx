import { memo, useEffect } from 'react';

import { CircleLinks, HomeBoards } from './components';
import { PageUiStoreImpl } from './HomePageUiStore';

import { BodyScreen, GNB, Header, PageBody, PageStoreHOC } from '@/components';
import { usePageUiStore } from '@/hooks';
import { registerServiceWorker } from '@/utils/notification';
import { getToken } from 'firebase/messaging';
import { messaging } from '@/configs/firebase';
import { getAnalytics, logEvent } from 'firebase/analytics';

const HomePage: React.FC = memo(() => {
  const { fetch } = usePageUiStore<PageUiStore.Home>();

  useEffect(() => {
    fetch();
  }, [fetch]);

  const handleAllowNotification = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      registerServiceWorker();
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY,
      });
      // TODO: token을 서버에 보내기
      const analytics = getAnalytics();
      logEvent(analytics, 'event', {
        content_type: 'image',
        content_id: 'content_id',
        items: [{ name: 'Park' }],
      });
    } else {
      console.error('알림 권한 허용 안됨');
    }
  };

  handleAllowNotification();

  return (
    <>
      <Header title="동문 네트워크" />
      <PageBody>
        <BodyScreen>
          <CircleLinks />
          <HomeBoards />
        </BodyScreen>
      </PageBody>
      <GNB />
    </>
  );
});

export default PageStoreHOC(<HomePage />, { store: PageUiStoreImpl });
