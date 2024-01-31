self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  console.log('fcm sw activate..');
});

// FCM에서 받은 푸시 알림을 화면에 띄움
self.addEventListener('push', function (e) {
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;

  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image, // 웹 푸시 이미지는 icon
    tag: resultData.tag,
  };

  console.log(resultData.title, {
    body: resultData.body,
    icon: resultData.image, // 웹 푸시 이미지는 icon
    tag: resultData.tag,
  });

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 푸시알림 클릭 시 이동할 URL
self.addEventListener('notificationclick', function (event) {
  const url = '/home';
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});
