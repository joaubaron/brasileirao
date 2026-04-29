const CACHE_VERSION = '29.04.2026-1257';
const CACHE_NAME = `brasileirao-${CACHE_VERSION}`;
const ASSETS = [
  '/brasileirao/manifest.json',
  '/brasileirao/icon-192.png',
  '/brasileirao/icon-512.png',
  '/brasileirao/brasil.png',
  '/brasileirao/bec.png',
  '/brasileirao/bola.png',
  '/brasileirao/fluminense/index.html',
  '/brasileirao/fluminense/meutime.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (!e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
