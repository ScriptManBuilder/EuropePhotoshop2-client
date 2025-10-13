// Service Worker для кэширования и оптимизации производительности
const CACHE_NAME = 'elariosso-digital-v1';
const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        self.skipWaiting();
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        self.clients.claim();
      })
  );
});

// Стратегия кэширования
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Кэшируем статические ресурсы
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }

          return fetch(event.request)
            .then((response) => {
              // Проверяем валидность ответа
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // Клонируем ответ для кэширования
              const responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });

              return response;
            });
        })
    );
  }
});

// Обновление кэша для API запросов
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Кэширование изображений с стратегией Cache First
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request)
            .then((fetchResponse) => {
              const responseClone = fetchResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseClone);
                });
              return fetchResponse;
            });
        })
    );
  }
});