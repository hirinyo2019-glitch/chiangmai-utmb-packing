// 圏外（機内・山の中）でも開けるように、アプリ本体とリストをキャッシュする
// ネット優先: 電波があれば常に最新のリスト、なければ前回の内容
const VERSION = "v1";
const CACHE = "cmutmb-packing-" + VERSION;
const CORE = ["./", "./index.html", "./list.txt", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  const key = url.pathname.endsWith("/list.txt") ? "./list.txt" : req;
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key, copy)); }
    return res;
  }).catch(() => caches.match(key, { ignoreSearch: true }).then(hit => hit || caches.match("./index.html"))));
});
