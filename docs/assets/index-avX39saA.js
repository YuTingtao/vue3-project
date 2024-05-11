import{r as O,o as b,c as C,w as V,a as A,u as x,z as H,E as S,d as R,b as k,e as z,f as I,g as B,h as D,i as T,j,k as N,l as U,m as $,n as _}from"./vendor-hgDvt3Dr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const q={__name:"App",setup(e){return(o,t)=>{const i=O("router-view"),r=S;return b(),C(r,{locale:x(H)},{default:V(()=>[A(i)]),_:1},8,["locale"])}}},F="modulepreload",W=function(e,o){return new URL(e,o).href},g={},a=function(o,t,i){let r=Promise.resolve();if(t&&t.length>0){const n=document.getElementsByTagName("link");r=Promise.all(t.map(s=>{if(s=W(s,i),s in g)return;g[s]=!0;const u=s.endsWith(".css"),M=u?'[rel="stylesheet"]':"";if(!!i)for(let d=n.length-1;d>=0;d--){const m=n[d];if(m.href===s&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${M}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":F,u||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),u)return new Promise((d,m)=>{l.addEventListener("load",d),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}return r.then(()=>o()).catch(n=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n})};function E(e){const o={};return e.forEach(t=>{if(t.path&&(o[t.path]=t),Array.isArray(t.children)){const i=E(t.children);Object.keys(i).forEach(r=>{o[r]=i[r]})}}),o}function w(e){return Array.isArray(e.children)?w(e.children[0]):e.path||"/login"}const L=[{path:"/useCase",component:()=>a(()=>import("./ModuleLayout-vOzXz8IF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),meta:{type:0,title:"使用案例",icon:"document",visible:1,buttons:[],activePath:"",parentPath:""},children:[{path:"/useCase/base",component:()=>a(()=>import("./index--nNkz7I6.js"),__vite__mapDeps([4,2,3,1,5]),import.meta.url),meta:{type:1,title:"基础案例",icon:"",visible:1,buttons:["add","edit","delete"],activePath:"",parentPath:""}},{path:"/useCase/baseAdd",component:()=>a(()=>import("./index-wTSEZhTa.js"),__vite__mapDeps([6,2,3]),import.meta.url),meta:{type:1,title:"新增",icon:"",visible:0,buttons:[],activePath:"/useCase/base",parentPath:"/useCase/base"}},{path:"/useCase/wangEditor",component:()=>a(()=>import("./index-8NU3prV7.js"),__vite__mapDeps([7,2,3,8]),import.meta.url),meta:{type:0,title:"富文本编辑",icon:"",visible:1,buttons:[],activePath:"",parentPath:""}}]},{path:"/system",component:()=>a(()=>import("./ModuleLayout-vOzXz8IF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),meta:{type:0,title:"系统设置",icon:"setting",visible:1,buttons:[],activePath:"",parentPath:""},children:[{path:"/system/menu",component:()=>a(()=>import("./index-_8qHGSW0.js"),__vite__mapDeps([9,2,3,1,10]),import.meta.url),meta:{type:1,title:"菜单设置",icon:"",visible:1,buttons:[],activePath:"",parentPath:""}}]}],v=R("store",{state:()=>({token:"",userInfo:{},userMenus:[]}),getters:{menuObj(e){return E(e.userMenus)},firstMenu(e){return e.userMenus.length<1?"/login":w(e.userMenus[0])}},actions:{setLogin(e){this.token=e.token,this.userInfo=e.userInfo},setLogout(){this.token="",this.userInfo={}},getUserMenus(){return new Promise((e,o)=>{this.userMenus=L,e()})}},persist:{enabled:!0,strategies:[{key:"store",storage:sessionStorage}]}});let h;function p(){const e=new XMLHttpRequest;e.open("get","./version.json?t="+Date.now(),!0),e.onreadystatechange=function(){if(e.readyState==4&&e.status==200){const o=JSON.parse(e.responseText);if(!h){h=o.version;return}h!=o.version&&(h=o.version,k.alert("检测到版本有更新，请点击确定刷新页面","提示").then(()=>{location.reload(!0)}))}},e.send()}function J(){p(),setInterval(()=>{p()},3e5)}const K=[{path:"/",name:"layout",component:()=>a(()=>import("./index-nrfCBQE4.js"),__vite__mapDeps([11,2,3,12,13]),import.meta.url),children:[...L]},{path:"/login",name:"login",component:()=>a(()=>import("./index-tna1XUOX.js"),__vite__mapDeps([14,2,3,12,1,15]),import.meta.url)}],f=z({history:I(),routes:K,scrollBehavior(e,o,t){return{top:0}}});f.beforeEach((e,o)=>{const t=v(),i=["/login",...Object.keys(t.menuObj)];if(!t.token&&e.path!=="/login")return"/login";if(!i.includes(e.path))return e.path!="/"&&B.error("访问地址不存在"),t.firstMenu});f.onError(e=>{console.error(e),p()});const P=D();P.use(T);const X=["width","height"],G=["xlink:href","fill"],Q=Object.assign({name:"SvgIcon"},{__name:"SvgIcon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:"1em"},color:{type:String,default:"currentColor"},prefix:{type:String,default:"icon"}},setup(e){const o=e,t=j(()=>`#${o.prefix}-${o.name}`);return(i,r)=>(b(),N("svg",{class:"svg-icon","aria-hidden":"true",width:e.size,height:e.size},[U("use",{"xlink:href":t.value,rel:"external nofollow",fill:e.color},null,8,G)],8,X))}});if(typeof window<"u"){let e=function(){var o=document.body,t=document.getElementById("svg__icon__dom");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="svg__icon__dom",t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),t.innerHTML='<symbol  viewBox="0 0 1024 1024" id="icon-delete"><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-document"><path fill="currentColor" d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-edit"><path fill="currentColor" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z" /><path fill="currentColor" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-house"><path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-setting"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357 357 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a352 352 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357 357 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294 294 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293 293 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294 294 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288 288 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293 293 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a288 288 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-user"><path fill="currentColor" d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0" /></symbol>',o.insertBefore(t,o.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}const Y={mounted(e,o){e.src&&(e.onerror=()=>{e.src=o.value,e.onerror=null})},updated(e,o){e.src&&(e.onerror=()=>{e.src=o.value,e.onerror=null})}},Z=f.currentRoute,ee={mounted(e,o){const t=v(),{buttons:i=[]}=t.menuObj[Z.value.path].meta;i.some(r=>r===o.value)||e.parentNode.removeChild(e)}};function te(e){e.directive("error",Y),e.directive("perm",ee)}var oe={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};J();const c=$(q);c.config.errorHandler=(e,o,t)=>{console.error(e),p()};c.use(f);c.use(P);te(c);for(let e in _)c.component(e,_[e]);c.component("svg-icon",Q);const y=v();y.token&&y.getUserMenus();c.mount("#app");console.log("node_env:","production");console.log("vite_env:",oe);export{Q as _,L as a,f as r,v as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ModuleLayout-vOzXz8IF.js","./plugin-vue_export-helper-x3n3nnut.js","./vendor-hgDvt3Dr.js","./vendor-lP5hR-eC.css","./index--nNkz7I6.js","./index-bUXvy-2y.css","./index-wTSEZhTa.js","./index-8NU3prV7.js","./index-jSNYJn0A.css","./index-_8qHGSW0.js","./index-GPXS9TCH.css","./index-nrfCBQE4.js","./login-tokNfdOw.js","./index-zhmVrLCW.css","./index-tna1XUOX.js","./index-Zk3iEJwX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}