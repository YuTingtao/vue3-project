import{b as oe,c as Ct,i as qe,a as re,d as x,e as P,u as Y,r as C,f as _,g as de,h as Ze,w as ie,o as b,j as K,n as ye,k as I,l as R,m as y,p as Te,E as ue,q as F,s as Z,_ as U,t as Ie,v as Qe,x as ne,y as Ee,z as D,A as q,B as ve,C as be,D as ge,F as he,G as Mt,T as Xe,H as $t,I as Se,J as Tt,K as me,L as St,M as A,N as O,O as kt,P as Ot,Q as S,R as et,S as tt,U as nt,V as Nt,W as Pt,X as fe,Y as ot,Z as Re,$ as ae,a0 as Bt,a1 as Me,a2 as Ce,a3 as Oe,a4 as Rt,a5 as Ft,a6 as $e,a7 as Lt,a8 as Fe,a9 as G,aa as lt,ab as At,ac as je,ad as Dt,ae as zt,af as Kt,ag as Ht,ah as Gt,ai as Ve,aj as xt,ak as at,al as Le,am as jt,an as Ae,ao as De,ap as Vt,aq as st,ar as Yt}from"./index-CBTzIfeA.js";import{E as rt}from"./tooltip-D0mOTEBS.js";import{c as te,u as Ut,a as Ye,E as ze,O as Wt,w as Ue,C as Jt}from"./index-BzyRc39n.js";import{l as qt}from"./index-BzSCfdjE.js";import{c as Zt}from"./castArray-h_T1L650.js";import"./index-C-6clDKb.js";import"./axios-upsvKRUO.js";const Qt=oe({size:{type:[Number,String],values:Ct,default:"",validator:e=>qe(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:re},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:x(String),default:"cover"}}),Xt={error:e=>e instanceof Event},en=P({name:"ElAvatar"}),tn=P({...en,props:Qt,emits:Xt,setup(e,{emit:o}){const n=e,l=Y("avatar"),t=C(!1),d=_(()=>{const{size:s,icon:u,shape:p}=n,g=[l.b()];return de(s)&&g.push(l.m(s)),u&&g.push(l.m("icon")),p&&g.push(l.m(p)),g}),c=_(()=>{const{size:s}=n;return qe(s)?l.cssVarBlock({size:Ze(s)||""}):void 0}),i=_(()=>({objectFit:n.fit}));ie(()=>n.src,()=>t.value=!1);function a(s){t.value=!0,o("error",s)}return(s,u)=>(b(),K("span",{class:Z(I(d)),style:ye(I(c))},[(s.src||s.srcSet)&&!t.value?(b(),K("img",{key:0,src:s.src,alt:s.alt,srcset:s.srcSet,style:ye(I(i)),onError:a},null,44,["src","alt","srcset"])):s.icon?(b(),R(I(ue),{key:1},{default:y(()=>[(b(),R(Te(s.icon)))]),_:1})):F(s.$slots,"default",{key:2})],6))}});var nn=U(tn,[["__file","avatar.vue"]]);const on=Ie(nn),it=Symbol("breadcrumbKey"),ln=oe({separator:{type:String,default:"/"},separatorIcon:{type:re}}),an=P({name:"ElBreadcrumb"}),sn=P({...an,props:ln,setup(e){const o=e,{t:n}=Qe(),l=Y("breadcrumb"),t=C();return ne(it,o),Ee(()=>{const d=t.value.querySelectorAll(`.${l.e("item")}`);d.length&&d[d.length-1].setAttribute("aria-current","page")}),(d,c)=>(b(),K("div",{ref_key:"breadcrumb",ref:t,class:Z(I(l).b()),"aria-label":I(n)("el.breadcrumb.label"),role:"navigation"},[F(d.$slots,"default")],10,["aria-label"]))}});var rn=U(sn,[["__file","breadcrumb.vue"]]);const un=oe({to:{type:x([String,Object]),default:""},replace:Boolean}),cn=P({name:"ElBreadcrumbItem"}),dn=P({...cn,props:un,setup(e){const o=e,n=be(),l=D(it,void 0),t=Y("breadcrumb"),d=n.appContext.config.globalProperties.$router,c=C(),i=()=>{!o.to||!d||(o.replace?d.replace(o.to):d.push(o.to))};return(a,s)=>{var u,p;return b(),K("span",{class:Z(I(t).e("item"))},[q("span",{ref_key:"link",ref:c,class:Z([I(t).e("inner"),I(t).is("link",!!a.to)]),role:"link",onClick:i},[F(a.$slots,"default")],2),(u=I(l))!=null&&u.separatorIcon?(b(),R(I(ue),{key:0,class:Z(I(t).e("separator"))},{default:y(()=>[(b(),R(Te(I(l).separatorIcon)))]),_:1},8,["class"])):(b(),K("span",{key:1,class:Z(I(t).e("separator")),role:"presentation"},ve((p=I(l))==null?void 0:p.separator),3))],2)}}});var ut=U(dn,[["__file","breadcrumb-item.vue"]]);const pn=Ie(rn,{BreadcrumbItem:ut}),mn=ge(ut),fn=P({name:"ElCollapseTransition"}),vn=P({...fn,setup(e){const o=Y("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},l={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,d)=>(b(),R(Xe,he({name:I(o).b()},Mt(l)),{default:y(()=>[F(t.$slots,"default")]),_:3},16,["name"]))}});var hn=U(vn,[["__file","collapse-transition.vue"]]);const bn=Ie(hn),ct=(...e)=>o=>{e.forEach(n=>{$t(n)?n(o):n.value=o})},gn=P({inheritAttrs:!1});function _n(e,o,n,l,t,d){return F(e.$slots,"default")}var yn=U(gn,[["render",_n],["__file","collection.vue"]]);const In=P({name:"ElCollectionItem",inheritAttrs:!1});function En(e,o,n,l,t,d){return F(e.$slots,"default")}var wn=U(In,[["render",En],["__file","collection-item.vue"]]);const dt="data-el-collection-item",pt=e=>{const o=`El${e}Collection`,n=`${o}Item`,l=Symbol(o),t=Symbol(n),d={...yn,name:o,setup(){const i=C(null),a=new Map;ne(l,{itemMap:a,getItems:()=>{const u=I(i);if(!u)return[];const p=Array.from(u.querySelectorAll(`[${dt}]`));return[...a.values()].sort((m,E)=>p.indexOf(m.ref)-p.indexOf(E.ref))},collectionRef:i})}},c={...wn,name:n,setup(i,{attrs:a}){const s=C(null),u=D(l,void 0);ne(t,{collectionItemRef:s}),Ee(()=>{const p=I(s);p&&u.itemMap.set(p,{ref:p,...a})}),Se(()=>{const p=I(s);u.itemMap.delete(p)})}};return{COLLECTION_INJECTION_KEY:l,COLLECTION_ITEM_INJECTION_KEY:t,ElCollection:d,ElCollectionItem:c}},Cn=oe({style:{type:x([String,Array,Object])},currentTabId:{type:x(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:x(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Mn,ElCollectionItem:$n,COLLECTION_INJECTION_KEY:Ke,COLLECTION_ITEM_INJECTION_KEY:Tn}=pt("RovingFocusGroup"),He=Symbol("elRovingFocusGroup"),mt=Symbol("elRovingFocusGroupItem"),Sn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},kn=(e,o)=>e,On=(e,o,n)=>{const l=kn(e.code);return Sn[l]},Nn=(e,o)=>e.map((n,l)=>e[(l+o)%e.length]),Ge=e=>{const{activeElement:o}=document;for(const n of e)if(n===o||(n.focus(),o!==document.activeElement))return},We="currentTabIdChange",Je="rovingFocusGroup.entryFocus",Pn={bubbles:!1,cancelable:!0},Bn=P({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Cn,emits:[We,"entryFocus"],setup(e,{emit:o}){var n;const l=C((n=e.currentTabId||e.defaultCurrentTabId)!=null?n:null),t=C(!1),d=C(!1),c=C(null),{getItems:i}=D(Ke,void 0),a=_(()=>[{outline:"none"},e.style]),s=w=>{o(We,w)},u=()=>{t.value=!0},p=te(w=>{var M;(M=e.onMousedown)==null||M.call(e,w)},()=>{d.value=!0}),g=te(w=>{var M;(M=e.onFocus)==null||M.call(e,w)},w=>{const M=!I(d),{target:H,currentTarget:B}=w;if(H===B&&M&&!I(t)){const j=new Event(Je,Pn);if(B==null||B.dispatchEvent(j),!j.defaultPrevented){const L=i().filter(z=>z.focusable),W=L.find(z=>z.active),k=L.find(z=>z.id===I(l)),J=[W,k,...L].filter(Boolean).map(z=>z.ref);Ge(J)}}d.value=!1}),m=te(w=>{var M;(M=e.onBlur)==null||M.call(e,w)},()=>{t.value=!1}),E=(...w)=>{o("entryFocus",...w)};ne(He,{currentTabbedId:Tt(l),loop:me(e,"loop"),tabIndex:_(()=>I(t)?-1:0),rovingFocusGroupRef:c,rovingFocusGroupRootStyle:a,orientation:me(e,"orientation"),dir:me(e,"dir"),onItemFocus:s,onItemShiftTab:u,onBlur:m,onFocus:g,onMousedown:p}),ie(()=>e.currentTabId,w=>{l.value=w??null}),St(c,Je,E)}});function Rn(e,o,n,l,t,d){return F(e.$slots,"default")}var Fn=U(Bn,[["render",Rn],["__file","roving-focus-group-impl.vue"]]);const Ln=P({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Mn,ElRovingFocusGroupImpl:Fn}});function An(e,o,n,l,t,d){const c=A("el-roving-focus-group-impl"),i=A("el-focus-group-collection");return b(),R(i,null,{default:y(()=>[O(c,kt(Ot(e.$attrs)),{default:y(()=>[F(e.$slots,"default")]),_:3},16)]),_:3})}var Dn=U(Ln,[["render",An],["__file","roving-focus-group.vue"]]);const zn=oe({trigger:Ut.trigger,triggerKeys:{type:x(Array),default:()=>[S.enter,S.numpadEnter,S.space,S.down]},effect:{...Ye.effect,default:"light"},type:{type:x(String)},placement:{type:x(String),default:"bottom"},popperOptions:{type:x(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:x([Number,String]),default:0},maxHeight:{type:x([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:x(Object)},teleported:Ye.teleported}),ft=oe({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:re}}),Kn=oe({onKeydown:{type:x(Function)}}),Hn=[S.down,S.pageDown,S.home],vt=[S.up,S.pageUp,S.end],Gn=[...Hn,...vt],{ElCollection:xn,ElCollectionItem:jn,COLLECTION_INJECTION_KEY:Vn,COLLECTION_ITEM_INJECTION_KEY:Yn}=pt("Dropdown"),ke=Symbol("elDropdown"),{ButtonGroup:Un}=et,Wn=P({name:"ElDropdown",components:{ElButton:et,ElButtonGroup:Un,ElScrollbar:rt,ElDropdownCollection:xn,ElTooltip:ze,ElRovingFocusGroup:Dn,ElOnlyChild:Wt,ElIcon:ue,ArrowDown:tt},props:zn,emits:["visible-change","click","command"],setup(e,{emit:o}){const n=be(),l=Y("dropdown"),{t}=Qe(),d=C(),c=C(),i=C(null),a=C(null),s=C(null),u=C(null),p=C(!1),g=_(()=>({maxHeight:Ze(e.maxHeight)})),m=_(()=>[l.m(L.value)]),E=_(()=>Zt(e.trigger)),w=nt().value,M=_(()=>e.id||w);ie([d,E],([r,v],[T])=>{var N,h,$;(N=T==null?void 0:T.$el)!=null&&N.removeEventListener&&T.$el.removeEventListener("pointerenter",k),(h=r==null?void 0:r.$el)!=null&&h.removeEventListener&&r.$el.removeEventListener("pointerenter",k),($=r==null?void 0:r.$el)!=null&&$.addEventListener&&v.includes("hover")&&r.$el.addEventListener("pointerenter",k)},{immediate:!0}),Se(()=>{var r,v;(v=(r=d.value)==null?void 0:r.$el)!=null&&v.removeEventListener&&d.value.$el.removeEventListener("pointerenter",k)});function H(){B()}function B(){var r;(r=i.value)==null||r.onClose()}function j(){var r;(r=i.value)==null||r.onOpen()}const L=Nt();function W(...r){o("command",...r)}function k(){var r,v;(v=(r=d.value)==null?void 0:r.$el)==null||v.focus()}function Q(){}function J(){const r=I(a);E.value.includes("hover")&&(r==null||r.focus()),u.value=null}function z(r){u.value=r}function se(r){p.value||(r.preventDefault(),r.stopImmediatePropagation())}function le(){o("visible-change",!0)}function X(r){(r==null?void 0:r.type)==="keydown"&&a.value.focus()}function pe(){o("visible-change",!1)}return ne(ke,{contentRef:a,role:_(()=>e.role),triggerId:M,isUsingKeyboard:p,onItemEnter:Q,onItemLeave:J}),ne("elDropdown",{instance:n,dropdownSize:L,handleClick:H,commandHandler:W,trigger:me(e,"trigger"),hideOnClick:me(e,"hideOnClick")}),{t,ns:l,scrollbar:s,wrapStyle:g,dropdownTriggerKls:m,dropdownSize:L,triggerId:M,currentTabId:u,handleCurrentTabIdChange:z,handlerMainButtonClick:r=>{o("click",r)},handleEntryFocus:se,handleClose:B,handleOpen:j,handleBeforeShowTooltip:le,handleShowTooltip:X,handleBeforeHideTooltip:pe,onFocusAfterTrapped:r=>{var v,T;r.preventDefault(),(T=(v=a.value)==null?void 0:v.focus)==null||T.call(v,{preventScroll:!0})},popperRef:i,contentRef:a,triggeringElementRef:d,referenceElementRef:c}}});function Jn(e,o,n,l,t,d){var c;const i=A("el-dropdown-collection"),a=A("el-roving-focus-group"),s=A("el-scrollbar"),u=A("el-only-child"),p=A("el-tooltip"),g=A("el-button"),m=A("arrow-down"),E=A("el-icon"),w=A("el-button-group");return b(),K("div",{class:Z([e.ns.b(),e.ns.is("disabled",e.disabled)])},[O(p,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(c=e.referenceElementRef)==null?void 0:c.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Pt({content:y(()=>[O(s,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:y(()=>[O(a,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:y(()=>[O(i,null,{default:y(()=>[F(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:y(()=>[O(u,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:y(()=>[F(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(b(),R(w,{key:0},{default:y(()=>[O(g,he({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:y(()=>[F(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),O(g,he({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:y(()=>[O(E,{class:Z(e.ns.e("icon"))},{default:y(()=>[O(m)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):fe("v-if",!0)],2)}var qn=U(Wn,[["render",Jn],["__file","dropdown.vue"]]);const Zn=P({components:{ElRovingFocusCollectionItem:$n},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:n,loop:l,onItemFocus:t,onItemShiftTab:d}=D(He,void 0),{getItems:c}=D(Ke,void 0),i=nt(),a=C(null),s=te(m=>{o("mousedown",m)},m=>{e.focusable?t(I(i)):m.preventDefault()}),u=te(m=>{o("focus",m)},()=>{t(I(i))}),p=te(m=>{o("keydown",m)},m=>{const{code:E,shiftKey:w,target:M,currentTarget:H}=m;if(E===S.tab&&w){d();return}if(M!==H)return;const B=On(m);if(B){m.preventDefault();let L=c().filter(W=>W.focusable).map(W=>W.ref);switch(B){case"last":{L.reverse();break}case"prev":case"next":{B==="prev"&&L.reverse();const W=L.indexOf(H);L=l.value?Nn(L,W+1):L.slice(W+1);break}}ot(()=>{Ge(L)})}}),g=_(()=>n.value===I(i));return ne(mt,{rovingFocusGroupItemRef:a,tabIndex:_(()=>I(g)?0:-1),handleMousedown:s,handleFocus:u,handleKeydown:p}),{id:i,handleKeydown:p,handleFocus:u,handleMousedown:s}}});function Qn(e,o,n,l,t,d){const c=A("el-roving-focus-collection-item");return b(),R(c,{id:e.id,focusable:e.focusable,active:e.active},{default:y(()=>[F(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var Xn=U(Zn,[["render",Qn],["__file","roving-focus-item.vue"]]);const eo=P({name:"DropdownItemImpl",components:{ElIcon:ue},props:ft,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const n=Y("dropdown"),{role:l}=D(ke,void 0),{collectionItemRef:t}=D(Yn,void 0),{collectionItemRef:d}=D(Tn,void 0),{rovingFocusGroupItemRef:c,tabIndex:i,handleFocus:a,handleKeydown:s,handleMousedown:u}=D(mt,void 0),p=ct(t,d,c),g=_(()=>l.value==="menu"?"menuitem":l.value==="navigation"?"link":"button"),m=te(E=>{if([S.enter,S.numpadEnter,S.space].includes(E.code))return E.preventDefault(),E.stopImmediatePropagation(),o("clickimpl",E),!0},s);return{ns:n,itemRef:p,dataset:{[dt]:""},role:g,tabIndex:i,handleFocus:a,handleKeydown:m,handleMousedown:u}}});function to(e,o,n,l,t,d){const c=A("el-icon");return b(),K(ae,null,[e.divided?(b(),K("li",{key:0,role:"separator",class:Z(e.ns.bem("menu","item","divided"))},null,2)):fe("v-if",!0),q("li",he({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:i=>e.$emit("clickimpl",i),onFocus:e.handleFocus,onKeydown:Re(e.handleKeydown,["self"]),onMousedown:e.handleMousedown,onPointermove:i=>e.$emit("pointermove",i),onPointerleave:i=>e.$emit("pointerleave",i)}),[e.icon?(b(),R(c,{key:0},{default:y(()=>[(b(),R(Te(e.icon)))]),_:1})):fe("v-if",!0),F(e.$slots,"default")],16,["aria-disabled","tabindex","role","onClick","onFocus","onKeydown","onMousedown","onPointermove","onPointerleave"])],64)}var no=U(eo,[["render",to],["__file","dropdown-item-impl.vue"]]);const ht=()=>{const e=D("elDropdown",{}),o=_(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},oo=P({name:"ElDropdownItem",components:{ElDropdownCollectionItem:jn,ElRovingFocusItem:Xn,ElDropdownItemImpl:no},inheritAttrs:!1,props:ft,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:n}){const{elDropdown:l}=ht(),t=be(),d=C(null),c=_(()=>{var m,E;return(E=(m=I(d))==null?void 0:m.textContent)!=null?E:""}),{onItemEnter:i,onItemLeave:a}=D(ke,void 0),s=te(m=>(o("pointermove",m),m.defaultPrevented),Ue(m=>{if(e.disabled){a(m);return}const E=m.currentTarget;E===document.activeElement||E.contains(document.activeElement)||(i(m),m.defaultPrevented||E==null||E.focus())})),u=te(m=>(o("pointerleave",m),m.defaultPrevented),Ue(a)),p=te(m=>{if(!e.disabled)return o("click",m),m.type!=="keydown"&&m.defaultPrevented},m=>{var E,w,M;if(e.disabled){m.stopImmediatePropagation();return}(E=l==null?void 0:l.hideOnClick)!=null&&E.value&&((w=l.handleClick)==null||w.call(l)),(M=l.commandHandler)==null||M.call(l,e.command,t,m)}),g=_(()=>({...e,...n}));return{handleClick:p,handlePointerMove:s,handlePointerLeave:u,textContent:c,propsAndAttrs:g}}});function lo(e,o,n,l,t,d){var c;const i=A("el-dropdown-item-impl"),a=A("el-roving-focus-item"),s=A("el-dropdown-collection-item");return b(),R(s,{disabled:e.disabled,"text-value":(c=e.textValue)!=null?c:e.textContent},{default:y(()=>[O(a,{focusable:!e.disabled},{default:y(()=>[O(i,he(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:y(()=>[F(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var bt=U(oo,[["render",lo],["__file","dropdown-item.vue"]]);const ao=P({name:"ElDropdownMenu",props:Kn,setup(e){const o=Y("dropdown"),{_elDropdownSize:n}=ht(),l=n.value,{focusTrapRef:t,onKeydown:d}=D(Bt,void 0),{contentRef:c,role:i,triggerId:a}=D(ke,void 0),{collectionRef:s,getItems:u}=D(Vn,void 0),{rovingFocusGroupRef:p,rovingFocusGroupRootStyle:g,tabIndex:m,onBlur:E,onFocus:w,onMousedown:M}=D(He,void 0),{collectionRef:H}=D(Ke,void 0),B=_(()=>[o.b("menu"),o.bm("menu",l==null?void 0:l.value)]),j=ct(c,s,t,p,H),L=te(k=>{var Q;(Q=e.onKeydown)==null||Q.call(e,k)},k=>{const{currentTarget:Q,code:J,target:z}=k;if(Q.contains(z),S.tab===J&&k.stopImmediatePropagation(),k.preventDefault(),z!==I(c)||!Gn.includes(J))return;const le=u().filter(X=>!X.disabled).map(X=>X.ref);vt.includes(J)&&le.reverse(),Ge(le)});return{size:l,rovingFocusGroupRootStyle:g,tabIndex:m,dropdownKls:B,role:i,triggerId:a,dropdownListWrapperRef:j,handleKeydown:k=>{L(k),d(k)},onBlur:E,onFocus:w,onMousedown:M}}});function so(e,o,n,l,t,d){return b(),K("ul",{ref:e.dropdownListWrapperRef,class:Z(e.dropdownKls),style:ye(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:e.onBlur,onFocus:e.onFocus,onKeydown:Re(e.handleKeydown,["self"]),onMousedown:Re(e.onMousedown,["self"])},[F(e.$slots,"default")],46,["role","aria-labelledby","onBlur","onFocus","onKeydown","onMousedown"])}var gt=U(ao,[["render",so],["__file","dropdown-menu.vue"]]);const ro=Ie(qn,{DropdownItem:bt,DropdownMenu:gt}),io=ge(bt),uo=ge(gt);let co=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",l=>{let t=!1;switch(l.code){case S.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case S.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case S.tab:{Me(o,"mouseleave");break}case S.enter:case S.numpadEnter:case S.space:{t=!0,l.currentTarget.click();break}}return t&&(l.preventDefault(),l.stopPropagation()),!1})})}},po=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new co(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case S.down:{Me(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case S.up:{Me(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case S.tab:{Me(o.currentTarget,"mouseleave");break}case S.enter:case S.numpadEnter:case S.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},mo=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(l=>{l.nodeType===1&&new po(l,o)})}};const fo=P({name:"ElMenuCollapseTransition",setup(){const e=Y("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,l){Ce(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",l()},onAfterEnter(n){Oe(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),Rt(n,e.m("collapse"))?(Oe(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),Ce(n,e.m("collapse"))):(Ce(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),Oe(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){Ce(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function vo(e,o,n,l,t,d){return b(),R(Xe,he({mode:"out-in"},e.listeners),{default:y(()=>[F(e.$slots,"default")]),_:3},16)}var ho=U(fo,[["render",vo],["__file","menu-collapse-transition.vue"]]);function _t(e,o){const n=_(()=>{let t=e.parent;const d=[o.value];for(;t.type.name!=="ElMenu";)t.props.index&&d.unshift(t.props.index),t=t.parent;return d});return{parentMenu:_(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function bo(e){return _(()=>{const n=e.backgroundColor;return n?new Ft(n).shade(20).toString():""})}const yt=(e,o)=>{const n=Y("menu");return _(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":bo(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},go=oe({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:re},expandOpenIcon:{type:re},collapseCloseIcon:{type:re},collapseOpenIcon:{type:re}}),Ne="ElSubMenu";var xe=P({name:Ne,props:go,setup(e,{slots:o,expose:n}){const l=be(),{indexPath:t,parentMenu:d}=_t(l,_(()=>e.index)),c=Y("menu"),i=Y("sub-menu"),a=D("rootMenu");a||$e(Ne,"can not inject root menu");const s=D(`subMenu:${d.value.uid}`);s||$e(Ne,"can not inject sub menu");const u=C({}),p=C({});let g;const m=C(!1),E=C(),w=C(null),M=_(()=>J.value==="horizontal"&&B.value?"bottom-start":"right-start"),H=_(()=>J.value==="horizontal"&&B.value||J.value==="vertical"&&!a.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?k.value?e.expandOpenIcon:e.expandCloseIcon:tt:e.collapseCloseIcon&&e.collapseOpenIcon?k.value?e.collapseOpenIcon:e.collapseCloseIcon:Lt),B=_(()=>s.level===0),j=_(()=>{const h=e.teleported;return h===void 0?B.value:h}),L=_(()=>a.props.collapse?`${c.namespace.value}-zoom-in-left`:`${c.namespace.value}-zoom-in-top`),W=_(()=>J.value==="horizontal"&&B.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),k=_(()=>a.openedMenus.includes(e.index)),Q=_(()=>{let h=!1;return Object.values(u.value).forEach($=>{$.active&&(h=!0)}),Object.values(p.value).forEach($=>{$.active&&(h=!0)}),h}),J=_(()=>a.props.mode),z=Fe({index:e.index,indexPath:t,active:Q}),se=yt(a.props,s.level+1),le=_(()=>{var h;return(h=e.popperOffset)!=null?h:a.props.popperOffset}),X=_(()=>{var h;return(h=e.popperClass)!=null?h:a.props.popperClass}),pe=_(()=>{var h;return(h=e.showTimeout)!=null?h:a.props.showTimeout}),we=_(()=>{var h;return(h=e.hideTimeout)!=null?h:a.props.hideTimeout}),f=()=>{var h,$,V;return(V=($=(h=w.value)==null?void 0:h.popperRef)==null?void 0:$.popperInstanceRef)==null?void 0:V.destroy()},r=h=>{h||f()},v=()=>{a.props.menuTrigger==="hover"&&a.props.mode==="horizontal"||a.props.collapse&&a.props.mode==="vertical"||e.disabled||a.handleSubMenuClick({index:e.index,indexPath:t.value,active:Q.value})},T=(h,$=pe.value)=>{var V;if(h.type!=="focus"){if(a.props.menuTrigger==="click"&&a.props.mode==="horizontal"||!a.props.collapse&&a.props.mode==="vertical"||e.disabled){s.mouseInChild.value=!0;return}s.mouseInChild.value=!0,g==null||g(),{stop:g}=je(()=>{a.openMenu(e.index,t.value)},$),j.value&&((V=d.value.vnode.el)==null||V.dispatchEvent(new MouseEvent("mouseenter")))}},N=(h=!1)=>{var $;if(a.props.menuTrigger==="click"&&a.props.mode==="horizontal"||!a.props.collapse&&a.props.mode==="vertical"){s.mouseInChild.value=!1;return}g==null||g(),s.mouseInChild.value=!1,{stop:g}=je(()=>!m.value&&a.closeMenu(e.index,t.value),we.value),j.value&&h&&(($=s.handleMouseleave)==null||$.call(s,!0))};ie(()=>a.props.collapse,h=>r(!!h));{const h=V=>{p.value[V.index]=V},$=V=>{delete p.value[V.index]};ne(`subMenu:${l.uid}`,{addSubMenu:h,removeSubMenu:$,handleMouseleave:N,mouseInChild:m,level:s.level+1})}return n({opened:k}),Ee(()=>{a.addSubMenu(z),s.addSubMenu(z)}),Se(()=>{s.removeSubMenu(z),a.removeSubMenu(z)}),()=>{var h;const $=[(h=o.title)==null?void 0:h.call(o),G(ue,{class:i.e("icon-arrow"),style:{transform:k.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&a.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>de(H.value)?G(l.appContext.components[H.value]):G(H.value)})],V=a.isMenuPopup?G(ze,{ref:w,visible:k.value,effect:"light",pure:!0,offset:le.value,showArrow:!1,persistent:!0,popperClass:X.value,placement:M.value,teleported:j.value,fallbackPlacements:W.value,transition:L.value,gpuAcceleration:!1},{content:()=>{var ee;return G("div",{class:[c.m(J.value),c.m("popup-container"),X.value],onMouseenter:ce=>T(ce,100),onMouseleave:()=>N(!0),onFocus:ce=>T(ce,100)},[G("ul",{class:[c.b(),c.m("popup"),c.m(`popup-${M.value}`)],style:se.value},[(ee=o.default)==null?void 0:ee.call(o)])])},default:()=>G("div",{class:i.e("title"),onClick:v},$)}):G(ae,{},[G("div",{class:i.e("title"),ref:E,onClick:v},$),G(bn,{},{default:()=>{var ee;return lt(G("ul",{role:"menu",class:[c.b(),c.m("inline")],style:se.value},[(ee=o.default)==null?void 0:ee.call(o)]),[[At,k.value]])}})]);return G("li",{class:[i.b(),i.is("active",Q.value),i.is("opened",k.value),i.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:k.value,onMouseenter:T,onMouseleave:()=>N(),onFocus:T},[V])}}});const _o=oe({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:x(Array),default:()=>Dt([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:re,default:()=>zt},popperEffect:{type:x(String),default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),Pe=e=>at(e)&&e.every(o=>de(o)),yo={close:(e,o)=>de(e)&&Pe(o),open:(e,o)=>de(e)&&Pe(o),select:(e,o,n,l)=>de(e)&&Pe(o)&&Gt(n)&&(l===void 0||l instanceof Promise)};var Io=P({name:"ElMenu",props:_o,emits:yo,setup(e,{emit:o,slots:n,expose:l}){const t=be(),d=t.appContext.config.globalProperties.$router,c=C(),i=Y("menu"),a=Y("sub-menu"),s=C(-1),u=C(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),p=C(e.defaultActive),g=C({}),m=C({}),E=_(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),w=()=>{const f=p.value&&g.value[p.value];if(!f||e.mode==="horizontal"||e.collapse)return;f.indexPath.forEach(v=>{const T=m.value[v];T&&M(v,T.indexPath)})},M=(f,r)=>{u.value.includes(f)||(e.uniqueOpened&&(u.value=u.value.filter(v=>r.includes(v))),u.value.push(f),o("open",f,r))},H=f=>{const r=u.value.indexOf(f);r!==-1&&u.value.splice(r,1)},B=(f,r)=>{H(f),o("close",f,r)},j=({index:f,indexPath:r})=>{u.value.includes(f)?B(f,r):M(f,r)},L=f=>{(e.mode==="horizontal"||e.collapse)&&(u.value=[]);const{index:r,indexPath:v}=f;if(!(Ve(r)||Ve(v)))if(e.router&&d){const T=f.route||r,N=d.push(T).then(h=>(h||(p.value=r),h));o("select",r,v,{index:r,indexPath:v,route:T},N)}else p.value=r,o("select",r,v,{index:r,indexPath:v})},W=f=>{const r=g.value,v=r[f]||p.value&&r[p.value]||r[e.defaultActive];v?p.value=v.index:p.value=f},k=f=>{const r=getComputedStyle(f),v=Number.parseInt(r.marginLeft,10),T=Number.parseInt(r.marginRight,10);return f.offsetWidth+v+T||0},Q=()=>{var f,r;if(!c.value)return-1;const v=Array.from((r=(f=c.value)==null?void 0:f.childNodes)!=null?r:[]).filter(_e=>_e.nodeName!=="#comment"&&(_e.nodeName!=="#text"||_e.nodeValue)),T=64,N=getComputedStyle(c.value),h=Number.parseInt(N.paddingLeft,10),$=Number.parseInt(N.paddingRight,10),V=c.value.clientWidth-h-$;let ee=0,ce=0;return v.forEach((_e,wt)=>{ee+=k(_e),ee<=V-T&&(ce=wt+1)}),ce===v.length?-1:ce},J=f=>m.value[f].indexPath,z=(f,r=33.34)=>{let v;return()=>{v&&clearTimeout(v),v=setTimeout(()=>{f()},r)}};let se=!0;const le=()=>{if(s.value===Q())return;const f=()=>{s.value=-1,ot(()=>{s.value=Q()})};se?f():z(f)(),se=!1};ie(()=>e.defaultActive,f=>{g.value[f]||(p.value=""),W(f)}),ie(()=>e.collapse,f=>{f&&(u.value=[])}),ie(g.value,w);let X;Kt(()=>{e.mode==="horizontal"&&e.ellipsis?X=xt(c,le).stop:X==null||X()});const pe=C(!1);{const f=N=>{m.value[N.index]=N},r=N=>{delete m.value[N.index]};ne("rootMenu",Fe({props:e,openedMenus:u,items:g,subMenus:m,activeIndex:p,isMenuPopup:E,addMenuItem:N=>{g.value[N.index]=N},removeMenuItem:N=>{delete g.value[N.index]},addSubMenu:f,removeSubMenu:r,openMenu:M,closeMenu:B,handleMenuItemClick:L,handleSubMenuClick:j})),ne(`subMenu:${t.uid}`,{addSubMenu:f,removeSubMenu:r,mouseInChild:pe,level:0})}Ee(()=>{e.mode==="horizontal"&&new mo(t.vnode.el,i.namespace.value)}),l({open:r=>{const{indexPath:v}=m.value[r];v.forEach(T=>M(T,v))},close:H,handleResize:le});const we=yt(e,0);return()=>{var f,r;let v=(r=(f=n.default)==null?void 0:f.call(n))!=null?r:[];const T=[];if(e.mode==="horizontal"&&c.value){const $=Ht(v),V=s.value===-1?$:$.slice(0,s.value),ee=s.value===-1?[]:$.slice(s.value);ee!=null&&ee.length&&e.ellipsis&&(v=V,T.push(G(xe,{index:"sub-menu-more",class:a.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>G(ue,{class:a.e("icon-more")},{default:()=>G(e.ellipsisIcon)}),default:()=>ee})))}const N=e.closeOnClickOutside?[[Jt,()=>{u.value.length&&(pe.value||(u.value.forEach($=>o("close",$,J($))),u.value=[]))}]]:[],h=lt(G("ul",{key:String(e.collapse),role:"menubar",ref:c,style:we.value,class:{[i.b()]:!0,[i.m(e.mode)]:!0,[i.m("collapse")]:e.collapse}},[...v,...T]),N);return e.collapseTransition&&e.mode==="vertical"?G(ho,()=>h):h}}});const Eo=oe({index:{type:x([String,null]),default:null},route:{type:x([String,Object])},disabled:Boolean}),wo={click:e=>de(e.index)&&at(e.indexPath)},Be="ElMenuItem",Co=P({name:Be,components:{ElTooltip:ze},props:Eo,emits:wo,setup(e,{emit:o}){const n=be(),l=D("rootMenu"),t=Y("menu"),d=Y("menu-item");l||$e(Be,"can not inject root menu");const{parentMenu:c,indexPath:i}=_t(n,me(e,"index")),a=D(`subMenu:${c.value.uid}`);a||$e(Be,"can not inject sub menu");const s=_(()=>e.index===l.activeIndex),u=Fe({index:e.index,indexPath:i,active:s}),p=()=>{e.disabled||(l.handleMenuItemClick({index:e.index,indexPath:i.value,route:e.route}),o("click",u))};return Ee(()=>{a.addSubMenu(u),l.addMenuItem(u)}),Se(()=>{a.removeSubMenu(u),l.removeMenuItem(u)}),{parentMenu:c,rootMenu:l,active:s,nsMenu:t,nsMenuItem:d,handleClick:p}}});function Mo(e,o,n,l,t,d){const c=A("el-tooltip");return b(),K("li",{class:Z([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:e.handleClick},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(b(),R(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:y(()=>[F(e.$slots,"title")]),default:y(()=>[q("div",{class:Z(e.nsMenu.be("tooltip","trigger"))},[F(e.$slots,"default")],2)]),_:3},8,["effect"])):(b(),K(ae,{key:1},[F(e.$slots,"default"),F(e.$slots,"title")],64))],10,["onClick"])}var It=U(Co,[["render",Mo],["__file","menu-item.vue"]]);const $o={title:String},To="ElMenuItemGroup",So=P({name:To,props:$o,setup(){return{ns:Y("menu-item-group")}}});function ko(e,o,n,l,t,d){return b(),K("li",{class:Z(e.ns.b())},[q("div",{class:Z(e.ns.e("title"))},[e.$slots.title?F(e.$slots,"title",{key:1}):(b(),K(ae,{key:0},[Le(ve(e.title),1)],64))],2),q("ul",null,[F(e.$slots,"default")])],2)}var Et=U(So,[["render",ko],["__file","menu-item-group.vue"]]);const Oo=Ie(Io,{MenuItem:It,MenuItemGroup:Et,SubMenu:xe}),No=ge(It);ge(Et);const Po=ge(xe),Bo=""+new URL("../png/logo-7oke29fp.png",import.meta.url).href,Ro=jt("appStore",{state:()=>({menu:{isExpand:!0}}),getters:{},actions:{},persist:{key:"appStore",storage:localStorage}}),Fo={__name:"MenuItem",props:{item:{type:Object,default:()=>{}}},setup(e){const o=Ae();function n(l){o.push(l)}return(l,t)=>{const d=Vt,c=ue,i=A("MenuItem",!0),a=Po,s=No;return e.item.meta.visible?(b(),K(ae,{key:0},[e.item.children&&e.item.children.filter(u=>u.meta.visible).length>0?(b(),R(a,{key:0,index:e.item.path||e.item.meta.title},{title:y(()=>[e.item.meta.icon?(b(),R(c,{key:0},{default:y(()=>[O(d,{name:e.item.meta.icon},null,8,["name"])]),_:1})):fe("",!0),q("span",null,ve(e.item.meta.title),1)]),default:y(()=>[(b(!0),K(ae,null,De(e.item.children,u=>(b(),R(i,{key:u.path,item:u},null,8,["item"]))),128))]),_:1},8,["index"])):(b(),R(s,{key:1,index:e.item.path,onClick:t[0]||(t[0]=u=>n(e.item.path))},{default:y(()=>[e.item.meta.icon?(b(),R(c,{key:0},{default:y(()=>[O(d,{name:e.item.meta.icon},null,8,["name"])]),_:1})):fe("",!0),q("span",null,ve(e.item.meta.title),1)]),_:1},8,["index"]))],64)):fe("",!0)}}},Lo={__name:"BreadCrumb",setup(e){const o=Ae(),n=st(),l=C([]),t=o.getRoutes();function d(){l.value=[];let i=n.matched;if(i[0].name=="layout"&&(i=i.slice(1)),i.length>0)for(let a=i.length-1;a>=0;a--){const s=i[a];let u=s.path;(a==i.length-1||s.meta.type==0)&&(u=""),l.value.unshift({path:u,title:s.meta.title});const p=s.meta.parentPath||"";p&&l.value.unshift(...c(p))}}function c(i,a=[]){const s=t.find(u=>u.path==i);return s&&a.unshift({path:s.meta.type==0?"":s.path,title:s.meta.title}),s.meta.parentPath?c(s.meta.parentPath,a):a}return ie(()=>n.path,()=>{d()},{immediate:!0}),(i,a)=>{const s=mn,u=pn;return b(),R(u,null,{default:y(()=>[(b(!0),K(ae,null,De(l.value,(p,g)=>(b(),R(s,{key:p.path+g,to:p.path},{default:y(()=>[Le(ve(p.title),1)]),_:2},1032,["to"]))),128))]),_:1})}}},Ao={class:"app-aside"},Do=P({name:"Layout"}),Jo=Object.assign(Do,{setup(e){const o=Ae();st();const n=Yt(),l=Ro(),t=_(()=>n.userInfo),d=_(()=>n.userMenus);function c(){l.menu.isExpand=!l.menu.isExpand}function i(){qt.logout().finally(()=>{n.setLogout(),o.push("/login")})}return(a,s)=>{const u=ue,p=on,g=A("arrow-down"),m=io,E=uo,w=ro,M=Oo,H=rt,B=A("router-view");return b(),K(ae,null,[q("div",{class:"app-head",style:ye(`left: ${I(l).menu.isExpand?"210px":"64px"};`)},[O(u,{class:"menu-collapse",onClick:c},{default:y(()=>[(b(),R(Te(I(l).menu.isExpand?"Fold":"Expand")))]),_:1}),O(Lo),O(w,{trigger:"hover"},{dropdown:y(()=>[O(E,null,{default:y(()=>[O(m,{onClick:i},{default:y(()=>s[0]||(s[0]=[Le("退出")])),_:1})]),_:1})]),default:y(()=>[q("div",null,[O(p,{src:t.value.avatar,size:32,icon:"UserFilled",shape:"circle",fit:"cover"},null,8,["src"]),q("span",null,ve(t.value.name),1),O(u,null,{default:y(()=>[O(g)]),_:1})])]),_:1})],4),q("div",Ao,[O(H,null,{default:y(()=>[q("div",{class:Z(["app-logo",I(l).menu.isExpand?"":"collapsed"])},s[1]||(s[1]=[q("img",{class:"app-logo-img",src:Bo,alt:""},null,-1),q("span",null,"Vue3管理后台",-1)]),2),O(M,{collapse:!I(l).menu.isExpand,"unique-opened":!0,"default-active":a.$route.meta.activePath||a.$route.path||a.$route.name},{default:y(()=>[(b(!0),K(ae,null,De(d.value,j=>(b(),R(Fo,{key:j.path,item:j},null,8,["item"]))),128))]),_:1},8,["collapse","default-active"])]),_:1})]),q("div",{class:"app-main",style:ye(`padding-left: ${I(l).menu.isExpand?"210px":"64px"};`)},[O(B,{class:"app-view"})],4)],64)}}});export{Jo as default};