import{b as I,c as z,d as F,e as O,f as T,g as U,h as A,i as K,j as Q,k as W,l as q}from"./element-plus-CwnhnWUg.js";import{u as x,b as $}from"./vue-router-CWTpg-aJ.js";import{_ as G,u as H}from"./index-BAqnkmOt.js";import{a9 as k,o as s,c as v,R as m,Q as l,M as r,W as w,a as i,V as b,O as g,af as E,r as P,w as J,U as S,y as M,T as B,d as X,S as Y,K as Z}from"./@vue-DJDCuFtJ.js";import{l as ee}from"./loginApi-DbigemNV.js";import"./lodash-es-ByZL8CPd.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-CTX2tYoW.js";import"./@element-plus-Dvd0rjjG.js";import"./@ctrl-r5W6hzzQ.js";import"./@popperjs-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-Csx-e-k8.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./lazysizes-DIA6Q0hx.js";import"./axios-B4uVmeYG.js";const te=""+new URL("logo-7oke29fp.png",import.meta.url).href,ne={__name:"MenuItem",props:{item:{type:Object,default:()=>{}}},setup(e){const h=x();function p(c){h.push(c)}return(c,f)=>{const u=G,_=I,n=k("MenuItem",!0),a=z,t=F;return e.item.meta.visible?(s(),v(g,{key:0},[e.item.children&&e.item.children.filter(o=>o.meta.visible).length>0?(s(),m(a,{key:0,index:e.item.path||e.item.meta.title},{title:l(()=>[e.item.meta.icon?(s(),m(_,{key:0},{default:l(()=>[r(u,{name:e.item.meta.icon},null,8,["name"])]),_:1})):w("",!0),i("span",null,b(e.item.meta.title),1)]),default:l(()=>[(s(!0),v(g,null,E(e.item.children,o=>(s(),m(n,{key:o.path,item:o},null,8,["item"]))),128))]),_:1},8,["index"])):(s(),m(t,{key:1,index:e.item.path,onClick:f[0]||(f[0]=o=>p(e.item.path))},{default:l(()=>[e.item.meta.icon?(s(),m(_,{key:0},{default:l(()=>[r(u,{name:e.item.meta.icon},null,8,["name"])]),_:1})):w("",!0),i("span",null,b(e.item.meta.title),1)]),_:1},8,["index"]))],64)):w("",!0)}}},ae={__name:"BreadCrumb",setup(e){const h=x(),p=$(),c=P([]),f=h.getRoutes();function u(){c.value=[];let n=p.matched;if(n[0].name=="layout"&&(n=n.slice(1)),n.length>1||n[0].meta.parentPath)for(let a=n.length-1;a>=0;a--){const t=n[a];let o=t.path;(a==n.length-1||t.meta.type==0)&&(o=""),c.value.unshift({path:o,title:t.meta.title});const d=t.meta.parentPath||"";d&&c.value.unshift(..._(d))}}function _(n,a=[]){const t=f.find(o=>o.path==n);return t&&a.unshift({path:t.meta.type==0?"":t.path,title:t.meta.title}),t.meta.parentPath?_(t.meta.parentPath,a):a}return J(()=>p.path,()=>{u()},{immediate:!0}),(n,a)=>{const t=O,o=T;return s(),m(o,null,{default:l(()=>[(s(!0),v(g,null,E(c.value,(d,y)=>(s(),m(t,{key:d.path+y,to:d.path},{default:l(()=>[S(b(d.title),1)]),_:2},1032,["to"]))),128))]),_:1})}}},oe={class:"app-aside"},le=i("img",{class:"app-logo-img",src:te,alt:""},null,-1),se=i("span",null,"Vue3管理后台",-1),re=[le,se],ue=X({name:"Layout"}),Ce=Object.assign(ue,{setup(e){const h=x();$();const p=H(),c=M(()=>p.userInfo),f=M(()=>p.userMenus),u=P(!1);function _(){u.value=!u.value}function n(){ee.logout().finally(()=>{p.setLogout(),h.replace("/login")})}return(a,t)=>{const o=I,d=K,y=k("arrow-down"),V=Q,D=W,L=U,R=q,N=A,j=k("router-view");return s(),v(g,null,[i("div",{class:"app-head",style:B(`left: ${u.value?"64px":"200px"};`)},[r(o,{class:"menu-collapse",onClick:_},{default:l(()=>[(s(),m(Y(u.value?"Expand":"Fold")))]),_:1}),r(ae),r(L,{trigger:"hover"},{dropdown:l(()=>[r(D,null,{default:l(()=>[r(V,{onClick:n},{default:l(()=>[S("退出")]),_:1})]),_:1})]),default:l(()=>[i("div",null,[r(d,{src:c.value.avatar,size:32,icon:"UserFilled",shape:"circle",fit:"cover"},null,8,["src"]),i("span",null,b(c.value.name),1),r(o,null,{default:l(()=>[r(y)]),_:1})])]),_:1})],4),i("div",oe,[r(N,null,{default:l(()=>[i("div",{class:Z(["app-logo",u.value?"collapsed":""])},re,2),r(R,{collapse:u.value,"text-color":"#fff","background-color":"#3c4f60","default-active":a.$route.meta.activePath||a.$route.path||a.$route.name},{default:l(()=>[(s(!0),v(g,null,E(f.value,C=>(s(),m(ne,{key:C.path,item:C},null,8,["item"]))),128))]),_:1},8,["collapse","default-active"])]),_:1})]),i("div",{class:"app-main",style:B(`padding-left: ${u.value?"64px":"200px"};`)},[r(j,{class:"app-view"})],4)],64)}}});export{Ce as default};
