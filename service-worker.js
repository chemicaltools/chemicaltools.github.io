if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>l(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(n(...s),t)))}}define(["https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/./workbox-ec81a2a1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"db689bd7961f670ddc42b6477d9f79c2"},{url:"assets/404.18963187.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.a59813c0.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/help.html.022e5b07.js",revision:null},{url:"assets/help.html.25fb83ca.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.301af351.js",revision:null},{url:"assets/index.html.31937504.js",revision:null},{url:"assets/index.html.7116b1bf.js",revision:null},{url:"assets/index.html.9e6be8eb.js",revision:null},{url:"assets/Layout.cedac34f.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/style.39d5bbe5.css",revision:null},{url:"help.html",revision:"b883090b1d99d473bdfe4f1c5beecd0f"},{url:"index.html",revision:"d441184b6e187aac5a024e2907a00c3c"},{url:"zh/index.html",revision:"a0283b463a21d4fbc63a6aa8d490d5c3"}],{})}));
