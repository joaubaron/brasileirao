const CACHE_VERSION = '04.05.2026-1010';
const CACHE_NAME = `brasileirao-${CACHE_VERSION}`;

const ASSETS = [
  '/brasileirao/icon-192.png',
  '/brasileirao/icon-512.png',
  '/brasileirao/brasil.png',
  '/brasileirao/bec.png',
  '/brasileirao/fluminense/manifest.json',
  '/brasileirao/fluminense/index.html',
  '/brasileirao/fluminense/meutime.png',
];

// INSTALA
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// ATIVA
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter(k => k !== CACHE_NAME)
        .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// FETCH
self.addEventListener('fetch', e => {
  if (!e.request.url.startsWith(self.location.origin)) return;

  // 🚫 NÃO CACHEAR API DO FLUMINENSE
  if (e.request.url.includes('/fluminense')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // ✅ CACHE NORMAL PRO RESTO
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request);
    })
  );
});
