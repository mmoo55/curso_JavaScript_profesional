const VERSION = 'v1';

/* self es como el this pero específico para los service-workers */
self.addEventListener('install', event => {     /* se llmaa cuando el navegador instale el service-worker */
    event.waitUntil(precache());    /* Agarramos lo que esta en cache para regresarlo al navegador */
});

self.addEventListener('fetch', event => {
    const request = event.request;      /* Extraemos la petición */
    // get; solo trabajamos con el método GET, los otros nos traen datos que no necesitamos guardar en cache
    if (request.method !== 'GET') {
        return;     /* No hacemos nada y el request seguir el internet */
    }

    // Buscar en cache
    event.respondWith(cachedResponse(request));

    // Actualizar el cache
    event.waitUntil(updateCache(request));
});

async function precache() {
    const cache = await caches.open(VERSION);       /* Nos da una instancia del cache que se llama VERSION */
    /* Añadimos los recursos */
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/ejercicio.mp4',
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);    /* Consulta si el cache ya tiene una copia que le corresponde al request, si es no devuelve undefined */
    return response || fetch(request);      /* En caso de que response sea undefined, constesta con lo que nos de la red (fetch(request)) */
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}
