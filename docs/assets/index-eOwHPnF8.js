import{o as a,c as l,q as f,V as v,m as w,A as y,B as b,W as h,k as x,l as o,a as _,X as d,w as r,I as i,u as V,T as g,P as L,Q as I}from"./vendor-xvlvVvvv.js";import{u as k,_ as B}from"./index-p9OOlJZo.js";import{_ as C}from"./plugin-vue_export-helper-x3n3nnut.js";const R={__name:"ImgView",props:{modelValue:{type:Boolean,default:!1},urlList:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:t}){const c=t;return(p,m)=>{const s=v;return e.modelValue?(a(),l(s,{key:0,"url-list":e.urlList,onClose:m[0]||(m[0]=n=>c("update:modelValue",!1))},null,8,["url-list"])):f("",!0)}}};function N(e){const t=document.createElement("div");t.classList.add("img-viewer-box"),document.body.append(t);const c=w(R,{modelValue:!0,urlList:e,"onUpdate:modelValue":p=>{p||(c.unmount(t),t.remove())}});c.mount(t)}const u=e=>(L("data-v-9b268bf8"),e=e(),I(),e),U={class:"page-svg"},E={class:"row-box"},S=u(()=>o("span",null,"svg-icon：",-1)),$={class:"row-box"},A=u(()=>o("span",null,"菜单权限：",-1)),D={class:"row-box"},T=u(()=>o("span",null,"按钮权限：",-1)),X={class:"row-box"},j=u(()=>o("span",null,"图片预览：",-1)),q={__name:"index",setup(e){y(),b(),k();const t=[new URL(""+new URL("bg-k0V8Nsnc.jpg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("logo-O6JHtvX6.png",import.meta.url).href,import.meta.url).href];return(c,p)=>{const m=B,s=g,n=h("permission");return a(),x("div",U,[o("div",E,[S,_(m,{name:"case",size:"16px"})]),o("div",$,[A,d((a(),l(s,{type:"primary"},{default:r(()=>[i("基础案例菜单")]),_:1})),[[n,{name:"baseCase"}]])]),o("div",D,[T,d((a(),l(s,{type:"primary"},{default:r(()=>[i("新增")]),_:1})),[[n,"add"]]),d((a(),l(s,{type:"primary"},{default:r(()=>[i("编辑")]),_:1})),[[n,"edit"]]),d((a(),l(s,{type:"primary"},{default:r(()=>[i("删除")]),_:1})),[[n,{name:"baseCase",btn:"delete"}]]),d((a(),l(s,{type:"primary"},{default:r(()=>[i("导出")]),_:1})),[[n,"export"]])]),o("div",X,[j,_(s,{type:"primary",onClick:p[0]||(p[0]=z=>V(N)(t))},{default:r(()=>[i("预览")]),_:1})])])}}},P=C(q,[["__scopeId","data-v-9b268bf8"]]);export{P as default};
