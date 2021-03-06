// Import helper script at top of our service worker:
importScripts('analytics-helper.js');

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'ON_WINDOW_LOAD') {
    sendAnalyticsEvent('load', 'window');
  }
});


// self.addEventListener('install', event => {
//   console.info('SW installing');
//   // self.skipWaiting();
//   //
//   // event.waitUntil(
//   //   // caching etc
//   // );
// });

// workbox.routing.registerRoute(
//   /\.(?:png|gif|jpg|jpeg|svg)$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   }),
// );

// // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
// workbox.routing.registerRoute(
//   /^https:\/\/fonts\.googleapis\.com/,
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'google-fonts-stylesheets',
//   })
// );
//
// // Cache the underlying font files with a cache-first strategy for 1 year.
// workbox.routing.registerRoute(
//   /^https:\/\/fonts\.gstatic\.com/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'google-fonts-webfonts',
//     plugins: [
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200],
//       }),
//       new workbox.expiration.Plugin({
//         maxAgeSeconds: 60 * 60 * 24 * 365,
//         maxEntries: 30,
//       }),
//     ],
//   })
// );
