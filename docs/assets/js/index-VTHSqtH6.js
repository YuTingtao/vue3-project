const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RouteView-Dc3Perp9.js","./plugin-vue_export-helper-DlAUqK2U.js","./vue-render-BaYS_z1e.js","./index-XL6DD_E9.js","./element-plus-DzTveOOg.js","../css/index-DyT4kT4d.css","../css/button-CoiNqlwQ.css","./index-HZJWEQlh.js","../css/index-BLpWa_0w.css","../css/input-nHpB0b8f.css","./index-DB4xJYQu.js","../css/index-ULQ6IhLg.css","../css/tooltip-CZk4UBC1.css","../css/form-item-DTn1ghgJ.css","./index-Bxd9Ur5P.js","./login-B2WFWoqz.js","../css/login-CUmCpOzp.css","../css/index-_gyyAafk.css","./index-BSX-8nqN.js","../css/index-Ddyq_4nD.css"])))=>i.map(i=>d[i]);
import{ab as Ye,I as Ke,x as Se,J as Ge,L as Xe,u as Qe,ao as Ze,ap as et,aq as tt,ar as rt,c as ut,v as nt,A as at,as as it}from"./vue-render-BaYS_z1e.js";import{E as ot,a as st,b as lt}from"./element-plus-DzTveOOg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();/*! Element Plus v2.9.6 */var ct={name:"zh-cn",el:{breadcrumb:{label:"面包屑"},colorpicker:{confirm:"确定",clear:"清空",defaultLabel:"颜色选择器",description:"当前颜色 {color}，按 Enter 键选择新颜色",alphaLabel:"选择透明度的值"},datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",dateTablePrompt:"使用方向键与 Enter 键可选择日期",monthTablePrompt:"使用方向键与 Enter 键可选择月份",yearTablePrompt:"使用方向键与 Enter 键可选择年份",selectedDate:"已选日期",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",prevYear:"前一年",nextYear:"后一年",prevMonth:"上个月",nextMonth:"下个月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},weeksFull:{sun:"星期日",mon:"星期一",tue:"星期二",wed:"星期三",thu:"星期四",fri:"星期五",sat:"星期六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},inputNumber:{decrease:"减少数值",increase:"增加数值"},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},dropdown:{toggleDropdown:"切换下拉选项"},mention:{loading:"加载中"},cascader:{noMatch:"无匹配数据",loading:"加载中",placeholder:"请选择",noData:"暂无数据"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页",page:"页",prev:"上一页",next:"下一页",currentPage:"第 {pager} 页",prevPages:"向前 {pager} 页",nextPages:"向后 {pager} 页",deprecationWarning:"你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"},dialog:{close:"关闭此对话框"},drawer:{close:"关闭此对话框"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!",close:"关闭此对话框"},upload:{deleteTip:"按 delete 键可删除",delete:"删除",preview:"查看图片",continue:"继续上传"},slider:{defaultLabel:"滑块介于 {min} 至 {max}",defaultRangeStartLabel:"选择起始值",defaultRangeEndLabel:"选择结束值"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},tour:{next:"下一步",previous:"上一步",finish:"结束导览"},tree:{emptyText:"暂无数据"},transfer:{noMatch:"无匹配数据",noData:"无数据",titles:["列表 1","列表 2"],filterPlaceholder:"请输入搜索内容",noCheckedFormat:"共 {total} 项",hasCheckedFormat:"已选 {checked}/{total} 项"},image:{error:"加载失败"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消"},carousel:{leftArrow:"上一张幻灯片",rightArrow:"下一张幻灯片",indicator:"幻灯片切换至索引 {index}"}}};const ft={__name:"App",setup(e){return(r,t)=>{const u=Ye("router-view"),s=ot;return Se(),Ke(s,{locale:Qe(ct)},{default:Ge(()=>[Xe(u)]),_:1},8,["locale"])}}},dt="modulepreload",mt=function(e,r){return new URL(e,r).href},ze={},$=function(r,t,u){let s=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),F=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));s=Promise.allSettled(t.map(h=>{if(h=mt(h,u),h in ze)return;ze[h]=!0;const E=h.endsWith(".css"),D=E?'[rel="stylesheet"]':"";if(!!u)for(let M=a.length-1;M>=0;M--){const R=a[M];if(R.href===h&&(!E||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${D}`))return;const L=document.createElement("link");if(L.rel=E?"stylesheet":dt,E||(L.as="script"),L.crossOrigin="",L.href=h,F&&L.setAttribute("nonce",F),document.head.appendChild(L),E)return new Promise((M,R)=>{L.addEventListener("load",M),L.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${h}`)))})}))}function c(a){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=a,window.dispatchEvent(d),!d.defaultPrevented)throw a}return s.then(a=>{for(const d of a||[])d.status==="rejected"&&c(d.reason);return r().catch(c)})};function pt(e){const r={};function t(u){r[u.name]=u,Array.isArray(u.children)&&u.children.forEach(s=>t(s))}return e.forEach(u=>t(u)),r}function vt(e){let r;function t(u){u.children&&u.children.length>0?t(u.children[0]):r=u.path}return t(e),r||"/login"}const Et=[{path:"/example",name:"example",component:()=>$(()=>import("./RouteView-Dc3Perp9.js"),__vite__mapDeps([0,1,2]),import.meta.url),meta:{title:"使用案例",icon:"document",visible:1,buttons:[],activePath:"",parentPath:""},children:[{path:"/example/base",name:"exampleBase",component:()=>$(()=>import("./index-XL6DD_E9.js"),__vite__mapDeps([3,2,4,1,5,6]),import.meta.url),meta:{title:"基础案例",icon:"",visible:1,buttons:["add","edit","delete"],activePath:"",parentPath:""}},{path:"/example/whiteBoard",name:"exampleWhiteBoard",component:()=>$(()=>import("./index-HZJWEQlh.js"),__vite__mapDeps([7,2,4,8,9,6]),import.meta.url),meta:{title:"画板/白板",icon:"",visible:1,buttons:[],activePath:"",parentPath:""}}]}],ht=[{path:"/system",name:"system",component:()=>$(()=>import("./RouteView-Dc3Perp9.js"),__vite__mapDeps([0,1,2]),import.meta.url),meta:{title:"系统设置",icon:"setting",visible:1,buttons:[],activePath:"",parentPath:""},children:[{path:"/system/menu",name:"systemMenu",component:()=>$(()=>import("./index-DB4xJYQu.js"),__vite__mapDeps([10,2,4,1,11,12,9,13,6]),import.meta.url),meta:{title:"菜单设置",icon:"",visible:1,buttons:[],activePath:"",parentPath:""}}]}],xe=[...Et,...ht],de=Ze("store",{state:()=>({token:"",userInfo:{},userMenus:[]}),getters:{menuObj(e){return pt(e.userMenus)},firstMenu(e){return e.userMenus.length<1?"/login":vt(e.userMenus[0])}},actions:{setLogin(e){const{token:r,...t}=e;this.token=r,this.userInfo=t},setLogout(){this.token=""},getUserMenus(){setTimeout(()=>{this.userMenus=xe},100)}},persist:{key:"store",storage:localStorage}});let ue;function ne(){const e=new XMLHttpRequest;e.open("get","./version.json?t="+Date.now(),!0),e.onreadystatechange=function(){if(e.readyState==4&&e.status==200){const r=JSON.parse(e.responseText);if(!ue){ue=r.version;return}ue!=r.version&&(ue=r.version,st.alert("检测到版本有更新，请点击确定刷新页面","提示").then(()=>{location.reload(!0)}))}},e.send()}function gt(){ne(),setInterval(()=>{ne()},3e5)}const yt=[{path:"/",name:"layout",component:()=>$(()=>import("./index-Bxd9Ur5P.js"),__vite__mapDeps([14,2,4,15,16,17,12,6]),import.meta.url),children:[...xe]},{path:"/login",name:"login",component:()=>$(()=>import("./index-BSX-8nqN.js"),__vite__mapDeps([18,2,15,4,16,1,19,13,6,9]),import.meta.url)}],ae=et({history:tt(),routes:yt,scrollBehavior(e,r){return e.hash?{el:e.hash,behavior:"smooth"}:{top:0}}}),_t=["layout","login"];ae.beforeEach((e,r)=>{const t=de(),u=Object.keys(t.menuObj);if(!t.token&&e.path!=="/login")return"/login";if(e.path=="/")return t.firstMenu;const s=e.name||"";if(!u.includes(s)&&!_t.includes(s))return t.firstMenu});ae.onError(e=>{console.error(e),ne()});const Ft=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,bt=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,zt=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Ct(e,r){if(e==="__proto__"||e==="constructor"&&r&&typeof r=="object"&&"prototype"in r){At(e);return}return r}function At(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function Bt(e,r={}){if(typeof e!="string")return e;const t=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return t.slice(1,-1);if(t.length<=9){const u=t.toLowerCase();if(u==="true")return!0;if(u==="false")return!1;if(u==="undefined")return;if(u==="null")return null;if(u==="nan")return Number.NaN;if(u==="infinity")return Number.POSITIVE_INFINITY;if(u==="-infinity")return Number.NEGATIVE_INFINITY}if(!zt.test(e)){if(r.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(Ft.test(e)||bt.test(e)){if(r.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Ct)}return JSON.parse(e)}catch(u){if(r.strict)throw u;return e}}function Dt(e,r){if(e==null)return;let t=e;for(let u=0;u<r.length;u++){if(t==null||t[r[u]]==null)return;t=t[r[u]]}return t}function me(e,r,t){if(t.length===0)return r;const u=t[0];return t.length>1&&(r=me(typeof e!="object"||e===null||!Object.prototype.hasOwnProperty.call(e,u)?Number.isInteger(Number(t[1]))?[]:{}:e[u],r,Array.prototype.slice.call(t,1))),Number.isInteger(Number(u))&&Array.isArray(e)?e.slice()[u]:Object.assign({},e,{[u]:r})}function Pe(e,r){if(e==null||r.length===0)return e;if(r.length===1){if(e==null)return e;if(Number.isInteger(r[0])&&Array.isArray(e))return Array.prototype.slice.call(e,0).splice(r[0],1);const t={};for(const u in e)t[u]=e[u];return delete t[r[0]],t}if(e[r[0]]==null){if(Number.isInteger(r[0])&&Array.isArray(e))return Array.prototype.concat.call([],e);const t={};for(const u in e)t[u]=e[u];return t}return me(e,Pe(e[r[0]],Array.prototype.slice.call(r,1)),[r[0]])}function Me(e,r){return r.map(t=>t.split(".")).map(t=>[t,Dt(e,t)]).filter(t=>t[1]!==void 0).reduce((t,u)=>me(t,u[1],u[0]),{})}function Ne(e,r){return r.map(t=>t.split(".")).reduce((t,u)=>Pe(t,u),e)}function Ce(e,{storage:r,serializer:t,key:u,debug:s,pick:c,omit:a,beforeHydrate:d,afterHydrate:F},h,E=!0){try{E&&(d==null||d(h));const D=r.getItem(u);if(D){const A=t.deserialize(D),L=c?Me(A,c):A,M=a?Ne(L,a):L;e.$patch(M)}E&&(F==null||F(h))}catch(D){s&&console.error("[pinia-plugin-persistedstate]",D)}}function Ae(e,{storage:r,serializer:t,key:u,debug:s,pick:c,omit:a}){try{const d=c?Me(e,c):e,F=a?Ne(d,a):d,h=t.serialize(F);r.setItem(u,h)}catch(d){s&&console.error("[pinia-plugin-persistedstate]",d)}}function Lt(e,r,t){const{pinia:u,store:s,options:{persist:c=t}}=e;if(!c)return;if(!(s.$id in u.state.value)){const F=u._s.get(s.$id.replace("__hot:",""));F&&Promise.resolve().then(()=>F.$persist());return}const d=(Array.isArray(c)?c:c===!0?[{}]:[c]).map(r);s.$hydrate=({runHooks:F=!0}={})=>{d.forEach(h=>{Ce(s,h,e,F)})},s.$persist=()=>{d.forEach(F=>{Ae(s.$state,F)})},d.forEach(F=>{Ce(s,F,e),s.$subscribe((h,E)=>Ae(E,F),{detached:!0})})}function St(e={}){return function(r){Lt(r,t=>({key:(e.key?e.key:u=>u)(t.key??r.store.$id),debug:t.debug??e.debug??!1,serializer:t.serializer??e.serializer??{serialize:u=>JSON.stringify(u),deserialize:u=>Bt(u)},storage:t.storage??e.storage??window.localStorage,beforeHydrate:t.beforeHydrate,afterHydrate:t.afterHydrate,pick:t.pick,omit:t.omit}),e.auto??!1)}}var xt=St();const we=rt();we.use(xt);var ce={exports:{}},Be;function Pt(){return Be||(Be=1,function(e){(function(r,t){var u=t(r,r.document,Date);r.lazySizes=u,e.exports&&(e.exports=u)})(typeof window<"u"?window:{},function(t,u,s){var c,a;if(function(){var o,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};a=t.lazySizesConfig||t.lazysizesConfig||{};for(o in i)o in a||(a[o]=i[o])}(),!u||!u.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var d=u.documentElement,F=t.HTMLPictureElement,h="addEventListener",E="getAttribute",D=t[h].bind(t),A=t.setTimeout,L=t.requestAnimationFrame||A,M=t.requestIdleCallback,R=/^picture$/i,Oe=["load","error","lazyincluded","_lazyloaded"],Z={},Te=Array.prototype.forEach,J=function(o,i){return Z[i]||(Z[i]=new RegExp("(\\s|^)"+i+"(\\s|$)")),Z[i].test(o[E]("class")||"")&&Z[i]},j=function(o,i){J(o,i)||o.setAttribute("class",(o[E]("class")||"").trim()+" "+i)},ie=function(o,i){var f;(f=J(o,i))&&o.setAttribute("class",(o[E]("class")||"").replace(f," "))},oe=function(o,i,f){var _=f?h:"removeEventListener";f&&oe(o,i),Oe.forEach(function(y){o[_](y,i)})},Y=function(o,i,f,_,y){var m=u.createEvent("Event");return f||(f={}),f.instance=c,m.initEvent(i,!_,!y),m.detail=f,o.dispatchEvent(m),m},se=function(o,i){var f;!F&&(f=t.picturefill||a.pf)?(i&&i.src&&!o[E]("srcset")&&o.setAttribute("srcset",i.src),f({reevaluate:!0,elements:[o]})):i&&i.src&&(o.src=i.src)},K=function(o,i){return(getComputedStyle(o,null)||{})[i]},pe=function(o,i,f){for(f=f||o.offsetWidth;f<a.minSize&&i&&!o._lazysizesWidth;)f=i.offsetWidth,i=i.parentNode;return f},G=function(){var o,i,f=[],_=[],y=f,m=function(){var p=y;for(y=f.length?_:f,o=!0,i=!1;p.length;)p.shift()();o=!1},b=function(p,g){o&&!g?p.apply(this,arguments):(y.push(p),i||(i=!0,(u.hidden?A:L)(m)))};return b._lsFlush=m,b}(),ee=function(o,i){return i?function(){G(o)}:function(){var f=this,_=arguments;G(function(){o.apply(f,_)})}},ke=function(o){var i,f=0,_=a.throttleDelay,y=a.ricTimeout,m=function(){i=!1,f=s.now(),o()},b=M&&y>49?function(){M(m,{timeout:y}),y!==a.ricTimeout&&(y=a.ricTimeout)}:ee(function(){A(m)},!0);return function(p){var g;(p=p===!0)&&(y=33),!i&&(i=!0,g=_-(s.now()-f),g<0&&(g=0),p||g<9?b():A(b,g))}},ve=function(o){var i,f,_=99,y=function(){i=null,o()},m=function(){var b=s.now()-f;b<_?A(m,_-b):(M||y)(y)};return function(){f=s.now(),i||(i=A(m,_))}},Ee=function(){var o,i,f,_,y,m,b,p,g,S,w,V,Ie=/^img$/i,Re=/^iframe$/i,Ve="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),He=0,X=0,N=0,q=-1,he=function(n){N--,(!n||N<0||!n.target)&&(N=0)},ge=function(n){return V==null&&(V=K(u.body,"visibility")=="hidden"),V||!(K(n.parentNode,"visibility")=="hidden"&&K(n,"visibility")=="hidden")},$e=function(n,l){var v,z=n,C=ge(n);for(p-=l,w+=l,g-=l,S+=l;C&&(z=z.offsetParent)&&z!=u.body&&z!=d;)C=(K(z,"opacity")||1)>0,C&&K(z,"overflow")!="visible"&&(v=z.getBoundingClientRect(),C=S>v.left&&g<v.right&&w>v.top-1&&p<v.bottom+1);return C},ye=function(){var n,l,v,z,C,B,O,T,I,k,H,U,P=c.elements;if((_=a.loadMode)&&N<8&&(n=P.length)){for(l=0,q++;l<n;l++)if(!(!P[l]||P[l]._lazyRace)){if(!Ve||c.prematureUnveil&&c.prematureUnveil(P[l])){Q(P[l]);continue}if((!(T=P[l][E]("data-expand"))||!(B=T*1))&&(B=X),k||(k=!a.expand||a.expand<1?d.clientHeight>500&&d.clientWidth>500?500:370:a.expand,c._defEx=k,H=k*a.expFactor,U=a.hFac,V=null,X<H&&N<1&&q>2&&_>2&&!u.hidden?(X=H,q=0):_>1&&q>1&&N<6?X=k:X=He),I!==B&&(m=innerWidth+B*U,b=innerHeight+B,O=B*-1,I=B),v=P[l].getBoundingClientRect(),(w=v.bottom)>=O&&(p=v.top)<=b&&(S=v.right)>=O*U&&(g=v.left)<=m&&(w||S||g||p)&&(a.loadHidden||ge(P[l]))&&(i&&N<3&&!T&&(_<3||q<4)||$e(P[l],B))){if(Q(P[l]),C=!0,N>9)break}else!C&&i&&!z&&N<4&&q<4&&_>2&&(o[0]||a.preloadAfterLoad)&&(o[0]||!T&&(w||S||g||p||P[l][E](a.sizesAttr)!="auto"))&&(z=o[0]||P[l])}z&&!C&&Q(z)}},x=ke(ye),_e=function(n){var l=n.target;if(l._lazyCache){delete l._lazyCache;return}he(n),j(l,a.loadedClass),ie(l,a.loadingClass),oe(l,Fe),Y(l,"lazyloaded")},We=ee(_e),Fe=function(n){We({target:n.target})},qe=function(n,l){var v=n.getAttribute("data-load-mode")||a.iframeLoadMode;v==0?n.contentWindow.location.replace(l):v==1&&(n.src=l)},Ue=function(n){var l,v=n[E](a.srcsetAttr);(l=a.customMedia[n[E]("data-media")||n[E]("media")])&&n.setAttribute("media",l),v&&n.setAttribute("srcset",v)},Je=ee(function(n,l,v,z,C){var B,O,T,I,k,H;(k=Y(n,"lazybeforeunveil",l)).defaultPrevented||(z&&(v?j(n,a.autosizesClass):n.setAttribute("sizes",z)),O=n[E](a.srcsetAttr),B=n[E](a.srcAttr),C&&(T=n.parentNode,I=T&&R.test(T.nodeName||"")),H=l.firesLoad||"src"in n&&(O||B||I),k={target:n},j(n,a.loadingClass),H&&(clearTimeout(f),f=A(he,2500),oe(n,Fe,!0)),I&&Te.call(T.getElementsByTagName("source"),Ue),O?n.setAttribute("srcset",O):B&&!I&&(Re.test(n.nodeName)?qe(n,B):n.src=B),C&&(O||I)&&se(n,{src:B})),n._lazyRace&&delete n._lazyRace,ie(n,a.lazyClass),G(function(){var U=n.complete&&n.naturalWidth>1;(!H||U)&&(U&&j(n,a.fastLoadedClass),_e(k),n._lazyCache=!0,A(function(){"_lazyCache"in n&&delete n._lazyCache},9)),n.loading=="lazy"&&N--},!0)}),Q=function(n){if(!n._lazyRace){var l,v=Ie.test(n.nodeName),z=v&&(n[E](a.sizesAttr)||n[E]("sizes")),C=z=="auto";(C||!i)&&v&&(n[E]("src")||n.srcset)&&!n.complete&&!J(n,a.errorClass)&&J(n,a.lazyClass)||(l=Y(n,"lazyunveilread").detail,C&&le.updateElem(n,!0,n.offsetWidth),n._lazyRace=!0,N++,Je(n,l,C,z,v))}},je=ve(function(){a.loadMode=3,x()}),be=function(){a.loadMode==3&&(a.loadMode=2),je()},re=function(){if(!i){if(s.now()-y<999){A(re,999);return}i=!0,a.loadMode=3,x(),D("scroll",be,!0)}};return{_:function(){y=s.now(),c.elements=u.getElementsByClassName(a.lazyClass),o=u.getElementsByClassName(a.lazyClass+" "+a.preloadClass),D("scroll",x,!0),D("resize",x,!0),D("pageshow",function(n){if(n.persisted){var l=u.querySelectorAll("."+a.loadingClass);l.length&&l.forEach&&L(function(){l.forEach(function(v){v.complete&&Q(v)})})}}),t.MutationObserver?new MutationObserver(x).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[h]("DOMNodeInserted",x,!0),d[h]("DOMAttrModified",x,!0),setInterval(x,999)),D("hashchange",x,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(n){u[h](n,x,!0)}),/d$|^c/.test(u.readyState)?re():(D("load",re),u[h]("DOMContentLoaded",x),A(re,2e4)),c.elements.length?(ye(),G._lsFlush()):x()},checkElems:x,unveil:Q,_aLSL:be}}(),le=function(){var o,i=ee(function(m,b,p,g){var S,w,V;if(m._lazysizesWidth=g,g+="px",m.setAttribute("sizes",g),R.test(b.nodeName||""))for(S=b.getElementsByTagName("source"),w=0,V=S.length;w<V;w++)S[w].setAttribute("sizes",g);p.detail.dataAttr||se(m,p.detail)}),f=function(m,b,p){var g,S=m.parentNode;S&&(p=pe(m,S,p),g=Y(m,"lazybeforesizes",{width:p,dataAttr:!!b}),g.defaultPrevented||(p=g.detail.width,p&&p!==m._lazysizesWidth&&i(m,S,g,p)))},_=function(){var m,b=o.length;if(b)for(m=0;m<b;m++)f(o[m])},y=ve(_);return{_:function(){o=u.getElementsByClassName(a.autosizesClass),D("resize",y)},checkElems:y,updateElem:f}}(),te=function(){!te.i&&u.getElementsByClassName&&(te.i=!0,le._(),Ee._())};return A(function(){a.init&&te()}),c={cfg:a,autoSizer:le,loader:Ee,init:te,uP:se,aC:j,rC:ie,hC:J,fire:Y,gW:pe,rAF:G},c})}(ce)),ce.exports}Pt();const Mt={mounted(e,r){e.src&&(e.onerror=()=>{e.src=r.value,e.onerror=null})},updated(e,r){e.src&&(e.onerror=()=>{e.src=r.value,e.onerror=null})}},Nt=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"})),wt=ae.currentRoute;function Ot(){const e=de();function r(t,u=wt.value.name){var c,a;return!!(((a=(c=e.menuObj[u])==null?void 0:c.meta)==null?void 0:a.buttons)||[]).some(d=>d==t)}return{hasPermission:r}}const Tt={mounted(e,r){var u;const{hasPermission:t}=Ot();t(r.value)||(u=e.parentNode)==null||u.removeChild(e)}},kt=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"})),De=Object.assign({"./modules/error.js":Nt,"./modules/permission.js":kt}),fe={};for(const e in De){const r=e.replace(/(.*\/)*([^.]+).*/gi,"$2");fe[r]=De[e].default}function It(e){for(const r in fe)e.directive(r,fe[r])}const Rt=["width","height"],Vt=["xlink:href","fill"],Ht=Object.assign({name:"SvgIcon"},{__name:"SvgIcon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:"1em"},color:{type:String,default:"currentColor"},prefix:{type:String,default:"icon"}},setup(e){const r=e,t=ut(()=>`#${r.prefix}-${r.name}`);return(u,s)=>(Se(),nt("svg",{class:"svg-icon","aria-hidden":"true",width:e.size,height:e.size},[at("use",{"xlink:href":t.value,rel:"external nofollow",fill:e.color},null,8,Vt)],8,Rt))}});if(typeof window<"u"){let e=function(){var r=document.body,t=document.getElementById("svg__icon__dom");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="svg__icon__dom",t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),t.innerHTML='<symbol  viewBox="0 0 1024 1024" id="icon-delete"><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-document"><path fill="currentColor" d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-edit"><path fill="currentColor" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z" /><path fill="currentColor" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-house"><path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-setting"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357 357 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a352 352 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357 357 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294 294 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293 293 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294 294 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288 288 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293 293 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a288 288 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256" /></symbol><symbol  viewBox="0 0 1024 1024" id="icon-user"><path fill="currentColor" d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0" /></symbol>',r.insertBefore(t,r.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}const $t={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1};gt();const W=it(ft);W.config.errorHandler=(e,r,t)=>{console.error(e,r,t),ne()};W.use(ae);W.use(we);It(W);for(const[e,r]of Object.entries(lt))W.component(e,r);W.component("svg-icon",Ht);const Le=de();Le.token&&Le.getUserMenus();W.mount("#app");console.log("node_env:","production");console.log("vite_env:",$t);export{Ht as _,Ot as a,xe as b,ae as r,de as u};
