'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3a96c425e7e1ffc11ecf48aee5d436ec",
"/": "3a96c425e7e1ffc11ecf48aee5d436ec",
"main.dart.js": "8803e8ebd1f7c93244a177e451166960",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ff8bbd1bbdd0b13f2633549da565c82",
".git/config": "0e81a6c950566e74461cf36ab6345c91",
".git/objects/0d/caa24ba1cab714482f42da4ed2d5716b1b7228": "48d9db44ddf5512b8561eabfaa910ac2",
".git/objects/59/8132114ef6b34707789cd6df67b2423b5783eb": "cff41f103791c7506547e74e68bb3615",
".git/objects/57/5c9e4d91944918d6b532c0cb14724c432adf3a": "47fe29f63639f96ee6e4848ba6e15ca2",
".git/objects/3b/980dec3e98e6418e6ef9af0f7b6b6c3ac336c9": "0fe4e2888186b38e741afc38eada679b",
".git/objects/3c/27c76db567272b608b997f70fb5aad9f8b6fac": "3b50bd4d27d8e5fa11a6e64f2c4ef31c",
".git/objects/3d/50c794eb0bb6ed7f19133b4afad9f0cf3671aa": "e05e2483596f35b1e62df5ea92fc176f",
".git/objects/0b/6178c289c95f4e59d40a2e3b7c5e394bc235a6": "ea14c0f5c79bf732c9dfe1d851c72134",
".git/objects/a3/5f5e7dfba82ef97afc74f66656c926edb7b036": "f6b34dcf68765f2e2e8eea2d283dcd92",
".git/objects/d7/c3dbda3220f956b2c5619088538e87095c07fd": "7fa78c16325fccd393a073a186de8c2d",
".git/objects/d7/9ce988be2b467788b4a69fd01b1097c716f6c3": "52155c86597cd498a64f4e979b79590d",
".git/objects/df/58f1682d446e4f1a7ce9ae51aea252e36c08c2": "4cbe76daa5f476351e8428319ca2282e",
".git/objects/eb/7f48516a3ebc7fb9bb191e95bc8debdfa1f467": "c95fcbc99613d88472575301c92efecb",
".git/objects/ee/2276ca85f085ddc31da59c15cd86ed749e4fd5": "3d7acaf659695d22cc626a18194ee738",
".git/objects/e4/583bf7c3f4f6f10cee1408efb4418500a32120": "71bdf5b79f405e49f26d46908c36aa3c",
".git/objects/4b/43e22868501b705d2088688bfdc0b331d721d5": "fbd02fc73ec5b2b35f8f028e206f2f85",
".git/objects/pack/pack-5da153a71b9d13a519f9b8261703fcd8e929b967.pack": "0dfd44eefcdd258b2b48e1a6b75e5bfb",
".git/objects/pack/pack-5da153a71b9d13a519f9b8261703fcd8e929b967.idx": "1f7e82017331717e9d82436a1312e6a6",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/17/1954a408347ff9e56a8c8a0a4680524ba1b27a": "d5ca05a1f86c5cee87c6496ba192d23e",
".git/objects/4d/5137776c2ed1d6f8cb7f27e37e4b9bc88a034c": "e579c70d95b232de7962e81e22ef9c07",
".git/objects/2a/c9d64cbbe00e732f659caf2408215815c38d85": "561e0464fbf672ad250c4c02a4c84f91",
".git/objects/43/02ad3f4a62f1e66ac282f6058d6a0734135ed5": "babafa7bd57f1484e5278921d5dd6580",
".git/objects/6b/6728f528001e3620b4d78717a5a19f25328b39": "0e89c3121945ea408bb9b458c3b82563",
".git/objects/5d/eb7f39f95c40248921891b24a10a8915ebf0cb": "ee329f4261cbe4240b7124acd32da744",
".git/objects/5d/b568129229a1e2b7398bf62a51bc18e80093c1": "a395798b27a70e6a95ed28cf1cf7825a",
".git/objects/3a/3d222a0bdd150192d03de258f9f84fc79b62af": "1fe81d0c854f30492eb489722a758335",
".git/objects/5e/fc810f3108efad028849e6e257eb30373e10df": "ad21b323bdb01b5a0f82367c41baa711",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/dc/0564161275f01b5f673ec396460477a41744cb": "de0b51598a040a810f4dc22cda520de9",
".git/objects/af/df074196c7ada2388c58f8532dc87f18732039": "8c0b9286738fbdc126c1aa13cf503316",
".git/objects/db/13c43372817935066f5933afc793296fe31b4b": "6fe5bdbddd24a06681211ba18d9b0a88",
".git/objects/ea/b160895d90a590d53e5cda4bfef23ec8f775d8": "74181d4130e40545fbd2663ce5d4a996",
".git/objects/ea/38919f74603af9a0a3e4a1ea5c819338687983": "fcc06afafcfdfad21015b13c543feb9f",
".git/objects/f9/5afede1ece075e6ea7a8d57505ce2f5f7f2f98": "df30f37c154dc81b89aac3800e67406c",
".git/objects/ce/7ae53947a1d331bcd0a336f7bb8ee2160f45ac": "9d9ebe34b6ef1d3faf8ff85060853ca3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/84/70ab46d933f6e8d1fa12387578b5f7964ddb2c": "0cc5057f2ad49802c8ac460181c2f1b9",
".git/objects/12/c57d334967af30ac540a4c2e006a279616ee7d": "bb74a5086221f205c59c587be23ce0a7",
".git/objects/85/797949a66218dc988df10c89893bfd9a605b31": "3888baa182d8c6c66d5cfb21450533e9",
".git/objects/85/b223d57ed8da57da55f864a5169d134d0334c5": "e1942193764793402fa6389dd65bc52b",
".git/objects/82/b551b5bdeb5d5ef307f44bda3b39f6ab7ba8f2": "c9ddfa06fb779f01c41372009e871661",
".git/objects/40/8a0b061ebcc101a903646b239bdd5d75f1ae2d": "820918ee9260f543b352869ccd5aa147",
".git/objects/47/b81304d5bac2967b12f082d7fce57d97a869e7": "c89128f7f9f6679b71399f0abd3d48db",
".git/objects/13/0f79875dfa884aa960a17198d946f88e332bd8": "d7d3ca3faf3cff688093c2c14a41a43f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f00fb6b537f00d90925aaad58b3aac3",
".git/logs/refs/heads/master": "7f00fb6b537f00d90925aaad58b3aac3",
".git/logs/refs/remotes/origin/HEAD": "591a74d536d64346172818a31e5c60d0",
".git/logs/refs/remotes/origin/master": "877f69e87e0d9ea886296d9532d66aca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "e186458f5f0ea3016e4bfaee00cd42c1",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "e186458f5f0ea3016e4bfaee00cd42c1",
".git/index": "7428fea96a110696137f6d62f314ba19",
".git/packed-refs": "a714e7a8d01fa183a97264d351ef9e49",
".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "ba4e39b0b6ed8f64671e85798cfb56d7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
