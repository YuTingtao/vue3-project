import{b as I,c as z,d as A,e as F,f as O,g as T,h as U,i as K,j as Q,k as W,l as q}from"./element-plus-BFcDWg1f.js";import{u as w,b as $}from"./vue-router-eHBfJRM6.js";import{_ as G,u as H}from"./index-Bxsfa-W4.js";import{d as J}from"./pinia-BMZIePXw.js";import{ab as k,o as r,c as v,R as m,Q as s,M as i,W as E,a as u,V as x,O as b,a8 as S,r as X,w as Y,U as P,y as M,T as B,u as g,d as Z,S as ee,K as te}from"./@vue-MCHm96jj.js";import{l as ne}from"./index-3TpgaCGz.js";import"./lodash-es-Rc7wuZoG.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BBkpAsxl.js";import"./@element-plus-BwAoTnwU.js";import"./@ctrl-r5W6hzzQ.js";import"./@popperjs-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./lazysizes-DIA6Q0hx.js";import"./axios-B4uVmeYG.js";const ae=""+new URL("logo-7oke29fp.png",import.meta.url).href,oe=J("appStore",{state:()=>({menu:{isExpand:!0}}),getters:{},actions:{},persist:{enabled:!0,strategies:[{key:"appStore",storage:localStorage}]}}),le={__name:"MenuItem",props:{item:{type:Object,default:()=>{}}},setup(e){const h=w();function c(n){h.push(n)}return(n,d)=>{const f=G,_=I,a=k("MenuItem",!0),o=z,t=A;return e.item.meta.visible?(r(),v(b,{key:0},[e.item.children&&e.item.children.filter(l=>l.meta.visible).length>0?(r(),m(o,{key:0,index:e.item.path||e.item.meta.title},{title:s(()=>[e.item.meta.icon?(r(),m(_,{key:0},{default:s(()=>[i(f,{name:e.item.meta.icon},null,8,["name"])]),_:1})):E("",!0),u("span",null,x(e.item.meta.title),1)]),default:s(()=>[(r(!0),v(b,null,S(e.item.children,l=>(r(),m(a,{key:l.path,item:l},null,8,["item"]))),128))]),_:1},8,["index"])):(r(),m(t,{key:1,index:e.item.path,onClick:d[0]||(d[0]=l=>c(e.item.path))},{default:s(()=>[e.item.meta.icon?(r(),m(_,{key:0},{default:s(()=>[i(f,{name:e.item.meta.icon},null,8,["name"])]),_:1})):E("",!0),u("span",null,x(e.item.meta.title),1)]),_:1},8,["index"]))],64)):E("",!0)}}},se={__name:"BreadCrumb",setup(e){const h=w(),c=$(),n=X([]),d=h.getRoutes();function f(){n.value=[];let a=c.matched;if(a[0].name=="layout"&&(a=a.slice(1)),a.length>1||a[0].meta.parentPath)for(let o=a.length-1;o>=0;o--){const t=a[o];let l=t.path;(o==a.length-1||t.meta.type==0)&&(l=""),n.value.unshift({path:l,title:t.meta.title});const p=t.meta.parentPath||"";p&&n.value.unshift(..._(p))}}function _(a,o=[]){const t=d.find(l=>l.path==a);return t&&o.unshift({path:t.meta.type==0?"":t.path,title:t.meta.title}),t.meta.parentPath?_(t.meta.parentPath,o):o}return Y(()=>c.path,()=>{f()},{immediate:!0}),(a,o)=>{const t=F,l=O;return r(),m(l,null,{default:s(()=>[(r(!0),v(b,null,S(n.value,(p,y)=>(r(),m(t,{key:p.path+y,to:p.path},{default:s(()=>[P(x(p.title),1)]),_:2},1032,["to"]))),128))]),_:1})}}},re={class:"app-aside"},ie=u("img",{class:"app-logo-img",src:ae,alt:""},null,-1),ue=u("span",null,"Vue3管理后台",-1),me=[ie,ue],ce=Z({name:"Layout"}),Be=Object.assign(ce,{setup(e){const h=w();$();const c=H(),n=oe(),d=M(()=>c.userInfo),f=M(()=>c.userMenus);function _(){n.menu.isExpand=!n.menu.isExpand}function a(){ne.logout().finally(()=>{c.setLogout(),h.replace("/login")})}return(o,t)=>{const l=I,p=K,y=k("arrow-down"),V=Q,D=W,L=T,R=q,N=U,j=k("router-view");return r(),v(b,null,[u("div",{class:"app-head",style:B(`left: ${g(n).menu.isExpand?"200px":"64px"};`)},[i(l,{class:"menu-collapse",onClick:_},{default:s(()=>[(r(),m(ee(g(n).menu.isExpand?"Fold":"Expand")))]),_:1}),i(se),i(L,{trigger:"hover"},{dropdown:s(()=>[i(D,null,{default:s(()=>[i(V,{onClick:a},{default:s(()=>[P("退出")]),_:1})]),_:1})]),default:s(()=>[u("div",null,[i(p,{src:d.value.avatar,size:32,icon:"UserFilled",shape:"circle",fit:"cover"},null,8,["src"]),u("span",null,x(d.value.name),1),i(l,null,{default:s(()=>[i(y)]),_:1})])]),_:1})],4),u("div",re,[i(N,null,{default:s(()=>[u("div",{class:te(["app-logo",g(n).menu.isExpand?"":"collapsed"])},me,2),i(R,{collapse:!g(n).menu.isExpand,"text-color":"#fff","background-color":"#3c4f60","default-active":o.$route.meta.activePath||o.$route.path||o.$route.name},{default:s(()=>[(r(!0),v(b,null,S(f.value,C=>(r(),m(le,{key:C.path,item:C},null,8,["item"]))),128))]),_:1},8,["collapse","default-active"])]),_:1})]),u("div",{class:"app-main",style:B(`padding-left: ${g(n).menu.isExpand?"200px":"64px"};`)},[i(j,{class:"app-view"})],4)],64)}}});export{Be as default};