import{j as g,o,k as v,l as s,u as m,c,q as h,N as y,m as x,A as b,B as w,O as I,t as S,a as f,P as u,w as i,Q as V,R as B,I as l,S as C,T as k}from"./vendor-f3401b40.js";import{u as $}from"./index-a5058fbc.js";import{_ as L}from"./plugin-vue_export-helper-c27b6911.js";const N=["width","height"],D=["xlink:href","fill"],R={__name:"SvgIcon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:"1em"},color:{type:String,default:"currentColor"},prefix:{type:String,default:"icon"}},setup(e){const t=e,n=g(()=>`#${t.prefix}-${t.name}`);return(r,_)=>(o(),v("svg",{class:"svg-icon","aria-hidden":"true",width:e.size,height:e.size},[s("use",{"xlink:href":m(n),rel:"external nofollow",fill:e.color},null,8,D)],8,N))}},z={__name:"ImgViewer",props:{modelValue:{type:Boolean,default:!1},urlList:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:t}){return(n,r)=>{const _=y;return e.modelValue?(o(),c(_,{key:0,"url-list":e.urlList,onClose:r[0]||(r[0]=a=>t("update:modelValue",!1))},null,8,["url-list"])):h("",!0)}}};function E(e){const t=document.createElement("div");t.classList.add("img-viewer-box"),document.body.append(t);const n=x(z,{modelValue:!0,urlList:e,"onUpdate:modelValue":()=>{n.unmount(t),t.remove()}});n.mount(t)}const Y=""+new URL("bg-e8f3beee.jpg",import.meta.url).href,j=""+new URL("logo-0b51da83.png",import.meta.url).href;const p=e=>(C("data-v-b5278501"),e=e(),k(),e),A={class:"page-svg"},U={class:"row-box"},q={class:"row-box"},H=p(()=>s("span",null,"svg-icon：",-1)),M={class:"row-box"},T=p(()=>s("span",null,"菜单权限：",-1)),O={class:"row-box"},P=p(()=>s("span",null,"按钮权限：",-1)),Q={class:"row-box"},F=p(()=>s("span",null,"图片预览：",-1)),G={__name:"BaseCase",setup(e){b(),w(),$();const t=[Y,j];return(n,r)=>{const _=R,a=V,d=I("permission");return o(),v("div",A,[s("div",U,"时间："+S(m(B)().format("YYYY-MM-DD HH:mm:ss")),1),s("div",q,[H,f(_,{name:"case",size:"16px"})]),s("div",M,[T,u((o(),c(a,{type:"primary"},{default:i(()=>[l("基础案例菜单")]),_:1})),[[d,{path:"/baseCase"}]])]),s("div",O,[P,u((o(),c(a,{type:"primary"},{default:i(()=>[l("新增")]),_:1})),[[d,"add"]]),u((o(),c(a,{type:"primary"},{default:i(()=>[l("编辑")]),_:1})),[[d,"edit"]]),u((o(),c(a,{type:"primary"},{default:i(()=>[l("删除")]),_:1})),[[d,{path:"/baseCase",btn:"delete"}]]),u((o(),c(a,{type:"primary"},{default:i(()=>[l("导出")]),_:1})),[[d,"export"]])]),s("div",Q,[F,f(a,{type:"primary",onClick:r[0]||(r[0]=J=>m(E)(t))},{default:i(()=>[l("预览")]),_:1})])])}}},Z=L(G,[["__scopeId","data-v-b5278501"]]);export{Z as default};
