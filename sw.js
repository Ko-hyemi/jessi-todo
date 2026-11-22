// 설치용 최소 서비스 워커: 아무것도 저장하지 않고 그대로 인터넷에서 받아 옴 (할 일은 항상 최신)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
