var cacheName = '428587se.012s2Ss';


var arrayCacheResource = [
    '/5eb08c4b3300005c00c68f18',
    '0.chunk'];

    self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => cache.addAll([

        ]))
    );
});

self.addEventListener('activate', e => {
    const respuesta = caches.keys().then(keys => {
        keys.forEach(key => {
            if (key !== cacheName) {
                return caches.delete(key);
            }
        });
    });
    e.waitUntil(respuesta);
});

self.addEventListener('fetch', e => {

    const respuesta = caches.match(e.request)
        .then(res => {

            if (res) return res;
            return fetch(e.request).then(newResp => {

                caches.open(cacheName)
                    .then(cache => {
                        arrayCacheResource.forEach((resource) => {
                            if (e.request.url.includes(resource))
                                cache.put(e.request, newResp);
                        });
                    });
                return newResp.clone();
            });
        });
    e.respondWith(respuesta);

});

