if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const u=e=>l(e,r),o={module:{uri:r},exports:t,require:u};s[r]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(n(...e),t)))}}define(["https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/./workbox-85077874"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7d7d782d8f8301c0730b520359778ec1"},{url:"assets/404.d8105da2.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.760dc323.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/help.html.7ecc0ed6.js",revision:null},{url:"assets/help.html.f6b7b99d.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.1908a631.js",revision:null},{url:"assets/index.html.34692fe0.js",revision:null},{url:"assets/index.html.cf283d42.js",revision:null},{url:"assets/index.html.e2fc4aba.js",revision:null},{url:"assets/Layout.5a21edde.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/style.e8e8fc80.css",revision:null},{url:"help.html",revision:"cf18ff46022bb3ea06bdca618535293a"},{url:"index.html",revision:"49dcf5ec75b608c679ec7baf99e16714"},{url:"zh/index.html",revision:"946953526b9ff76e55b7860b408c827b"}],{})}));
