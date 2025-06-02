'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin": "1970bad82ac8a264b99f8c202e39311a",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/MaterialIcons-Regular.otf": "f42bee195d1ad54ec0512caf2ff881e4",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/AssetManifest.json": "152d4d3171067626b612e4b5586ad8ec",
"assets/FontManifest.json": "527601dc920731fe38cf4dd5fe5e110b",
"assets/assets/support/bc_logo.png": "512a8286fc57170006a507ffb014b91d",
"assets/assets/support/sukses.png": "476aefa6c1c3ead96f3fdc210766323d",
"assets/assets/support/it_logo.png": "5f0de46a61fcfc68ddf3d33c0ec9ec89",
"assets/assets/support/logo_roam.png": "1c140869be3a5c9568f2f61a459f0dc0",
"assets/assets/support/flutter_black_white.png": "5eb9d435c2b5a10d4bb3f48f790f1315",
"assets/assets/support/it_logo.jpeg": "ec3197dff46f6459e28de97a6855cba6",
"assets/assets/support/logo_roamin.png": "20e8f96fc1191dc359aa56206b099ecc",
"assets/assets/base/dotenv.env": "a91d98103af0e449279477a96b213422",
"assets/assets/base/qris_onita.png": "d1640ba5c9456e4afc9fa99a08c611ac",
"assets/assets/dashboard/dash_home.png": "80695436a0b094df55d570c8a3c702fa",
"assets/assets/dashboard/dash_person.png": "d5d4cd41202343e819fca8e17accef50",
"assets/assets/dashboard/dash_info.png": "70425ffb7a295b103c4b9c50330d9367",
"assets/assets/icon/info_icon.png": "5693b293a9bc1ecaa1c1eb16867cc8ff",
"assets/assets/icon/new_document_upload.png": "8352d3f97723ada024e2ebf2343b43e5",
"assets/assets/icon/icon_min.png": "37819d8dc807199dcbaf23344635fbcc",
"assets/assets/icon/logo_2.png": "12b3391e426039b7448b8db22693a07e",
"assets/assets/icon/icon_plus.png": "1891278dcf04e2851f0b1e66dce9cb01",
"assets/assets/icon/ic_search.png": "e77b6e64ec2f4510ebc2911468f31cde",
"assets/assets/icon/default_image.png": "e563dda81a3648dccd933d8f59bf5b38",
"assets/assets/icon/logo.png": "5b4f5b234ffbfbd057bd2067e3e0a33b",
"assets/assets/icon/documentupload.png": "c9b88a418d8c135d5eeb90139f805cd9",
"assets/assets/icon/onita_logo.jpg": "51c247b0d4bb8841612bdbad6f15906d",
"assets/assets/icon/icon_search.png": "0a715734797f3475cf3e13c86fba9af0",
"assets/assets/icon/ic_filter.png": "5889184d6bc4e8a67580979c80566d82",
"assets/assets/icon/whatsapp.png": "d35cabe546776462886d5c1665df7a37",
"assets/assets/icon/icon_calendar.png": "42ce80fb7771bf83f5502133e3186f05",
"assets/assets/icon/logo_ticket.png": "96d1b205e62f524708047c4b002d7249",
"assets/assets/menu/menu_booking.png": "d87dbab31435463a2bc30e8b4ddd493c",
"assets/assets/menu/menu_web_payment.png": "5c71a8db430b2a8d31edb6949f9b1e0c",
"assets/assets/menu/menu_person.png": "2c41140a4be0a5330f07543331a8bc0f",
"assets/assets/menu/menu_printer.png": "c0c91a55eed3c17eccca525b1b15a976",
"assets/assets/menu/menu_report.png": "993243ead85bcde28654a239c9941bdc",
"assets/assets/menu/menu_invoice.png": "c6fadece12e01677d9e49ab258160643",
"assets/assets/menu/background.png": "16f5164cacb3886e917f46a16cae8831",
"assets/NOTICES": "212b76614b688aeb82d8441324f825d5",
"assets/AssetManifest.bin.json": "64f25c8d5b0a9bfee4ec9bc7ca0f384b",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"manifest.json": "8a2d0dbc6a6cbddf9609454298e6eed9",
"index.html": "bf84bd5ec2d689f900abc6472299fe92",
"/": "bf84bd5ec2d689f900abc6472299fe92",
"version.json": "3aec259ab96f707a771ab19ca50d6b57",
"main.dart.js": "5587ec5f25b4f91a971aab261b1cc9c8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
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
