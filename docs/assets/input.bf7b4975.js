var Ue=Object.defineProperty,qe=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var ze=(r,i,n)=>i in r?Ue(r,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[i]=n,Z=(r,i)=>{for(var n in i||(i={}))Ye.call(i,n)&&ze(r,n,i[n]);if(ke)for(var n of ke(i))Ge.call(i,n)&&ze(r,n,i[n]);return r},Se=(r,i)=>qe(r,Xe(i));import{c,as as Je,g as Ve,r as N,e as Ze,af as Qe,d as Q,Y as ee,f as eo,at as oo,ah as ro,a0 as to,ag as no,aq as oe,w as re,A as P,o as lo,C as io,t as ao,n as po,v as so,k as d,y as m,G as f,F as te,s as h,u as o,D as H,q as $,l as y,m as M,E as K,M as ne,z as uo,al as co,N as vo,W,x as bo,H as Ce,I as fo}from"./index.523c7cf2.js";import{d as Ie,n as Ee,z as ho,F as xo,G as go,u as Pe,V as _o,H as mo,I as yo,j as wo,f as ko,J as $e,p as B,K as zo,_ as So,i as Co}from"./button.99d33f40.js";const le="update:modelValue",Io=r=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(r),Eo=["class","style"],Po=/^on[A-Z]/,$o=(r={})=>{const{excludeListeners:i=!1,excludeKeys:n}=r,t=c(()=>((n==null?void 0:n.value)||[]).concat(Eo)),s=Ve();return s?c(()=>{var v;return Je(Object.entries((v=s.proxy)==null?void 0:v.$attrs).filter(([p])=>!t.value.includes(p)&&!(i&&Po.test(p))))}):c(()=>({}))};function No(r){const i=N();function n(){if(r.value==null)return;const{selectionStart:s,selectionEnd:v,value:p}=r.value;if(s==null||v==null)return;const _=p.slice(0,Math.max(0,s)),u=p.slice(Math.max(0,v));i.value={selectionStart:s,selectionEnd:v,value:p,beforeTxt:_,afterTxt:u}}function t(){if(r.value==null||i.value==null)return;const{value:s}=r.value,{beforeTxt:v,afterTxt:p,selectionStart:_}=i.value;if(v==null||p==null||_==null)return;let u=s.length;if(s.endsWith(p))u=s.length-p.length;else if(s.startsWith(v))u=v.length;else{const x=v[_-1],w=s.indexOf(x,_-1);w!==-1&&(u=w+1)}r.value.setSelectionRange(u,u)}return[n,t]}let g;const Vo=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Ao=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Fo(r){const i=window.getComputedStyle(r),n=i.getPropertyValue("box-sizing"),t=Number.parseFloat(i.getPropertyValue("padding-bottom"))+Number.parseFloat(i.getPropertyValue("padding-top")),s=Number.parseFloat(i.getPropertyValue("border-bottom-width"))+Number.parseFloat(i.getPropertyValue("border-top-width"));return{contextStyle:Ao.map(p=>`${p}:${i.getPropertyValue(p)}`).join(";"),paddingSize:t,borderSize:s,boxSizing:n}}function Ne(r,i=1,n){var t;g||(g=document.createElement("textarea"),document.body.appendChild(g));const{paddingSize:s,borderSize:v,boxSizing:p,contextStyle:_}=Fo(r);g.setAttribute("style",`${_};${Vo}`),g.value=r.value||r.placeholder||"";let u=g.scrollHeight;const x={};p==="border-box"?u=u+v:p==="content-box"&&(u=u-s),g.value="";const w=g.scrollHeight-s;if(Ie(i)){let b=w*i;p==="border-box"&&(b=b+s+v),u=Math.max(b,u),x.minHeight=`${b}px`}if(Ie(n)){let b=w*n;p==="border-box"&&(b=b+s+v),u=Math.min(b,u)}return x.height=`${u}px`,(t=g.parentNode)==null||t.removeChild(g),g=void 0,x}const To=Ze({id:{type:String,default:void 0},size:Qe,disabled:Boolean,modelValue:{type:Q([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:Q([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ee,default:""},prefixIcon:{type:Ee,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:Q([Object,Array,String]),default:()=>ho({})}}),Mo={[le]:r=>ee(r),input:r=>ee(r),change:r=>ee(r),focus:r=>r instanceof FocusEvent,blur:r=>r instanceof FocusEvent,clear:()=>!0,mouseleave:r=>r instanceof MouseEvent,mouseenter:r=>r instanceof MouseEvent,keydown:r=>r instanceof Event,compositionstart:r=>r instanceof CompositionEvent,compositionupdate:r=>r instanceof CompositionEvent,compositionend:r=>r instanceof CompositionEvent},Bo=["role"],Lo=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],Do=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"],Oo={name:"ElInput",inheritAttrs:!1},Ro=eo(Se(Z({},Oo),{props:To,emits:Mo,setup(r,{expose:i,emit:n}){const t=r,s={suffix:"append",prefix:"prepend"},v=Ve(),p=oo(),_=ro(),u=c(()=>{const e={};return t.containerRole==="combobox"&&(e["aria-haspopup"]=p["aria-haspopup"],e["aria-owns"]=p["aria-owns"],e["aria-expanded"]=p["aria-expanded"]),e}),x=$o({excludeKeys:c(()=>Object.keys(u.value))}),{form:w,formItem:b}=xo(),{inputId:ie}=go(t,{formItemContext:b}),Ae=to(),C=no(),l=Pe("input"),ae=Pe("textarea"),L=oe(),I=oe(),V=N(!1),U=N(!1),A=N(!1),D=N(!1),pe=N(),q=oe(t.inputStyle),F=c(()=>L.value||I.value),se=c(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),T=c(()=>(b==null?void 0:b.validateState)||""),ue=c(()=>T.value&&_o[T.value]),Fe=c(()=>D.value?mo:yo),Te=c(()=>[p.style,t.inputStyle]),de=c(()=>[t.inputStyle,q.value,{resize:t.resize}]),k=c(()=>wo(t.modelValue)?"":String(t.modelValue)),O=c(()=>t.clearable&&!C.value&&!t.readonly&&!!k.value&&(V.value||U.value)),X=c(()=>t.showPassword&&!C.value&&!t.readonly&&!!k.value&&(!!k.value||V.value)),E=c(()=>t.showWordLimit&&!!x.value.maxlength&&(t.type==="text"||t.type==="textarea")&&!C.value&&!t.readonly&&!t.showPassword),Y=c(()=>Array.from(k.value).length),Me=c(()=>!!E.value&&Y.value>Number(x.value.maxlength)),Be=c(()=>!!_.suffix||!!t.suffixIcon||O.value||t.showPassword||E.value||!!T.value&&se.value),[Le,De]=No(L);ko(I,e=>{if(!E.value||t.resize!=="both")return;const a=e[0],{width:z}=a.contentRect;pe.value={right:`calc(100% - ${z+15+6}px)`}});const R=()=>{const{type:e,autosize:a}=t;if(!(!Co||e!=="textarea"))if(a){const z=Ce(a)?a.minRows:void 0,S=Ce(a)?a.maxRows:void 0;q.value=Z({},Ne(I.value,z,S))}else q.value={minHeight:Ne(I.value).minHeight}},j=()=>{const e=F.value;!e||e.value===k.value||(e.value=k.value)},ce=e=>{const{el:a}=v.vnode;if(!a)return;const S=Array.from(a.querySelectorAll(`.${l.e(e)}`)).find(We=>We.parentNode===a);if(!S)return;const we=s[e];_[we]?S.style.transform=`translateX(${e==="suffix"?"-":""}${a.querySelector(`.${l.be("group",we)}`).offsetWidth}px)`:S.removeAttribute("style")},G=()=>{ce("prefix"),ce("suffix")},J=async e=>{Le();let{value:a}=e.target;t.formatter&&(a=t.parser?t.parser(a):a,a=t.formatter(a)),!A.value&&a!==k.value&&(n(le,a),n("input",a),await P(),j(),De())},ve=e=>{n("change",e.target.value)},be=e=>{n("compositionstart",e),A.value=!0},fe=e=>{var a;n("compositionupdate",e);const z=(a=e.target)==null?void 0:a.value,S=z[z.length-1]||"";A.value=!Io(S)},he=e=>{n("compositionend",e),A.value&&(A.value=!1,J(e))},Oe=()=>{D.value=!D.value,xe()},xe=async()=>{var e;await P(),(e=F.value)==null||e.focus()},Re=()=>{var e;return(e=F.value)==null?void 0:e.blur()},ge=e=>{V.value=!0,n("focus",e)},_e=e=>{var a;V.value=!1,n("blur",e),t.validateEvent&&((a=b==null?void 0:b.validate)==null||a.call(b,"blur").catch(z=>$e()))},je=e=>{U.value=!1,n("mouseleave",e)},He=e=>{U.value=!0,n("mouseenter",e)},me=e=>{n("keydown",e)},Ke=()=>{var e;(e=F.value)==null||e.select()},ye=()=>{n(le,""),n("change",""),n("clear"),n("input","")};return re(()=>t.modelValue,()=>{var e;P(()=>R()),t.validateEvent&&((e=b==null?void 0:b.validate)==null||e.call(b,"change").catch(a=>$e()))}),re(k,()=>j()),re(()=>t.type,async()=>{await P(),j(),R(),G()}),lo(async()=>{!t.formatter&&t.parser,j(),G(),await P(),R()}),io(async()=>{await P(),G()}),i({input:L,textarea:I,ref:F,textareaStyle:de,autosize:ao(t,"autosize"),focus:xe,blur:Re,select:Ke,clear:ye,resizeTextarea:R}),(e,a)=>po((d(),m("div",ne(o(u),{class:[e.type==="textarea"?o(ae).b():o(l).b(),o(l).m(o(Ae)),o(l).is("disabled",o(C)),o(l).is("exceed",o(Me)),{[o(l).b("group")]:e.$slots.prepend||e.$slots.append,[o(l).bm("group","append")]:e.$slots.append,[o(l).bm("group","prepend")]:e.$slots.prepend,[o(l).m("prefix")]:e.$slots.prefix||e.prefixIcon,[o(l).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[o(l).bm("suffix","password-clear")]:o(O)&&o(X)},e.$attrs.class],style:o(Te),role:e.containerRole,onMouseenter:He,onMouseleave:je}),[f(" input "),e.type!=="textarea"?(d(),m(te,{key:0},[f(" prepend slot "),e.$slots.prepend?(d(),m("div",{key:0,class:h(o(l).be("group","prepend"))},[H(e.$slots,"prepend")],2)):f("v-if",!0),$("div",{class:h([o(l).e("wrapper"),o(l).is("focus",V.value)])},[f(" prefix slot "),e.$slots.prefix||e.prefixIcon?(d(),m("span",{key:0,class:h(o(l).e("prefix"))},[$("span",{class:h(o(l).e("prefix-inner"))},[H(e.$slots,"prefix"),e.prefixIcon?(d(),y(o(B),{key:0,class:h(o(l).e("icon"))},{default:M(()=>[(d(),y(K(e.prefixIcon)))]),_:1},8,["class"])):f("v-if",!0)],2)],2)):f("v-if",!0),$("input",ne({id:o(ie),ref_key:"input",ref:L,class:o(l).e("inner")},o(x),{type:e.showPassword?D.value?"text":"password":e.type,disabled:o(C),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:be,onCompositionupdate:fe,onCompositionend:he,onInput:J,onFocus:ge,onBlur:_e,onChange:ve,onKeydown:me}),null,16,Lo),f(" suffix slot "),o(Be)?(d(),m("span",{key:1,class:h(o(l).e("suffix"))},[$("span",{class:h(o(l).e("suffix-inner"))},[!o(O)||!o(X)||!o(E)?(d(),m(te,{key:0},[H(e.$slots,"suffix"),e.suffixIcon?(d(),y(o(B),{key:0,class:h(o(l).e("icon"))},{default:M(()=>[(d(),y(K(e.suffixIcon)))]),_:1},8,["class"])):f("v-if",!0)],64)):f("v-if",!0),o(O)?(d(),y(o(B),{key:1,class:h([o(l).e("icon"),o(l).e("clear")]),onMousedown:co(o(vo),["prevent"]),onClick:ye},{default:M(()=>[uo(o(zo))]),_:1},8,["class","onMousedown"])):f("v-if",!0),o(X)?(d(),y(o(B),{key:2,class:h([o(l).e("icon"),o(l).e("password")]),onClick:Oe},{default:M(()=>[(d(),y(K(o(Fe))))]),_:1},8,["class"])):f("v-if",!0),o(E)?(d(),m("span",{key:3,class:h(o(l).e("count"))},[$("span",{class:h(o(l).e("count-inner"))},W(o(Y))+" / "+W(o(x).maxlength),3)],2)):f("v-if",!0),o(T)&&o(ue)&&o(se)?(d(),y(o(B),{key:4,class:h([o(l).e("icon"),o(l).e("validateIcon"),o(l).is("loading",o(T)==="validating")])},{default:M(()=>[(d(),y(K(o(ue))))]),_:1},8,["class"])):f("v-if",!0)],2)],2)):f("v-if",!0)],2),f(" append slot "),e.$slots.append?(d(),m("div",{key:1,class:h(o(l).be("group","append"))},[H(e.$slots,"append")],2)):f("v-if",!0)],64)):(d(),m(te,{key:1},[f(" textarea "),$("textarea",ne({id:o(ie),ref_key:"textarea",ref:I,class:o(ae).e("inner")},o(x),{tabindex:e.tabindex,disabled:o(C),readonly:e.readonly,autocomplete:e.autocomplete,style:o(de),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:be,onCompositionupdate:fe,onCompositionend:he,onInput:J,onFocus:ge,onBlur:_e,onChange:ve,onKeydown:me}),null,16,Do),o(E)?(d(),m("span",{key:0,style:bo(pe.value),class:h(o(l).e("count"))},W(o(Y))+" / "+W(o(x).maxlength),7)):f("v-if",!0)],64))],16,Bo)),[[so,e.type!=="hidden"]])}}));var jo=So(Ro,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Uo=fo(jo);export{Uo as E};