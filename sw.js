self.addEventListener('install', (e) => {
  console.log('Loksewa App Ready');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});

