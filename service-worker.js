if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,i,l)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return r;case"module":return n;default:return s(e)}}))).then((s=>{const e=l(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/./workbox-2fdebd44"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"14c5869cd9bc49611715a6279e1fd260"},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/css/styles.a1038e6e.css",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/img/back-to-top.8b37f773.svg",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/205.6b46f3df.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/293.1eedff3b.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/491.67b65a3e.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/932.8c0a90f2.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/app.077336d7.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/runtime~app.78abaec7.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-2d0ad528.f27cb934.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-3706649a.3a58f53e.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-4911275f.dfaef461.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-8daa1a0e.6bf2ddf0.js",revision:null},{url:"help.html",revision:"0080897dcfc2eff9b7de76fdabc60afd"},{url:"index.html",revision:"df78c13b77c09d6c72eeb9da292f6f94"},{url:"zh/index.html",revision:"e85700d867a8b6db89fc5bfbd9a27d11"}],{})}));
