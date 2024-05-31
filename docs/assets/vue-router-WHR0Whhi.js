import{s as tt,u as Q,aj as nt,A as B,n as rt,d as qe,J as ot,y as N,a9 as ze,E as ae,r as st,w as ct}from"./@vue-iFnbdo9x.js";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const z=typeof window<"u";function it(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function le(e,t){const n={};for(const r in t){const o=t[r];n[r]=L(o)?o.map(e):e(o)}return n}const F=()=>{},L=Array.isArray,at=/\/$/,lt=e=>e.replace(at,"");function ue(e,t,n="/"){let r,o={},l="",d="";const m=t.indexOf("#");let i=t.indexOf("?");return m<i&&m>=0&&(i=-1),i>-1&&(r=t.slice(0,i),l=t.slice(i+1,m>-1?m:t.length),o=e(l)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=dt(r??t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:o,hash:d}}function ut(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ce(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ft(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&G(t.matched[r],n.matched[o])&&Ge(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ge(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ht(e[n],t[n]))return!1;return!0}function ht(e,t){return L(e)?be(e,t):L(t)?be(t,e):e===t}function be(e,t){return L(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function dt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let l=n.length-1,d,m;for(d=0;d<r.length;d++)if(m=r[d],m!==".")if(m==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(d-(d===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var Y;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Y||(Y={}));function pt(e){if(!e)if(z){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lt(e)}const mt=/^[^#]+#/;function gt(e,t){return e.replace(mt,"#")+t}function vt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.pageXOffset,top:window.pageYOffset});function yt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=vt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ke(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function Rt(e,t){he.set(e,t)}function Et(e){const t=he.get(e);return he.delete(e),t}let wt=()=>location.protocol+"//"+location.host;function Ke(e,t){const{pathname:n,search:r,hash:o}=t,l=e.indexOf("#");if(l>-1){let m=o.includes(e.slice(l))?e.slice(l).length:1,i=o.slice(m);return i[0]!=="/"&&(i="/"+i),Ce(i,"")}return Ce(n,e)+r+o}function Pt(e,t,n,r){let o=[],l=[],d=null;const m=({state:u})=>{const g=Ke(e,location),R=n.value,k=t.value;let b=0;if(u){if(n.value=g,t.value=u,d&&d===R){d=null;return}b=k?u.position-k.position:0}else r(g);o.forEach(E=>{E(n.value,R,{delta:b,type:X.pop,direction:b?b>0?Y.forward:Y.back:Y.unknown})})};function i(){d=n.value}function f(u){o.push(u);const g=()=>{const R=o.indexOf(u);R>-1&&o.splice(R,1)};return l.push(g),g}function s(){const{history:u}=window;u.state&&u.replaceState(S({},u.state,{scroll:te()}),"")}function a(){for(const u of l)u();l=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:i,listen:f,destroy:a}}function Ae(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function St(e){const{history:t,location:n}=window,r={value:Ke(e,n)},o={value:t.state};o.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,f,s){const a=e.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:wt()+e+i;try{t[s?"replaceState":"pushState"](f,"",u),o.value=f}catch(g){console.error(g),n[s?"replace":"assign"](u)}}function d(i,f){const s=S({},t.state,Ae(o.value.back,i,o.value.forward,!0),f,{position:o.value.position});l(i,s,!0),r.value=i}function m(i,f){const s=S({},o.value,t.state,{forward:i,scroll:te()});l(s.current,s,!0);const a=S({},Ae(r.value,i,null),{position:s.position+1},f);l(i,a,!1),r.value=i}return{location:r,state:o,push:m,replace:d}}function Ct(e){e=pt(e);const t=St(e),n=Pt(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const o=S({location:"",base:e,go:r,createHref:gt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function fn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Ct(e)}function bt(e){return typeof e=="string"||e&&typeof e=="object"}function Ve(e){return typeof e=="string"||typeof e=="symbol"}const T={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ue=Symbol("");var Oe;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Oe||(Oe={}));function K(e,t){return S(new Error,{type:e,[Ue]:!0},t)}function I(e,t){return e instanceof Error&&Ue in e&&(t==null||!!(e.type&t))}const _e="[^/]+?",kt={sensitive:!1,strict:!1,start:!0,end:!0},At=/[.+*?^${}()[\]/\\]/g;function Ot(e,t){const n=S({},kt,t),r=[];let o=n.start?"^":"";const l=[];for(const f of e){const s=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let a=0;a<f.length;a++){const u=f[a];let g=40+(n.sensitive?.25:0);if(u.type===0)a||(o+="/"),o+=u.value.replace(At,"\\$&"),g+=40;else if(u.type===1){const{value:R,repeatable:k,optional:b,regexp:E}=u;l.push({name:R,repeatable:k,optional:b});const P=E||_e;if(P!==_e){g+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${P}): `+M.message)}}let _=k?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;a||(_=b&&f.length<2?`(?:/${_})`:"/"+_),b&&(_+="?"),o+=_,g+=20,b&&(g+=-8),k&&(g+=-20),P===".*"&&(g+=-50)}s.push(g)}r.push(s)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function m(f){const s=f.match(d),a={};if(!s)return null;for(let u=1;u<s.length;u++){const g=s[u]||"",R=l[u-1];a[R.name]=g&&R.repeatable?g.split("/"):g}return a}function i(f){let s="",a=!1;for(const u of e){(!a||!s.endsWith("/"))&&(s+="/"),a=!1;for(const g of u)if(g.type===0)s+=g.value;else if(g.type===1){const{value:R,repeatable:k,optional:b}=g,E=R in f?f[R]:"";if(L(E)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const P=L(E)?E.join("/"):E;if(!P)if(b)u.length<2&&(s.endsWith("/")?s=s.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);s+=P}}return s||"/"}return{re:d,score:r,keys:l,parse:m,stringify:i}}function _t(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function xt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const l=_t(r[n],o[n]);if(l)return l;n++}if(Math.abs(o.length-r.length)===1){if(xe(r))return 1;if(xe(o))return-1}return o.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Mt={type:0,value:""},Lt=/[a-zA-Z0-9_]/;function Nt(e){if(!e)return[[]];if(e==="/")return[[Mt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const o=[];let l;function d(){l&&o.push(l),l=[]}let m=0,i,f="",s="";function a(){f&&(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:s,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=i}for(;m<e.length;){if(i=e[m++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&a(),d()):i===":"?(a(),n=1):u();break;case 4:u(),n=r;break;case 1:i==="("?n=2:Lt.test(i)?u():(a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&m--);break;case 2:i===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+i:n=3:s+=i;break;case 3:a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&m--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),d(),o}function jt(e,t,n){const r=Ot(Nt(e.path),n),o=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function It(e,t){const n=[],r=new Map;t=Ne({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function l(s,a,u){const g=!u,R=Tt(s);R.aliasOf=u&&u.record;const k=Ne(t,s),b=[R];if("alias"in s){const _=typeof s.alias=="string"?[s.alias]:s.alias;for(const M of _)b.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let E,P;for(const _ of b){const{path:M}=_;if(a&&M[0]!=="/"){const H=a.record.path,j=H[H.length-1]==="/"?"":"/";_.path=a.record.path+(M&&j+M)}if(E=jt(_,a,k),u?u.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),g&&s.name&&!Le(E)&&d(s.name)),R.children){const H=R.children;for(let j=0;j<H.length;j++)l(H[j],E,u&&u.children[j])}u=u||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&i(E)}return P?()=>{d(P)}:F}function d(s){if(Ve(s)){const a=r.get(s);a&&(r.delete(s),n.splice(n.indexOf(a),1),a.children.forEach(d),a.alias.forEach(d))}else{const a=n.indexOf(s);a>-1&&(n.splice(a,1),s.record.name&&r.delete(s.record.name),s.children.forEach(d),s.alias.forEach(d))}}function m(){return n}function i(s){let a=0;for(;a<n.length&&xt(s,n[a])>=0&&(s.record.path!==n[a].record.path||!De(s,n[a]));)a++;n.splice(a,0,s),s.record.name&&!Le(s)&&r.set(s.record.name,s)}function f(s,a){let u,g={},R,k;if("name"in s&&s.name){if(u=r.get(s.name),!u)throw K(1,{location:s});k=u.record.name,g=S(Me(a.params,u.keys.filter(P=>!P.optional).map(P=>P.name)),s.params&&Me(s.params,u.keys.map(P=>P.name))),R=u.stringify(g)}else if("path"in s)R=s.path,u=n.find(P=>P.re.test(R)),u&&(g=u.parse(R),k=u.record.name);else{if(u=a.name?r.get(a.name):n.find(P=>P.re.test(a.path)),!u)throw K(1,{location:s,currentLocation:a});k=u.record.name,g=S({},a.params,s.params),R=u.stringify(g)}const b=[];let E=u;for(;E;)b.unshift(E.record),E=E.parent;return{name:k,path:R,params:g,matched:b,meta:Ht(b)}}return e.forEach(s=>l(s)),{addRoute:l,resolve:f,removeRoute:d,getRoutes:m,getRecordMatcher:o}}function Me(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Tt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$t(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function $t(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Le(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ht(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Ne(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function De(e,t){return t.children.some(n=>n===e||De(e,n))}const We=/#/g,Bt=/&/g,qt=/\//g,zt=/=/g,Gt=/\?/g,Qe=/\+/g,Kt=/%5B/g,Vt=/%5D/g,Fe=/%5E/g,Ut=/%60/g,Ye=/%7B/g,Dt=/%7C/g,Xe=/%7D/g,Wt=/%20/g;function me(e){return encodeURI(""+e).replace(Dt,"|").replace(Kt,"[").replace(Vt,"]")}function Qt(e){return me(e).replace(Ye,"{").replace(Xe,"}").replace(Fe,"^")}function de(e){return me(e).replace(Qe,"%2B").replace(Wt,"+").replace(We,"%23").replace(Bt,"%26").replace(Ut,"`").replace(Ye,"{").replace(Xe,"}").replace(Fe,"^")}function Ft(e){return de(e).replace(zt,"%3D")}function Yt(e){return me(e).replace(We,"%23").replace(Gt,"%3F")}function Xt(e){return e==null?"":Yt(e).replace(qt,"%2F")}function ee(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Zt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const l=r[o].replace(Qe," "),d=l.indexOf("="),m=ee(d<0?l:l.slice(0,d)),i=d<0?null:ee(l.slice(d+1));if(m in t){let f=t[m];L(f)||(f=t[m]=[f]),f.push(i)}else t[m]=i}return t}function je(e){let t="";for(let n in e){const r=e[n];if(n=Ft(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(L(r)?r.map(l=>l&&de(l)):[r&&de(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Jt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=L(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const en=Symbol(""),Ie=Symbol(""),ne=Symbol(""),ge=Symbol(""),pe=Symbol("");function W(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function $(e,t,n,r,o){const l=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((d,m)=>{const i=a=>{a===!1?m(K(4,{from:n,to:t})):a instanceof Error?m(a):bt(a)?m(K(2,{from:t,to:a})):(l&&r.enterCallbacks[o]===l&&typeof a=="function"&&l.push(a),d())},f=e.call(r&&r.instances[o],t,n,i);let s=Promise.resolve(f);e.length<3&&(s=s.then(i)),s.catch(a=>m(a))})}function fe(e,t,n,r){const o=[];for(const l of e)for(const d in l.components){let m=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(tn(m)){const f=(m.__vccOpts||m)[t];f&&o.push($(f,n,r,l,d))}else{let i=m();o.push(()=>i.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const s=it(f)?f.default:f;l.components[d]=s;const u=(s.__vccOpts||s)[t];return u&&$(u,n,r,l,d)()}))}}return o}function tn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Te(e){const t=B(ne),n=B(ge),r=N(()=>t.resolve(Q(e.to))),o=N(()=>{const{matched:i}=r.value,{length:f}=i,s=i[f-1],a=n.matched;if(!s||!a.length)return-1;const u=a.findIndex(G.bind(null,s));if(u>-1)return u;const g=$e(i[f-2]);return f>1&&$e(s)===g&&a[a.length-1].path!==g?a.findIndex(G.bind(null,i[f-2])):u}),l=N(()=>o.value>-1&&sn(n.params,r.value.params)),d=N(()=>o.value>-1&&o.value===n.matched.length-1&&Ge(n.params,r.value.params));function m(i={}){return on(i)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(F):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:l,isExactActive:d,navigate:m}}const nn=qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Te,setup(e,{slots:t}){const n=ot(Te(e)),{options:r}=B(ne),o=N(()=>({[He(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[He(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:ze("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},l)}}}),rn=nn;function on(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function sn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!L(o)||o.length!==r.length||r.some((l,d)=>l!==o[d]))return!1}return!0}function $e(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const He=(e,t,n)=>e??t??n,cn=qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=B(pe),o=N(()=>e.route||r.value),l=B(Ie,0),d=N(()=>{let f=Q(l);const{matched:s}=o.value;let a;for(;(a=s[f])&&!a.components;)f++;return f}),m=N(()=>o.value.matched[d.value]);ae(Ie,N(()=>d.value+1)),ae(en,m),ae(pe,o);const i=st();return ct(()=>[i.value,m.value,e.name],([f,s,a],[u,g,R])=>{s&&(s.instances[a]=f,g&&g!==s&&f&&f===u&&(s.leaveGuards.size||(s.leaveGuards=g.leaveGuards),s.updateGuards.size||(s.updateGuards=g.updateGuards))),f&&s&&(!g||!G(s,g)||!u)&&(s.enterCallbacks[a]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=o.value,s=e.name,a=m.value,u=a&&a.components[s];if(!u)return Be(n.default,{Component:u,route:f});const g=a.props[s],R=g?g===!0?f.params:typeof g=="function"?g(f):g:null,b=ze(u,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(a.instances[s]=null)},ref:i}));return Be(n.default,{Component:b,route:f})||b}}});function Be(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const an=cn;function hn(e){const t=It(e.routes,e),n=e.parseQuery||Zt,r=e.stringifyQuery||je,o=e.history,l=W(),d=W(),m=W(),i=tt(T);let f=T;z&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=le.bind(null,c=>""+c),a=le.bind(null,Xt),u=le.bind(null,ee);function g(c,p){let h,v;return Ve(c)?(h=t.getRecordMatcher(c),v=p):v=c,t.addRoute(v,h)}function R(c){const p=t.getRecordMatcher(c);p&&t.removeRoute(p)}function k(){return t.getRoutes().map(c=>c.record)}function b(c){return!!t.getRecordMatcher(c)}function E(c,p){if(p=S({},p||i.value),typeof c=="string"){const y=ue(n,c,p.path),O=t.resolve({path:y.path},p),D=o.createHref(y.fullPath);return S(y,O,{params:u(O.params),hash:ee(y.hash),redirectedFrom:void 0,href:D})}let h;if("path"in c)h=S({},c,{path:ue(n,c.path,p.path).path});else{const y=S({},c.params);for(const O in y)y[O]==null&&delete y[O];h=S({},c,{params:a(y)}),p.params=a(p.params)}const v=t.resolve(h,p),C=c.hash||"";v.params=s(u(v.params));const A=ut(r,S({},c,{hash:Qt(C),path:v.path})),w=o.createHref(A);return S({fullPath:A,hash:C,query:r===je?Jt(c.query):c.query||{}},v,{redirectedFrom:void 0,href:w})}function P(c){return typeof c=="string"?ue(n,c,i.value.path):S({},c)}function _(c,p){if(f!==c)return K(8,{from:p,to:c})}function M(c){return V(c)}function H(c){return M(S(P(c),{replace:!0}))}function j(c){const p=c.matched[c.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(c):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:c.query,hash:c.hash,params:"path"in v?{}:c.params},v)}}function V(c,p){const h=f=E(c),v=i.value,C=c.state,A=c.force,w=c.replace===!0,y=j(h);if(y)return V(S(P(y),{state:typeof y=="object"?S({},C,y.state):C,force:A,replace:w}),p||h);const O=h;O.redirectedFrom=p;let D;return!A&&ft(r,v,h)&&(D=K(16,{to:O,from:v}),Pe(v,v,!0,!1)),(D?Promise.resolve(D):ye(O,v)).catch(x=>I(x)?I(x,2)?x:se(x):oe(x,O,v)).then(x=>{if(x){if(I(x,2))return V(S({replace:w},P(x.to),{state:typeof x.to=="object"?S({},C,x.to.state):C,force:A}),p||O)}else x=Ee(O,v,!0,w,C);return Re(O,v,x),x})}function Ze(c,p){const h=_(c,p);return h?Promise.reject(h):Promise.resolve()}function ve(c){const p=J.values().next().value;return p&&typeof p.runWithContext=="function"?p.runWithContext(c):c()}function ye(c,p){let h;const[v,C,A]=ln(c,p);h=fe(v.reverse(),"beforeRouteLeave",c,p);for(const y of v)y.leaveGuards.forEach(O=>{h.push($(O,c,p))});const w=Ze.bind(null,c,p);return h.push(w),q(h).then(()=>{h=[];for(const y of l.list())h.push($(y,c,p));return h.push(w),q(h)}).then(()=>{h=fe(C,"beforeRouteUpdate",c,p);for(const y of C)y.updateGuards.forEach(O=>{h.push($(O,c,p))});return h.push(w),q(h)}).then(()=>{h=[];for(const y of A)if(y.beforeEnter)if(L(y.beforeEnter))for(const O of y.beforeEnter)h.push($(O,c,p));else h.push($(y.beforeEnter,c,p));return h.push(w),q(h)}).then(()=>(c.matched.forEach(y=>y.enterCallbacks={}),h=fe(A,"beforeRouteEnter",c,p),h.push(w),q(h))).then(()=>{h=[];for(const y of d.list())h.push($(y,c,p));return h.push(w),q(h)}).catch(y=>I(y,8)?y:Promise.reject(y))}function Re(c,p,h){m.list().forEach(v=>ve(()=>v(c,p,h)))}function Ee(c,p,h,v,C){const A=_(c,p);if(A)return A;const w=p===T,y=z?history.state:{};h&&(v||w?o.replace(c.fullPath,S({scroll:w&&y&&y.scroll},C)):o.push(c.fullPath,C)),i.value=c,Pe(c,p,h,w),se()}let U;function Je(){U||(U=o.listen((c,p,h)=>{if(!Se.listening)return;const v=E(c),C=j(v);if(C){V(S(C,{replace:!0}),v).catch(F);return}f=v;const A=i.value;z&&Rt(ke(A.fullPath,h.delta),te()),ye(v,A).catch(w=>I(w,12)?w:I(w,2)?(V(w.to,v).then(y=>{I(y,20)&&!h.delta&&h.type===X.pop&&o.go(-1,!1)}).catch(F),Promise.reject()):(h.delta&&o.go(-h.delta,!1),oe(w,v,A))).then(w=>{w=w||Ee(v,A,!1),w&&(h.delta&&!I(w,8)?o.go(-h.delta,!1):h.type===X.pop&&I(w,20)&&o.go(-1,!1)),Re(v,A,w)}).catch(F)}))}let re=W(),we=W(),Z;function oe(c,p,h){se(c);const v=we.list();return v.length?v.forEach(C=>C(c,p,h)):console.error(c),Promise.reject(c)}function et(){return Z&&i.value!==T?Promise.resolve():new Promise((c,p)=>{re.add([c,p])})}function se(c){return Z||(Z=!c,Je(),re.list().forEach(([p,h])=>c?h(c):p()),re.reset()),c}function Pe(c,p,h,v){const{scrollBehavior:C}=e;if(!z||!C)return Promise.resolve();const A=!h&&Et(ke(c.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return rt().then(()=>C(c,p,A)).then(w=>w&&yt(w)).catch(w=>oe(w,c,p))}const ce=c=>o.go(c);let ie;const J=new Set,Se={currentRoute:i,listening:!0,addRoute:g,removeRoute:R,hasRoute:b,getRoutes:k,resolve:E,options:e,push:M,replace:H,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:l.add,beforeResolve:d.add,afterEach:m.add,onError:we.add,isReady:et,install(c){const p=this;c.component("RouterLink",rn),c.component("RouterView",an),c.config.globalProperties.$router=p,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(i)}),z&&!ie&&i.value===T&&(ie=!0,M(o.location).catch(C=>{}));const h={};for(const C in T)Object.defineProperty(h,C,{get:()=>i.value[C],enumerable:!0});c.provide(ne,p),c.provide(ge,nt(h)),c.provide(pe,i);const v=c.unmount;J.add(c),c.unmount=function(){J.delete(c),J.size<1&&(f=T,U&&U(),U=null,i.value=T,ie=!1,Z=!1),v()}}};function q(c){return c.reduce((p,h)=>p.then(()=>ve(h)),Promise.resolve())}return Se}function ln(e,t){const n=[],r=[],o=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const m=t.matched[d];m&&(e.matched.find(f=>G(f,m))?r.push(m):n.push(m));const i=e.matched[d];i&&(t.matched.find(f=>G(f,i))||o.push(i))}return[n,r,o]}function dn(){return B(ne)}function pn(){return B(ge)}export{fn as a,pn as b,hn as c,dn as u};
