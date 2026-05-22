/* Service worker — Manuel de la cuisson
 * Strategy:
 *   - On install: pre-cache the app shell (HTML pages + CSS + icons + manifest).
 *   - On fetch: cache-first for own-origin assets; network-first with cache fallback for fonts (Google Fonts CDN); pass-through otherwise.
 *   - On activate: drop old caches.
 * Bump CACHE_VERSION when shipping content updates.
 */

const CACHE_VERSION = 'manuel-cuisson-v2';
const APP_SHELL = [
  './',
  './index.html',
  './pilier-1-temperature.html',
  './pilier-2-humidite.html',
  './pilier-3-inertie.html',
  './epices.html',
  './viandes.html',
  './legumes.html',
  './biblio.html',
  './404.html',
  './manifest.json',
  './assets/style.css',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-maskable-512.png',
  './assets/favicon.png',
  './assets/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Google Fonts: network-first, fall back to cache
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // Same-origin: cache-first
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          // Only cache successful basic responses
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          }
          return res;
        }).catch(() => {
          // Offline fallback: when navigating, return cached index
          if (req.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
    );
    return;
  }

  // Default: just hit the network
  event.respondWith(fetch(req).catch(() => caches.match(req)));
});
