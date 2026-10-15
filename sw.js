const CACHE = "minweeei-rpg-v3-1";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./app-icon-192.png", "./app-icon-512.png", "./apple-touch-icon.png", "./assets/character-striped.png", "./assets/character-hiking.png", "./assets/character-office.png", "./assets/character-study.png", "./assets/character-running.png", "./assets/pixel-bottle.png", "./assets/pixel-scale.png", "./assets/pixel-salad.png"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match("./index.html"))));
});
