const CACHE = "minweeei-rpg-v5-1-burgundy-refined";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./app-icon-192.png", "./app-icon-512.png", "./apple-touch-icon.png", "./assets/character-striped.png", "./assets/character-hiking.png", "./assets/character-office.png", "./assets/character-study.png", "./assets/character-running.png", "./assets/pixel-bottle.png", "./assets/pixel-scale.png", "./assets/pixel-salad.png", "./assets/burgundy-character-scene.jpg", "./assets/icon-home.png", "./assets/icon-look.png", "./assets/icon-scale.png", "./assets/icon-water.png", "./assets/icon-salad.png", "./assets/icon-store.png", "./assets/icon-coin.png", "./assets/icon-calendar.png", "./assets/icon-quest.png", "./assets/icon-bag.png", "./assets/icon-star.png", "./assets/icon-lock.png", "./assets/character-burgundy.png", "./assets/scene-autumn-study.png", "./assets/icon-weight-chart.png", "./assets/icon-diet.png"];
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
