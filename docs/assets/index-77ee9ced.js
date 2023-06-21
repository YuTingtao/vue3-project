import{r as b,o as g,c as k,w as I,a as S,u as _,z as P,E as x,d as C,b as O,e as B,f as R,g as A,h as N,i as V,j as z,k as T,l as D,m as $,n as p}from"./vendor-6db90fbf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const H={__name:"App",setup(e){return(t,r)=>{const s=b("router-view"),n=x;return g(),k(n,{locale:_(P)},{default:I(()=>[S(s)]),_:1},8,["locale"])}}},q="modulepreload",F=function(e,t){return new URL(e,t).href},h={},u=function(t,r,s){if(!r||r.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=F(o,s),o in h)return;h[o]=!0;const i=o.endsWith(".css"),M=i?'[rel="stylesheet"]':"";if(!!s)for(let l=n.length-1;l>=0;l--){const d=n[l];if(d.href===o&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${M}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":q,i||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),i)return new Promise((l,d)=>{a.addEventListener("load",l),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function v(e,t={}){return e.forEach(r=>{if(r.name&&(t[r.name]=r.buttons||[]),r.children&&r.children.length>0)return v(r.children,t)}),t}function y(e,t="/login"){return e&&(t=e.path,e.children&&e.children.length>0)?y(e.children[0],t):t}const U=[{path:"/useCase",name:"useCase",redirect:"",title:"组件案例",icon:"document",hidden:0,buttons:[],children:[{path:"/svgIcon",name:"svgIcon",redirect:"",title:"svg图标",icon:"",hidden:0,buttons:[{name:"add"},{name:"edit"},{name:"delete"}]},{path:"/wangEditor",name:"wangEditor",redirect:"",title:"富文本编辑器",icon:"",hidden:0,buttons:[{name:"add"},{name:"edit"},{name:"delete"}]}]}],w=C("store",{state:()=>({token:"",userInfo:{},userMenus:[]}),getters:{flatMenus:e=>v(e.userMenus),firstMenuPath:e=>y(e.userMenus[0])},actions:{setLogin(e){this.token=e.token,this.userInfo=e.userInfo},setLogout(){this.token="",this.userInfo={}},getUserMenus(){this.userMenus=U}},persist:{enabled:!0,strategies:[{key:"store",storage:sessionStorage}]}});let f;function E(){if(!f){f=!0,setTimeout(()=>{f=!1},1e3);var e=new XMLHttpRequest;e.open("get","./version.json",!0),e.onreadystatechange=function(){if(e.readyState==4&&e.status==200){var t=JSON.parse(e.responseText);t.version!=sessionStorage.appVersion&&O.alert("检测到版本有更新，请刷新页面","版本更新提示",{callback:()=>{location.reload(!0)}}),sessionStorage.appVersion=t.version}},e.send()}}const W=[{path:"/",name:"index",component:()=>u(()=>import("./Index-1e27863a.js"),["./Index-1e27863a.js","./vendor-6db90fbf.js","./vendor-9aaceb77.css","./login-29b954dd.js","./Index-b8614ce5.css"],import.meta.url)},{path:"/useCase",name:"useCase",redirect:"",component:()=>u(()=>import("./Index-1e27863a.js"),["./Index-1e27863a.js","./vendor-6db90fbf.js","./vendor-9aaceb77.css","./login-29b954dd.js","./Index-b8614ce5.css"],import.meta.url),meta:{},children:[{path:"/svgIcon",name:"svgIcon",redirect:"",component:()=>u(()=>import("./SvgIcon-661cb36e.js"),["./SvgIcon-661cb36e.js","./vendor-6db90fbf.js","./vendor-9aaceb77.css","./plugin-vue_export-helper-c27b6911.js","./SvgIcon-857a5653.css"],import.meta.url),meta:{}},{path:"/wangEditor",name:"wangEditor",redirect:"",component:()=>u(()=>import("./WangEditor-60b61799.js"),["./WangEditor-60b61799.js","./vendor-6db90fbf.js","./vendor-9aaceb77.css","./WangEditor-2d99613a.css"],import.meta.url),meta:{}}]},{path:"/login",name:"login",component:()=>u(()=>import("./Login-fe46b244.js"),["./Login-fe46b244.js","./vendor-6db90fbf.js","./vendor-9aaceb77.css","./login-29b954dd.js","./plugin-vue_export-helper-c27b6911.js","./Login-950c5d27.css"],import.meta.url)}],m=B({history:R(),routes:W,scrollBehavior(e,t,r){return{top:0}}});m.beforeEach((e,t,r)=>{const s=w(),n=["login","404",...Object.keys(s.flatMenus)];!s.token&&e.path!=="/login"?r("/login"):n.includes(e.name)?r():(e.path!="/"&&e.path!="/404"&&A.error("暂无权限访问"),r(s.firstMenuPath))});m.onError(e=>{E()});const L=N();L.use(V);const J=["width","height"],K=["xlink:href","fill"],X={__name:"svgIcon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:"1em"},color:{type:String,default:"currentColor"},prefix:{type:String,default:"icon"}},setup(e){const t=e,r=z(()=>`#${t.prefix}-${t.name}`);return(s,n)=>(g(),T("svg",{class:"svg-icon","aria-hidden":"true",width:e.size,height:e.size},[D("use",{"xlink:href":_(r),rel:"external nofollow",fill:e.color},null,8,K)],8,J))}};if(typeof window<"u"){let e=function(){var t=document.body,r=document.getElementById("svg__icon__dom");r||(r=document.createElementNS("http://www.w3.org/2000/svg","svg"),r.style.position="absolute",r.style.width="0",r.style.height="0",r.id="svg__icon__dom",r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),r.innerHTML='<symbol  viewBox="0 0 1024 1024" id="icon-case"><path d="m49.971 346.317 441.959 255.18c6.553 3.892 13.926 5.735 21.504 5.735 7.372 0 14.745-1.843 21.299-5.734L976.69 346.317c13.312-7.783 21.504-21.504 21.504-37.069s-7.987-29.286-21.504-37.069L534.733 17c-13.107-7.578-29.696-7.578-42.803 0L49.97 272.178c-13.312 7.783-21.299 21.504-21.299 37.069s7.782 29.286 21.3 37.069zM513.23 63.693l425.165 245.555-425.165 245.35-425.165-245.35L513.229 63.693z" /><path d="M954.163 496.64 513.23 751.206 72.499 496.64c-12.288-7.168-27.853-2.867-35.02 9.42-7.169 12.289-2.868 27.854 9.42 35.022l466.535 269.312 466.33-269.312c12.287-7.168 16.383-22.733 9.42-35.021-7.168-12.288-22.938-16.589-35.02-9.421z" /><path d="M954.163 699.392 513.23 953.958 72.499 699.392c-12.288-7.168-27.853-2.867-35.02 9.42-7.169 12.289-2.868 27.854 9.42 35.022l466.535 269.312 466.33-269.312c12.287-7.168 16.383-22.733 9.42-35.021-7.168-12.288-22.938-16.589-35.02-9.421z" /></symbol>',t.insertBefore(r,t.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}const j={mounted(e,t){e.src&&(e.onerror=()=>{e.src=t.value,e.onerror=null})},updated(e,t){e.src&&(e.onerror=()=>{e.src=t.value,e.onerror=null})}},G=m.currentRoute,Q={mounted(e,t){const r=w(),s=t.value;r.flatMenus[G.value.name].some(o=>o.name==s)||e.parentNode.removeChild(e)}};function Y(e){e.directive("error",j),e.directive("permission",Q)}const c=$(H);c.config.errorHandler=(e,t,r)=>{E()};c.use(m);c.use(L);Y(c);for(let e in p)c.component(e,p[e]);c.component("svg-icon",X);c.mount("#app");export{m as r,w as u};