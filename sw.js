/* RozliczanieTras — service worker: network-first, offline z cache */
const C='RozliczanieTras-2026-10-12z';
const A=['./RozliczanieTras.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./pdf-lib.min.js','./fontkit.umd.min.js','./archivo-400.ttf','./archivo-700.ttf','./crimson-400i.ttf','./crimson-700i.ttf','./pdfjs.min.js','./pdfjs.worker.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  if(new URL(e.request.url).origin!==self.location.origin)return; // API GitHub — zawsze z sieci, bez cache
  e.respondWith(fetch(e.request).then(r=>{const cl=r.clone();caches.open(C).then(c=>c.put(e.request,cl));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})));
});
