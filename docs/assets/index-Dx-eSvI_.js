const __vite__fileDeps=["./ModuleLayout-CgWqgBuK.js","./plugin-vue_export-helper-DlAUqK2U.js","./@vue-MCHm96jj.js","./index-DyMUIUpm.js","./element-plus-BFcDWg1f.js","./lodash-es-Rc7wuZoG.js","./async-validator-DKvM95Vc.js","./@vueuse-BBkpAsxl.js","./@element-plus-BwAoTnwU.js","./@ctrl-r5W6hzzQ.js","./@popperjs-D9SI2xQl.js","./normalize-wheel-es-B6fDCfyv.js","./element-plus-beRb6qDi.css","./vue-router-eHBfJRM6.js","./pinia-C7Q_MLg3.js","./pinia-plugin-persist-J3Q2VqHx.js","./lazysizes-DIA6Q0hx.js","./index-D9mz3mDa.css","./index-5v9KjRCQ.js","./@wangeditor-BPsdovTf.js","./@wangeditor-ClYh1QsV.css","./index-CNI1gmfQ.css","./index-B7o1GKQf.js","./index-uvfzALbo.css","./index-t01MUGOI.js","./index-Y9dL1MId.css","./index-nsAlKrEd.js","./loginApi-BrAUETIt.js","./axios-B4uVmeYG.js","./index-D3t9BGxg.css","./index-EAu9U0X0.js","./index-JxUpTlpw.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ab as A,o as w,R as C,Q as x,M as H,u as k,y as z,c as R,a as B,am as I}from"./@vue-MCHm96jj.js";import{z as D,E as j,a as T}from"./element-plus-BFcDWg1f.js";import{c as N,a as U}from"./vue-router-eHBfJRM6.js";import{d as $,c as q}from"./pinia-C7Q_MLg3.js";import{i as F}from"./pinia-plugin-persist-J3Q2VqHx.js";import"./lazysizes-DIA6Q0hx.js";import{E as W}from"./@element-plus-BwAoTnwU.js";import"./lodash-es-Rc7wuZoG.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BBkpAsxl.js";import"./@ctrl-r5W6hzzQ.js";import"./@popperjs-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const J={__name:"App",setup(e){return(t,o)=>{const i=A("router-view"),r=j;return w(),C(r,{locale:k(D)},{default:x(()=>[H(i)]),_:1},8,["locale"])}}},K="modulepreload",Q=function(e,t){return new URL(e,t).href},y={},c=function(t,o,i){let r=Promise.resolve();if(o&&o.length>0){const n=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),g=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(o.map(a=>{if(a=Q(a,i),a in y)return;y[a]=!0;const m=a.endsWith(".css"),S=m?'[rel="stylesheet"]':"";if(!!i)for(let d=n.length-1;d>=0;d--){const p=n[d];if(p.href===a&&(!m||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${S}`))return;const l=document.createElement("link");if(l.rel=m?"stylesheet":K,m||(l.as="script",l.crossOrigin=""),l.href=a,g&&l.setAttribute("nonce",g),document.head.appendChild(l),m)return new Promise((d,p)=>{l.addEventListener("load",d),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>t()).catch(n=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n})};function P(e){const t={};return e.forEach(o=>{if(o.path&&(t[o.path]=o),Array.isArray(o.children)){const i=P(o.children);Object.keys(i).forEach(r=>{t[r]=i[r]})}}),t}function L(e){return Array.isArray(e.children)?L(e.children[0]):e.path||"/login"}const X=[{path:"/useCase",component:()=>c(()=>import("./ModuleLayout-CgWqgBuK.js"),__vite__mapDeps([0,1,2]),import.meta.url),meta:{type:0,title:"使用案例",icon:"document",visible:1,buttons:[],activePath:"",parentPath:""},children:[{path:"/useCase/base",component:()=>c(()=>import("./index-DyMUIUpm.js"),__vite__mapDeps([3,4,2,5,6,7,8,9,10,11,12,13,1,14,15,16,17]),import.meta.url),meta:{type:1,title:"基础案例",icon:"",visible:1,buttons:["add","edit","delete"],activePath:"",parentPath:""}},{path:"/useCase/wangEditor",component:()=>c(()=>import("./index-5v9KjRCQ.js"),__vite__mapDeps([18,4,2,5,6,7,8,9,10,11,12,19,20,13,14,15,16,21]),import.meta.url),meta:{type:1,title:"富文本编辑",icon:"",visible:1,buttons:[],activePath:"",parentPath:""}},{path:"/useCase/whiteBoard",component:()=>c(()=>import("./index-B7o1GKQf.js"),__vite__mapDeps([22,4,2,5,6,7,8,9,10,11,12,23]),import.meta.url),meta:{type:1,title:"画板/白板",icon:"",visible:1,buttons:[],activePath:"",parentPath:""}}]}],G=[{path:"/system",component:()=>c(()=>import("./ModuleLayout-CgWqgBuK.js"),__vite__mapDeps([0,1,2]),import.meta.url),meta:{type:0,title:"系统设置",icon:"setting",visible:1,buttons:[],activePath:"",parentPath:""},children:[{path:"/system/menu",component:()=>c(()=>import("./index-t01MUGOI.js"),__vite__mapDeps([24,4,2,5,6,7,8,9,10,11,12,13,1,14,15,16,25]),import.meta.url),meta:{type:1,title:"菜单设置",icon:"",visible:1,buttons:[],activePath:"",parentPath:""}}]}],O=[...X,...G],M=$("store",{state:()=>({token:"",userInfo:{},userMenus:[]}),getters:{menuObj(e){return P(e.userMenus)},firstMenu(e){return e.userMenus.length<1?"/login":L(e.userMenus[0])}},actions:{setLogin(e){this.token=e.token,this.userInfo=e.userInfo},setLogout(){this.token="",this.userInfo={}},getUserMenus(){return new Promise((e,t)=>{this.userMenus=O,e()})}},persist:{enabled:!0,strategies:[{key:"store",storage:sessionStorage}]}});let f;function h(){const e=new XMLHttpRequest;e.open("get","./version.json?t="+Date.now(),!0),e.onreadystatechange=function(){if(e.readyState==4&&e.status==200){const t=JSON.parse(e.responseText);if(!f){f=t.version;return}f!=t.version&&(f=t.version,T.alert("检测到版本有更新，请点击确定刷新页面","提示").then(()=>{location.reload(!0)}))}},e.send()}function Y(){h(),setInterval(()=>{h()},3e5)}const Z=[{path:"/",name:"layout",component:()=>c(()=>import("./index-nsAlKrEd.js"),__vite__mapDeps([26,4,2,5,6,7,8,9,10,11,12,13,27,28,14,15,16,29]),import.meta.url),children:[...O]},{path:"/login",name:"login",component:()=>c(()=>import("./index-EAu9U0X0.js"),__vite__mapDeps([30,4,2,5,6,7,8,9,10,11,12,13,27,28,1,14,15,16,31]),import.meta.url)}],_=N({history:U(),routes:Z,scrollBehavior(e,t,o){return{top:0}}});_.beforeEach((e,t)=>{const o=M(),i=Object.keys(o.menuObj);if(!o.token&&e.path!=="/login")return"/login";if(e.path=="/"||e.meta.visible==1&&!i.includes(e.path))return o.firstMenu});_.onError(e=>{console.error(e),h()});const V=q();V.use(F);const ee={mounted(e,t){e.src&&(e.onerror=()=>{e.src=t.value,e.onerror=null})},updated(e,t){e.src&&(e.onerror=()=>{e.src=t.value,e.onerror=null})}},te=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),b=Object.assign({"./modules/error.js":te}),v={};for(const e in b){const t=e.replace(/(.*\/)*([^.]+).*/gi,"$2");v[t]=b[e].default}function oe(e){for(const t in v)e.directive(t,v[t])}const re=["width","height"],ne=["xlink:href","fill"],se=Object.assign({name:"SvgIcon"},{__name:"SvgIcon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:"1em"},color:{type:String,default:"currentColor"},prefix:{type:String,default:"icon"}},setup(e){const t=e,o=z(()=>`#${t.prefix}-${t.name}`);return(i,r)=>(w(),R("svg",{class:"svg-icon","aria-hidden":"true",width:e.size,height:e.size},[B("use",{"xlink:href":o.value,rel:"external nofollow",fill:e.color},null,8,ne)],8,re))}});if(typeof window<"u"){let e=function(){var t=document.body,o=document.getElementById("svg__icon__dom");o||(o=document.createElementNS("http://www.w3.org/2000/svg","svg"),o.style.position="absolute",o.style.width="0",o.style.height="0",o.id="svg__icon__dom",o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),o.innerHTML='<symbol  viewBox="0 0 1024 1024" id="icon-delete"><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-document"><path fill="currentColor" d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-edit"><path fill="currentColor" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z" /><path fill="currentColor" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-house"><path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-setting"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357 357 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a352 352 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357 357 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294 294 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293 293 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294 294 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288 288 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293 293 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a288 288 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-user"><path fill="currentColor" d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0" /></symbol>',t.insertBefore(o,t.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}var ie={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};Y();const u=I(J);u.config.errorHandler=(e,t,o)=>{console.error(e,t,o),h()};u.use(_);u.use(V);oe(u);for(const[e,t]of Object.entries(W))u.component(e,t);u.component("svg-icon",se);const E=M();E.token&&E.getUserMenus();u.mount("#app");console.log("node_env:","production");console.log("vite_env:",ie);export{se as _,O as a,_ as r,M as u};
