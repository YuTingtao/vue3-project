import{r as L,o as _,c as M,w as S,a as P,u as k,E as C,z as R,d as x,b as O,e as I,f as B,g as D,h as N,i as A,j as V,k as z,l as T,m as $,n as h}from"./vendor-171d93a1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const H={__name:"App",setup(e){return(t,n)=>{const s=L("router-view"),r=C;return _(),M(r,{locale:k(R)},{default:S(()=>[P(s)]),_:1},8,["locale"])}}},q="modulepreload",U=function(e,t){return new URL(e,t).href},g={},u=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=U(o,s),o in g)return;g[o]=!0;const i=o.endsWith(".css"),b=i?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const d=r[l];if(d.href===o&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${b}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":q,i||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),i)return new Promise((l,d)=>{a.addEventListener("load",l),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};function v(e,t={}){return e.forEach(n=>{if(n.path&&(t[n.path]=n.buttons||[]),n.children&&n.children.length>0)return v(n.children,t)}),t}function y(e,t="/login"){return e&&(t=e.path,e.children&&e.children.length>0)?y(e.children[0],t):t}const F=[{path:"",name:"",title:"使用案例",icon:"document",hidden:0,buttons:[],children:[{path:"/baseCase",name:"baseCase",title:"基础案例",icon:"",hidden:0,buttons:[{name:"add",title:"新增"},{name:"edit",title:"编辑"},{name:"delete",title:"删除"}]},{path:"/wangEditor",name:"wangEditor",title:"富文本编辑",icon:"",hidden:0,buttons:[{name:"add",title:"新增"},{name:"edit",title:"编辑"},{name:"delete",title:"删除"}]}]}],E=x("store",{state:()=>({token:"",userInfo:{},userMenus:[]}),getters:{flatMenus:e=>v(e.userMenus),firstMenuPath:e=>y(e.userMenus[0])},actions:{setLogin(e){this.token=e.token,this.userInfo=e.userInfo},setLogout(){this.token="",this.userInfo={}},getUserMenus(){this.userMenus=F}},persist:{enabled:!0,strategies:[{key:"store",storage:sessionStorage}]}}),W=[{path:"/",name:"index",component:()=>u(()=>import("./index-be0874a1.js"),["./index-be0874a1.js","./vendor-171d93a1.js","./vendor-5898e478.css","./login-59139a9d.js","./index-9a1892ce.css"],import.meta.url)},{path:"/useCase",name:"useCase",redirect:"",component:()=>u(()=>import("./index-be0874a1.js"),["./index-be0874a1.js","./vendor-171d93a1.js","./vendor-5898e478.css","./login-59139a9d.js","./index-9a1892ce.css"],import.meta.url),meta:{},children:[{path:"/baseCase",name:"baseCase",redirect:"",component:()=>u(()=>import("./index-47afb914.js"),["./index-47afb914.js","./vendor-171d93a1.js","./vendor-5898e478.css","./plugin-vue_export-helper-c27b6911.js","./index-b7d3aca7.css"],import.meta.url),meta:{}},{path:"/wangEditor",name:"wangEditor",redirect:"",component:()=>u(()=>import("./index-7e73ad32.js"),["./index-7e73ad32.js","./vendor-171d93a1.js","./vendor-5898e478.css","./index-2d99613a.css"],import.meta.url),meta:{}}]}];let m=!1;function p(e){if(!m){m=!0;var t=new XMLHttpRequest;t.open("get","./version.json?timestamp="+Date.now(),!0),t.onreadystatechange=function(){if(m=!1,t.readyState==4&&t.status==200){var n=JSON.parse(t.responseText);!e&&n.version!=sessionStorage.appVersion&&O.alert("检测到版本有更新，请刷新页面","版本更新提示",{callback:()=>{location.reload(!0)}}),sessionStorage.appVersion=n.version}},t.send()}}const j=[...W,{path:"/login",name:"login",component:()=>u(()=>import("./index-ed14d90f.js"),["./index-ed14d90f.js","./vendor-171d93a1.js","./vendor-5898e478.css","./login-59139a9d.js","./plugin-vue_export-helper-c27b6911.js","./index-0830e636.css"],import.meta.url)}],f=I({history:B(),routes:j,scrollBehavior(e,t,n){return{top:0}}});f.beforeEach((e,t,n)=>{const s=E(),r=["/login","/404",...Object.keys(s.flatMenus)];!s.token&&e.path!=="/login"?n("/login"):r.includes(e.path)?n():(e.path!="/"&&e.path!="/404"&&D.error("访问地址不存在"),n(s.firstMenuPath))});f.onError(e=>{p()});const w=N();w.use(A);const J=["width","height"],K=["xlink:href","fill"],X={__name:"SvgIcon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:"1em"},color:{type:String,default:"currentColor"},prefix:{type:String,default:"icon"}},setup(e){const t=e,n=V(()=>`#${t.prefix}-${t.name}`);return(s,r)=>(_(),z("svg",{class:"svg-icon","aria-hidden":"true",width:e.size,height:e.size},[T("use",{"xlink:href":n.value,rel:"external nofollow",fill:e.color},null,8,K)],8,J))}};if(typeof window<"u"){let e=function(){var t=document.body,n=document.getElementById("svg__icon__dom");n||(n=document.createElementNS("http://www.w3.org/2000/svg","svg"),n.style.position="absolute",n.style.width="0",n.style.height="0",n.id="svg__icon__dom",n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),n.innerHTML='<symbol  viewBox="0 0 1024 1024" id="icon-case"><path d="m49.971 346.317 441.959 255.18c6.553 3.892 13.926 5.735 21.504 5.735 7.372 0 14.745-1.843 21.299-5.734L976.69 346.317c13.312-7.783 21.504-21.504 21.504-37.069s-7.987-29.286-21.504-37.069L534.733 17c-13.107-7.578-29.696-7.578-42.803 0L49.97 272.178c-13.312 7.783-21.299 21.504-21.299 37.069s7.782 29.286 21.3 37.069zM513.23 63.693l425.165 245.555-425.165 245.35-425.165-245.35L513.229 63.693z" /><path d="M954.163 496.64 513.23 751.206 72.499 496.64c-12.288-7.168-27.853-2.867-35.02 9.42-7.169 12.289-2.868 27.854 9.42 35.022l466.535 269.312 466.33-269.312c12.287-7.168 16.383-22.733 9.42-35.021-7.168-12.288-22.938-16.589-35.02-9.421z" /><path d="M954.163 699.392 513.23 953.958 72.499 699.392c-12.288-7.168-27.853-2.867-35.02 9.42-7.169 12.289-2.868 27.854 9.42 35.022l466.535 269.312 466.33-269.312c12.287-7.168 16.383-22.733 9.42-35.021-7.168-12.288-22.938-16.589-35.02-9.421z" /></symbol>',t.insertBefore(n,t.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}const G={mounted(e,t){e.src&&(e.onerror=()=>{e.src=t.value,e.onerror=null})},updated(e,t){e.src&&(e.onerror=()=>{e.src=t.value,e.onerror=null})}},Q=f.currentRoute,Y={mounted(e,t){const n=E();if(typeof t.value=="object"){const{path:s,btn:r}=t.value;if(!r)n.flatMenus[s]||e.parentNode.removeChild(e);else{const o=n.flatMenus[s];(!o||!o.some(i=>i.name==r))&&e.parentNode.removeChild(e)}}else n.flatMenus[Q.value.path].some(r=>r.name==t.value)||e.parentNode.removeChild(e)}};function Z(e){e.directive("error",G),e.directive("permission",Y)}p("init");const c=$(H);c.config.errorHandler=(e,t,n)=>{p()};c.use(f);c.use(w);Z(c);for(let e in h)c.component(e,h[e]);c.component("svg-icon",X);c.mount("#app");console.log("node_env:","production");console.log("vite_env:",{BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1});export{X as _,f as r,E as u};
