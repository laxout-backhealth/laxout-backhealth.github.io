'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "5c3c42c3742ab1b3bf92831a60f3e824",
"assets/AssetManifest.smcbin": "bbb11b937d133b3c64aec0367817908b",
"assets/assets/fonts/Oswald,Poppins/Hind_Siliguri/HindSiliguri-Bold.ttf": "09e7451bd892e6af09275b701369b454",
"assets/assets/fonts/Oswald,Poppins/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/images/1GymVorteil.png": "46fe7dc0cbf866b7e0a26d21b11e0ecc",
"assets/assets/images/1PhysioVorteil.png": "920e3d617ff880fd60df64a34fc1b718",
"assets/assets/images/1vorteilgym.png": "f91c3d100cdeb3f375cae08885715229",
"assets/assets/images/2.PhysioVorteil.jpeg": "85a91ac905efb127cd42b9c7f606d7c7",
"assets/assets/images/2GymVorteil.png": "41e31bf1a589ed1b00dd5fa8051edec3",
"assets/assets/images/3.PhysioVorteil.jpeg": "a00336c82281ef543c01937881878336",
"assets/assets/images/3GymVorteil.png": "bfad4c555043130404762826d1224bd2",
"assets/assets/images/4.PhysioVorteil.jpeg": "91e2175bf7b80c4e22f42dc81b84cd34",
"assets/assets/images/5.PhysioVorteil.png": "92a024d5f2f18625404b2387da435e68",
"assets/assets/images/aboutUs.png": "dfedda4612c070db407ccb9d693bbcd7",
"assets/assets/images/angebotPhysio.png": "0a546aea1e584183b6670f6e22e79b4e",
"assets/assets/images/antgebotGym.png": "7be45d5dc6d2febc52d7aac95de000bc",
"assets/assets/images/basti.jpeg": "d997f00a5284ea40e90c44000fc2d841",
"assets/assets/images/datenschutz.png": "04b564e53a4ea142670420ec7a5dbd45",
"assets/assets/images/datenschutz.svg": "7354cfd3b2d45a8b2338e4002d3b7f66",
"assets/assets/images/dennis.jpeg": "4ec643cb2fbee301c0100f95b43413aa",
"assets/assets/images/HPIllustration.jpeg": "2626549663926a5c1a906a448c328ba4",
"assets/assets/images/logo.png": "13638d90ead38467a0dbb311085e1d35",
"assets/assets/images/pathEnd.png": "445fbc17eb20a62103eb292f841919c1",
"assets/assets/images/pathMid.png": "c0b3deb93c51e1ea1977eede8a39b1a8",
"assets/assets/images/pathStart.png": "45075f91a29ebb57c5ec65e3b4ba60e1",
"assets/assets/images/PraxisCodeIllustration.jpeg": "d94a37aab9f212e879f2c6497c500ae9",
"assets/assets/images/Schritt2Illustration.png": "fbca44d02397993e217babfe5b8e86b4",
"assets/assets/images/Schritt3Illustration.jpeg": "964b2c27ac211c0d7e098f9f08da3fdf",
"assets/assets/images/Schritt4Illustration.png": "adec690039877ad62b7bfa186848f878",
"assets/assets/images/Schritt5Illustartion.jpeg": "29979613950b6a6bf48be0250d33b207",
"assets/assets/images/Waimakari.png": "15b398fd23d19d5f2064bebe7c80596f",
"assets/assets/texts/Datenschutzerklaerung.txt": "bcca6d3f0d276a772ed3b7724018240c",
"assets/FontManifest.json": "729ed696df9513182b927d215fcf80f9",
"assets/fonts/MaterialIcons-Regular.otf": "4c7c5a9ca34505f2ef07a53b055a3231",
"assets/NOTICES": "611addae060045139242f28ae3c83a72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "f29ce259449210c0021d70650097873a",
"canvaskit/canvaskit.wasm": "b821477188b1836443bcc911e4ab6e63",
"canvaskit/chromium/canvaskit.js": "a4552398e7eb819f30a495bad7fef865",
"canvaskit/chromium/canvaskit.wasm": "2adf05d96ca1f771bb50754f60216d18",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "8b6d925f0d0b8d0e2fe245f3c65b17cf",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f67fbaa57890e4b801af9f2a0e634818",
"/": "f67fbaa57890e4b801af9f2a0e634818",
"main.dart.js": "2179d5d2e0136ec5cecb7d6558f154c3",
"manifest.json": "992dca743c2f69aae4df4d131be5c2a1",
"version.json": "b7b834d92cbdf480e51105624e22d138"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
