'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "685a71d187a3f670dc891d5fd1b9f96d",
"assets/AssetManifest.bin.json": "ea297afca93b505791697cb840eb95e9",
"assets/AssetManifest.json": "e89d566a2d32ae275a1c511775174225",
"assets/assets/images/a.jpg": "334ce15c046f0c479c61eb8cabf5349e",
"assets/assets/images/b.jpg": "8e078deee74a53398b983bdfe40670bf",
"assets/assets/images/c.jpg": "a1cba19d7e63e9c112bf19538e7870cc",
"assets/assets/images/d.jpg": "6a5316ceb103ca1c9d73db4004e14979",
"assets/assets/images/e.jpg": "2a6b9fef2515ad487da66b4db66e529c",
"assets/assets/images/f.jpg": "a5985366485891a3a0a8b4069e5d1217",
"assets/assets/images/g.png": "66d9492b4938475e76114821487a0fc6",
"assets/assets/images/h.jpg": "dac05817cb6f8456302c0d306154c517",
"assets/assets/images/i.jpeg": "084aa54617cf31b9561248fb3af8a2df",
"assets/assets/images/j.jpg": "505aa3b37554833b3973640138f9ae0f",
"assets/assets/images/k.jpg": "5d77823030057872a4cfd700eff7a262",
"assets/assets/images/l.jpg": "f1e8fe9464541918cb20d7eee0a52195",
"assets/assets/images/m.jpg": "a29f66f3784955636b39554067ca37f3",
"assets/assets/images/n.jpg": "fd185b1cd159168e730bb1d8d49638d6",
"assets/assets/images/q1.jpg": "77fea61fe12e99a04493ba934bc678b0",
"assets/assets/images/q2.jpg": "ebeb76ea5f8ccf3b2c7ad1fb8923bd7b",
"assets/assets/images/q3.jpg": "3b4b530d6e4766f101aa057af99f8e3d",
"assets/assets/images/q4.jpg": "549f432917e75de62519d732fadad857",
"assets/assets/images/q5.jpg": "1eed38b1c92c328f0e59cd33037a760f",
"assets/assets/images/w.jpeg": "6adf3be512bc5f2b90bf1fe2266e6d0c",
"assets/assets/images/y.png": "119453c59a1734599042c9f51738ddda",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25A8%25D8%25AD%25D8%25B1.mp3": "528db870a7ae121dcf1872874c4c7b89",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25A8%25D9%258A%25D8%25AA.mp3": "adb06f2f46ac23b6c24d1a327ea285e8",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25AF%25D8%25B1%25D8%25B3.mp3": "b2eea6a0a93ac5702240725f6a728084",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B0%25D9%2587%25D8%25A8.mp3": "44a61e03c9deb018ab532115e5c1c9ca",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B2%25D9%2585%25D8%25B1%25D8%25AF.mp3": "07f1ac534f0a250448a0f732b8c98f26",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B3%25D8%25B1%25D9%258A%25D8%25B1.mp3": "485115772317740c0b58d61bc88aae81",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B3%25D9%2585%25D8%25A7%25D8%25A1.mp3": "395723fbd886b07563666ae20adc7552",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B4%25D8%25AC%25D8%25B1%25D8%25A9.mp3": "4cde3ffaec52a1bb92d99171c3605b42",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B4%25D9%2585%25D8%25B3%25D9%258A%25D8%25A9.mp3": "9384ed16670542e33d691831b0cde1a0",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B4%25D9%2585%25D8%25B3.mp3": "188620523a2e1d7ea74671a58c7a196d",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B4%25D9%2585%25D8%25B9%25D8%25A9.mp3": "207035a531be3cd6928d60f0c9b30747",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B5%25D8%25A8%25D8%25A7%25D8%25AD.mp3": "e10426422daa822453d74c214bc0f117",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B6%25D9%2588%25D8%25A1.mp3": "dc344e7c0a6f60ab363721b610d9d51d",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B7%25D8%25A7%25D9%2588%25D9%2584%25D8%25A9.mp3": "c760927dfd77bb2e7ed8a4ed20e9a9d6",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B8%25D8%25B1%25D9%2581.mp3": "cab0943fdcfc2ae40ba1e28f241edb4e",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D8%25B9%25D8%25B4%25D8%25A8.mp3": "8ec518b9dcf32e750c5602d798cfae55",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D9%2584%25D8%25B3%25D8%25A7%25D9%2586.mp3": "3ae134924e18f43bafc862f4a225e448",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D9%2584%25D8%25BA%25D8%25A9.mp3": "cde58c0e8ca48bb73fb7a197fdf059ed",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D9%2584%25D9%258A%25D9%2584.mp3": "7c39830b8d301d1e1693c54810f14bd2",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D9%2585%25D8%25A7%25D8%25A1.mp3": "2c37ce28cbf9bef0ec03a1d7a9afba45",
"assets/assets/sounds/%25D8%25A7%25D9%2584%25D9%2586%25D8%25AC%25D9%2585.mp3": "7e2c8c87b04046fb08b971020a556cc4",
"assets/assets/sounds/applause.mp3": "9f0de3c123dc0ede5d09c494dace5148",
"assets/assets/sounds/wrong.mp3": "7ec71282f635330a51961635d013f6ee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ec3060e090bbe521c4e848ccf6101a4e",
"assets/NOTICES": "b0edc47bf684f887411f256c3c8522be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "6104907521b441756bd7a950af4a6cdb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ee1231d7939e0289df42f6d33cfea2d",
"/": "9ee1231d7939e0289df42f6d33cfea2d",
"main.dart.js": "4e3a5a634fed43ed66d32e7ee8db2474",
"manifest.json": "e9a22d5111465d38fd89616bf8d553b4",
"version.json": "aa3dbb0505dcef332fbe3816a5a8be03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
