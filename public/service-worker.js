/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
console.log("Hi from your service-worker.js file!");

var urlsToCache = [
  "/",
  "/index.html",
  "/js/index.js",
  "/favicon.ico",
  "/manifest.webmanifest",
];

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/newbids"))
  );
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// fetch
self.addEventListener("fetch", (event) => {
  // cache successful requests to the API
  if (event.request.url.includes("/api/")) {
    event.respondWith(
      caches
        .open(DATA_CACHE_NAME)
        .then(async (cache) => {
          try {
            const response = await fetch(event.request);
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(event.request.url, response.clone());
            }
            return response;
          } catch (err) {
            return await cache.match(event.request);
          }
        })
        .catch((err) => console.log(err))
    );

    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }

//       return fetch(event.request).then(function (response) {
//         // Check if we received a valid response
//         if (
//           event.request.cache === "only-if-cached" &&
//           event.request.mode !== "same-origin"
//         ) {
//           return;
//         }

//         var responseToCache = response.clone();

//         caches.open(CACHE_NAME).then(function (cache) {
//           cache.put(event.request, responseToCache);
//         });

//         return response;
//       });
//     })
//   );
// });
self.addEventListener("activate", function (event) {
  var cacheAllowlist = ["static-cache-v1", "data-cache-v1"];

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            console.log("Removing old cache data", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
