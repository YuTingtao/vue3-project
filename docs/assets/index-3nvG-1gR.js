import{p as M,r as g,o as t,k as p,c as a,w as n,q as w,s as h,t as k,l as u,F as _,v as I,x as $,y as A,A as j,B as z,j as E,C as R,a as o,D as C,G as T,H as q,I as G,J as H,K as J,L as K,M as O}from"./vendor-9BaPkxyl.js";import{u as U}from"./index-t13AivQy.js";import{l as P}from"./login-HXQz-K1W.js";const Q={__name:"MenuItem",props:{item:{type:Object,default:()=>{}}},setup(e){const m=M();function c(i){m.push(i)}return(i,d)=>{const l=$,f=g("MenuItem",!0),v=A,s=j;return e.item.hidden?h("",!0):(t(),p(_,{key:0},[e.item.children&&e.item.children.filter(r=>!r.hidden).length?(t(),a(v,{key:0,index:e.item.title},{title:n(()=>[e.item.icon?(t(),a(l,{key:0},{default:n(()=>[(t(),a(w(e.item.icon)))]),_:1})):h("",!0),u("span",null,k(e.item.title),1)]),default:n(()=>[(t(!0),p(_,null,I(e.item.children,r=>(t(),a(f,{key:r.name,item:r},null,8,["item"]))),128))]),_:1},8,["index"])):(t(),a(s,{key:1,index:e.item.path,onClick:d[0]||(d[0]=r=>c(e.item.path))},{default:n(()=>[e.item.icon?(t(),a(l,{key:0},{default:n(()=>[(t(),a(w(e.item.icon)))]),_:1})):h("",!0),u("span",null,k(e.item.title),1)]),_:1},8,["index"]))],64))}}},W={class:"app-aside"},ee={__name:"index",setup(e){const m=M();z();const c=U(),i=E(()=>c.userInfo),d=E(()=>c.userMenus),l=R(!1);function f(){l.value=!l.value}function v(){P.logout().then(s=>{c.setLogout(),m.replace("/login")}).catch(s=>{c.setLogout(),m.replace("/login")})}return(s,r)=>{const x=$,b=H,D=g("arrow-down"),B=J,L=K,S=T,F=O,N=q,V=g("router-view");return t(),p(_,null,[u("div",{class:"app-head",style:C(`left: ${l.value?"64px":"220px"};`)},[o(x,{class:"menu-collapse",onClick:f},{default:n(()=>[(t(),a(w(l.value?"Expand":"Fold")))]),_:1}),o(S,{trigger:"hover"},{dropdown:n(()=>[o(L,null,{default:n(()=>[o(B,{onClick:v},{default:n(()=>[G("退出")]),_:1})]),_:1})]),default:n(()=>[u("div",null,[o(b,{src:i.value.avatar,size:32,icon:"UserFilled",shape:"circle",fit:"cover"},null,8,["src"]),u("span",null,k(i.value.name),1),o(x,null,{default:n(()=>[o(D)]),_:1})])]),_:1})],4),u("div",W,[o(N,null,{default:n(()=>[o(F,{collapse:l.value,"text-color":"#fff","background-color":"#565a5e","default-active":s.$route.meta.active||s.$route.path||s.$route.name},{default:n(()=>[(t(!0),p(_,null,I(d.value,y=>(t(),a(Q,{key:y.name,item:y},null,8,["item"]))),128))]),_:1},8,["collapse","default-active"])]),_:1})]),u("div",{class:"app-main",style:C(`padding-left: ${l.value?"64px":"220px"};`)},[o(V,{class:"app-view"})],4)],64)}}};export{ee as default};