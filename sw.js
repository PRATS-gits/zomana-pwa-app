const CACHE_NAME = 'zomana-cache-v1';
const STATIC_CACHE_NAME = 'zomana-static-v1';
const DYNAMIC_CACHE_NAME = 'zomana-dynamic-v1';

// Assets that should be cached on install (core static assets)
const STATIC_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',
  './serviceWorkerRegistration.js',
  './favicon.ico',
  './placeholder.svg',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png'
];

// Install a service worker
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE_NAME)
        .then(cache => {
          console.log('Caching static assets');
          return cache.addAll(STATIC_ASSETS);
        }),
      // Create dynamic cache
      caches.open(DYNAMIC_CACHE_NAME)
        .then(cache => {
          console.log('Created dynamic cache');
        })
    ])
  );
});

// Listen for the SKIP_WAITING message from the PWAUpdateToast component
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Cache and return requests using a stale-while-revalidate strategy for most resources
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);
  
  // Handling navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('./offline.html');
        })
    );
    return;
  }
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip cross-origin requests and API requests
  if (
    !requestUrl.origin.includes(self.location.origin) || 
    requestUrl.pathname.includes('/api/')
  ) {
    return;
  }
  
  // For static assets - cache first, network as fallback
  if (
    requestUrl.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/) ||
    STATIC_ASSETS.includes(requestUrl.pathname.replace(/^\//, './'))
  ) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // If in cache, return from cache
          if (response) {
            return response;
          }
          
          // Otherwise fetch from network
          return fetch(event.request)
            .then(networkResponse => {
              // Cache a copy of the response
              const responseToCache = networkResponse.clone();
              caches.open(STATIC_CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
              
              return networkResponse;
            })
            .catch(error => {
              // For image requests, you could serve a fallback image
              if (event.request.destination === 'image') {
                return caches.match('./placeholder.svg');
              }
              
              throw error;
            });
        })
    );
    return;
  }
  
  // For other requests - Stale-while-revalidate strategy
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Even if we have a match in cache, start a fetch in the background to update cache
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            // Cache the new response for next time
            if (networkResponse.ok) {
              const responseToCache = networkResponse.clone();
              caches.open(DYNAMIC_CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return networkResponse;
          })
          .catch(error => {
            console.log('Fetch failed:', error);
            // Let the catch at the end handle it
            throw error;
          });
        
        // Return the cached response if we have one, otherwise wait for the network response
        return response || fetchPromise;
      })
      .catch(error => {
        console.log('Error serving request:', error);
        
        // If both cache and network fail
        if (event.request.destination === 'image') {
          return caches.match('./placeholder.svg');
        }
        
        // Return a default empty response for other resources
        return new Response('', {
          status: 408,
          headers: { 'Content-Type': 'text/plain' }
        });
      })
  );
});

// Update a service worker and clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [STATIC_CACHE_NAME, DYNAMIC_CACHE_NAME];
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control of all clients immediately
        return self.clients.claim();
      })
  );
}); 