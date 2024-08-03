import{b as I,c as z,d as A,e as F,f as O,g as T,h as U,i as q,j as K,k as Q,l as W}from"./element-plus-CwR5xvPY.js";import{u as k,b as $}from"./vue-router-a6fLCUut.js";import{_ as G,u as H}from"./index-BipG3lgM.js";import{d as J}from"./pinia-BRKjGfEc.js";import{ab as w,o as r,c as v,R as m,Q as l,M as u,W as x,a as i,V as y,O as b,a8 as S,r as X,w as Y,U as P,y as M,T as B,u as g,d as Z,S as ee,K as te}from"./@vue-u-uJWz1X.js";import{l as ne}from"./index-BddrAQHr.js";import"./lodash-es-CscGKdwc.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BHnBbFPh.js";import"./@element-plus-Tb5X1IHT.js";import"./@ctrl-r5W6hzzQ.js";import"./@popperjs-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./lazysizes-DIA6Q0hx.js";import"./axios-B4uVmeYG.js";const ae=""+new URL("logo-7oke29fp.png",import.meta.url).href,oe=J("appStore",{state:()=>({menu:{isExpand:!0}}),getters:{},actions:{},persist:{enabled:!0,strategies:[{key:"appStore",storage:localStorage}]}}),le={__name:"MenuItem",props:{item:{type:Object,default:()=>{}}},setup(e){const h=k();function c(n){h.push(n)}return(n,d)=>{const f=G,_=I,s=w("MenuItem",!0),a=z,t=A;return e.item.meta.visible?(r(),v(b,{key:0},[e.item.children&&e.item.children.filter(o=>o.meta.visible).length>0?(r(),m(a,{key:0,index:e.item.path||e.item.meta.title},{title:l(()=>[e.item.meta.icon?(r(),m(_,{key:0},{default:l(()=>[u(f,{name:e.item.meta.icon},null,8,["name"])]),_:1})):x("",!0),i("span",null,y(e.item.meta.title),1)]),default:l(()=>[(r(!0),v(b,null,S(e.item.children,o=>(r(),m(s,{key:o.path,item:o},null,8,["item"]))),128))]),_:1},8,["index"])):(r(),m(t,{key:1,index:e.item.path,onClick:d[0]||(d[0]=o=>c(e.item.path))},{default:l(()=>[e.item.meta.icon?(r(),m(_,{key:0},{default:l(()=>[u(f,{name:e.item.meta.icon},null,8,["name"])]),_:1})):x("",!0),i("span",null,y(e.item.meta.title),1)]),_:1},8,["index"]))],64)):x("",!0)}}},se={__name:"BreadCrumb",setup(e){const h=k(),c=$(),n=X([]),d=h.getRoutes();function f(){n.value=[];let s=c.matched;if(s[0].name=="layout"&&(s=s.slice(1)),s.length>0)for(let a=s.length-1;a>=0;a--){const t=s[a];let o=t.path;(a==s.length-1||t.meta.type==0)&&(o=""),n.value.unshift({path:o,title:t.meta.title});const p=t.meta.parentPath||"";p&&n.value.unshift(..._(p))}}function _(s,a=[]){const t=d.find(o=>o.path==s);return t&&a.unshift({path:t.meta.type==0?"":t.path,title:t.meta.title}),t.meta.parentPath?_(t.meta.parentPath,a):a}return Y(()=>c.path,()=>{f()},{immediate:!0}),(s,a)=>{const t=F,o=O;return r(),m(o,null,{default:l(()=>[(r(!0),v(b,null,S(n.value,(p,E)=>(r(),m(t,{key:p.path+E,to:p.path},{default:l(()=>[P(y(p.title),1)]),_:2},1032,["to"]))),128))]),_:1})}}},re={class:"app-aside"},ue=i("img",{class:"app-logo-img",src:ae,alt:""},null,-1),ie=i("span",null,"Vue3管理后台",-1),me=[ue,ie],ce=Z({name:"Layout"}),Be=Object.assign(ce,{setup(e){const h=k();$();const c=H(),n=oe(),d=M(()=>c.userInfo),f=M(()=>c.userMenus);function _(){n.menu.isExpand=!n.menu.isExpand}function s(){ne.logout().finally(()=>{c.setLogout(),h.push("/login")})}return(a,t)=>{const o=I,p=q,E=w("arrow-down"),V=K,D=Q,L=T,R=W,N=U,j=w("router-view");return r(),v(b,null,[i("div",{class:"app-head",style:B(`left: ${g(n).menu.isExpand?"210px":"64px"};`)},[u(o,{class:"menu-collapse",onClick:_},{default:l(()=>[(r(),m(ee(g(n).menu.isExpand?"Fold":"Expand")))]),_:1}),u(se),u(L,{trigger:"hover"},{dropdown:l(()=>[u(D,null,{default:l(()=>[u(V,{onClick:s},{default:l(()=>[P("退出")]),_:1})]),_:1})]),default:l(()=>[i("div",null,[u(p,{src:d.value.avatar,size:32,icon:"UserFilled",shape:"circle",fit:"cover"},null,8,["src"]),i("span",null,y(d.value.name),1),u(o,null,{default:l(()=>[u(E)]),_:1})])]),_:1})],4),i("div",re,[u(N,null,{default:l(()=>[i("div",{class:te(["app-logo",g(n).menu.isExpand?"":"collapsed"])},me,2),u(R,{collapse:!g(n).menu.isExpand,"unique-opened":!0,"default-active":a.$route.meta.activePath||a.$route.path||a.$route.name},{default:l(()=>[(r(!0),v(b,null,S(f.value,C=>(r(),m(le,{key:C.path,item:C},null,8,["item"]))),128))]),_:1},8,["collapse","default-active"])]),_:1})]),i("div",{class:"app-main",style:B(`padding-left: ${g(n).menu.isExpand?"210px":"64px"};`)},[u(j,{class:"app-view"})],4)],64)}}});export{Be as default};