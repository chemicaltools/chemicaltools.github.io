/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "82e22f7c13f18f90e29ac878ab8514f4"
  },
  {
    "url": "assets/css/0.styles.57609e9c.css",
    "revision": "5778bc1aaff4bcf609860de514e18109"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c055a988.js",
    "revision": "7889ba59ce801f161a963d4f7c1333bf"
  },
  {
    "url": "assets/js/11.a1767532.js",
    "revision": "2ed2abeab7b72e58c716cc84de3ed38e"
  },
  {
    "url": "assets/js/2.ef716db9.js",
    "revision": "0d75ce1096af495439680cfa7b2d56e5"
  },
  {
    "url": "assets/js/3.a1fbf9f7.js",
    "revision": "28725efdcd2684b9748286996ebdb278"
  },
  {
    "url": "assets/js/4.4fc6abc9.js",
    "revision": "34b8512fec91fb02a47f7639d66438ac"
  },
  {
    "url": "assets/js/5.9b579c25.js",
    "revision": "82d9820f2353c3e4988cd65fe328b476"
  },
  {
    "url": "assets/js/6.53d36be5.js",
    "revision": "469d5deb802eaf65e640f86ca11a8351"
  },
  {
    "url": "assets/js/7.d9d72c41.js",
    "revision": "2f1543b8d0776e8389d7a57a49d3458a"
  },
  {
    "url": "assets/js/8.fb03a3f0.js",
    "revision": "53923f79d79fbfd21efe4ee9b4c87e84"
  },
  {
    "url": "assets/js/9.08e6bb1b.js",
    "revision": "f22325de42ea54ebc74357afd81f4221"
  },
  {
    "url": "assets/js/app.6dd93d79.js",
    "revision": "6fe0afead848c9cbd8622780b8a73fae"
  },
  {
    "url": "help.files/image001.png",
    "revision": "0e42fbf076b61369ac1240e86abb29f0"
  },
  {
    "url": "help.files/image002.jpg",
    "revision": "a71660d7666950478501f34301b430db"
  },
  {
    "url": "help.files/image003.png",
    "revision": "e33287b96380efac0af2c282cf074419"
  },
  {
    "url": "help.files/image004.jpg",
    "revision": "de0591914d35a1d7380fae4579db2653"
  },
  {
    "url": "help.files/image005.png",
    "revision": "101e16b3f9939ccc3c3d55ec4e434615"
  },
  {
    "url": "help.files/image006.jpg",
    "revision": "e5e04b3fda6d57d32fa1e49a862332ef"
  },
  {
    "url": "help.files/image007.png",
    "revision": "18195eafec018a8e2f4c5038f87ea9db"
  },
  {
    "url": "help.files/image008.jpg",
    "revision": "0cdc995388ffb70b5fd238edc4f82200"
  },
  {
    "url": "help.files/image009.png",
    "revision": "9a1588ecbd43d21be471c79fea2fff40"
  },
  {
    "url": "help.files/image010.jpg",
    "revision": "98d95a813e104ca9964d7d0280d0ee00"
  },
  {
    "url": "help.files/image011.png",
    "revision": "eced385fbd711d36eb94afa044d900ba"
  },
  {
    "url": "help.files/image012.jpg",
    "revision": "1ca3edead265dccf04deafd84d2c2bd7"
  },
  {
    "url": "help.files/image013.png",
    "revision": "6d4e5b82f63fcedf22752a4e46d6fe04"
  },
  {
    "url": "help.files/image014.jpg",
    "revision": "9515ef403e76965144826aac135b0e3a"
  },
  {
    "url": "help.files/image015.png",
    "revision": "468240a1b71b4eddcab9e7773a952a0f"
  },
  {
    "url": "help.files/image016.jpg",
    "revision": "a8a8daefee0e477dc626cb37ad610c52"
  },
  {
    "url": "help.files/image017.png",
    "revision": "bfbd08fda3056ec8c61cf82a37377d95"
  },
  {
    "url": "help.files/image018.jpg",
    "revision": "3626c6088538ebdd9b89d4a349731677"
  },
  {
    "url": "help.files/image019.gif",
    "revision": "c9cd84f8bc65b9b5db0832b161c434c7"
  },
  {
    "url": "help.files/image020.jpg",
    "revision": "37952812b6b0ce93cbd89613f193b77a"
  },
  {
    "url": "help.files/image021.jpg",
    "revision": "2a28ba989b91d2edae14cd36b2742d55"
  },
  {
    "url": "help.files/image022.jpg",
    "revision": "8a8075ab35fbd870b127f7f9fcb9d2bd"
  },
  {
    "url": "help.files/image023.jpg",
    "revision": "1bb1f8a96502809c06a149878c0f52fe"
  },
  {
    "url": "help.files/image024.jpg",
    "revision": "d306c668a217e2e4a99adef1ea62d462"
  },
  {
    "url": "help.files/image025.gif",
    "revision": "d8107c68219ff44dd491bd389b57b39c"
  },
  {
    "url": "help.files/image026.gif",
    "revision": "fe6fac9af7e6c7805b37d59996ef66f7"
  },
  {
    "url": "help.files/image027.jpg",
    "revision": "7a819f8f14b9f35366103f229c74c716"
  },
  {
    "url": "help.files/image028.jpg",
    "revision": "417d38c3a81a1d5de9d0089fbbf4ab7d"
  },
  {
    "url": "help.files/image029.gif",
    "revision": "c13dd35f8bc50fec8522e1eea4cf0493"
  },
  {
    "url": "help.files/image030.gif",
    "revision": "7bd4ea2fd526d4c04918aabfa20e056f"
  },
  {
    "url": "help.files/image031.jpg",
    "revision": "d2cbf0bf7bb3e0ab58be470173e1aef8"
  },
  {
    "url": "help.files/image032.jpg",
    "revision": "9527415b76dfd7226b79f45c9949a317"
  },
  {
    "url": "help.files/image033.jpg",
    "revision": "3fc1eef3062745fba2d56856d1cdf35d"
  },
  {
    "url": "help.files/image034.jpg",
    "revision": "5bc953e64e923314cab676bf9cf6b71d"
  },
  {
    "url": "help.files/image035.jpg",
    "revision": "d62760196c552071a1fdbb5b8f265875"
  },
  {
    "url": "help.files/image036.jpg",
    "revision": "b1da615d896776e23cfdbfdaac8c3e79"
  },
  {
    "url": "help.html",
    "revision": "dcfa3c6b455c13b69321474645932fc0"
  },
  {
    "url": "index.html",
    "revision": "e3ebe66864d025b582e1409ee1a892cb"
  },
  {
    "url": "zh/index.html",
    "revision": "6184f5108aa5fff866d792c37578dcbe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
