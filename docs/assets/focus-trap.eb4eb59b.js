import{r as A,u as re,S as ae,a as V,E as ee,_ as ce,y as ue}from"./index.74566536.js";import{G,i as te,u as v,ab as ie,r as m,b as O,Q as k,k as de,p as le,w as F,n as $,l as fe}from"./vendors.2d77e465.js";import{i as pe}from"./button.37e31cb7.js";const Ee='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',ve=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,Ke=e=>Array.from(e.querySelectorAll(Ee)).filter(t=>me(t)&&ve(t)),me=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},Ye=function(e,t,...s){let n;t.includes("mouse")||t.includes("click")?n="MouseEvents":t.includes("key")?n="KeyboardEvent":n="HTMLEvents";const r=document.createEvent(n);return r.initEvent(t,...s),e.dispatchEvent(r),e};var Te=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(Te||{});const g=e=>{const t=A(e)?e:[e],s=[];return t.forEach(n=>{var r;A(n)?s.push(...g(n)):G(n)&&A(n.children)?s.push(...g(n.children)):(s.push(n),G(n)&&((r=n.component)==null?void 0:r.subTree)&&s.push(...g(n.component.subTree)))}),s};var be={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const Se=e=>(t,s)=>ye(t,s,v(e)),ye=(e,t,s)=>ae(s,e,e).replace(/\{(\w+)\}/g,(n,r)=>{var c;return`${(c=t==null?void 0:t[r])!=null?c:`{${r}}`}`}),Le=e=>{const t=te(()=>v(e).name),s=ie(e)?e:m(e);return{lang:t,locale:s,t:Se(e)}},Be=()=>{const e=re("locale");return Le(te(()=>e.value||be))};let E=[];const J=e=>{const t=e;t.key===ee.esc&&E.forEach(s=>s(t))},he=e=>{O(()=>{E.length===0&&document.addEventListener("keydown",J),V&&E.push(e)}),k(()=>{E=E.filter(t=>t!==e),E.length===0&&V&&document.removeEventListener("keydown",J)})},R="focus-trap.focus-after-trapped",D="focus-trap.focus-after-released",Ne="focus-trap.focusout-prevented",j={cancelable:!0,bubbles:!1},_e={cancelable:!0,bubbles:!1},W="focusAfterTrapped",q="focusAfterReleased",Ce=Symbol("elFocusTrap"),I=m(),h=m(0),M=m(0);let S=0;const ne=e=>{const t=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const r=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||r?NodeFilter.FILTER_SKIP:n.tabIndex>=0||n===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)t.push(s.currentNode);return t},X=(e,t)=>{for(const s of e)if(!we(s,t))return s},we=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},Ae=e=>{const t=ne(e),s=X(t,e),n=X(t.reverse(),e);return[s,n]},Fe=e=>e instanceof HTMLInputElement&&"select"in e,f=(e,t)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),M.value=window.performance.now(),e!==s&&Fe(e)&&t&&e.select()}};function z(e,t){const s=[...e],n=e.indexOf(t);return n!==-1&&s.splice(n,1),s}const ge=()=>{let e=[];return{push:n=>{const r=e[0];r&&n!==r&&r.pause(),e=z(e,n),e.unshift(n)},remove:n=>{var r,c;e=z(e,n),(c=(r=e[0])==null?void 0:r.resume)==null||c.call(r)}}},Re=(e,t=!1)=>{const s=document.activeElement;for(const n of e)if(f(n,t),document.activeElement!==s)return},Q=ge(),De=()=>h.value>M.value,y=()=>{I.value="pointer",h.value=window.performance.now()},Z=()=>{I.value="keyboard",h.value=window.performance.now()},Oe=()=>(O(()=>{S===0&&(document.addEventListener("mousedown",y),document.addEventListener("touchstart",y),document.addEventListener("keydown",Z)),S++}),k(()=>{S--,S<=0&&(document.removeEventListener("mousedown",y),document.removeEventListener("touchstart",y),document.removeEventListener("keydown",Z))}),{focusReason:I,lastUserFocusTimestamp:h,lastAutomatedFocusTimestamp:M}),L=e=>new CustomEvent(Ne,{..._e,detail:e}),ke=de({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[W,q,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const s=m();let n,r;const{focusReason:c}=Oe();he(o=>{e.trapped&&!p.paused&&t("release-requested",o)});const p={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},T=o=>{if(!e.loop&&!e.trapped||p.paused)return;const{key:a,altKey:u,ctrlKey:i,metaKey:d,currentTarget:Y,shiftKey:B}=o,{loop:H}=e,se=a===ee.tab&&!u&&!i&&!d,b=document.activeElement;if(se&&b){const _=Y,[C,w]=Ae(_);if(C&&w){if(!B&&b===w){const l=L({focusReason:c.value});t("focusout-prevented",l),l.defaultPrevented||(o.preventDefault(),H&&f(C,!0))}else if(B&&[C,_].includes(b)){const l=L({focusReason:c.value});t("focusout-prevented",l),l.defaultPrevented||(o.preventDefault(),H&&f(w,!0))}}else if(b===_){const l=L({focusReason:c.value});t("focusout-prevented",l),l.defaultPrevented||o.preventDefault()}}};le(Ce,{focusTrapRef:s,onKeydown:T}),F(()=>e.focusTrapEl,o=>{o&&(s.value=o)},{immediate:!0}),F([s],([o],[a])=>{o&&(o.addEventListener("keydown",T),o.addEventListener("focusin",P),o.addEventListener("focusout",U)),a&&(a.removeEventListener("keydown",T),a.removeEventListener("focusin",P),a.removeEventListener("focusout",U))});const N=o=>{t(W,o)},oe=o=>t(q,o),P=o=>{const a=v(s);if(!a)return;const u=o.target,i=o.relatedTarget,d=u&&a.contains(u);e.trapped||i&&a.contains(i)||(n=i),d&&t("focusin",o),!p.paused&&e.trapped&&(d?r=u:f(r,!0))},U=o=>{const a=v(s);if(!(p.paused||!a))if(e.trapped){const u=o.relatedTarget;!pe(u)&&!a.contains(u)&&setTimeout(()=>{if(!p.paused&&e.trapped){const i=L({focusReason:c.value});t("focusout-prevented",i),i.defaultPrevented||f(r,!0)}},0)}else{const u=o.target;u&&a.contains(u)||t("focusout",o)}};async function x(){await $();const o=v(s);if(o){Q.push(p);const a=o.contains(document.activeElement)?n:document.activeElement;if(n=a,!o.contains(a)){const i=new Event(R,j);o.addEventListener(R,N),o.dispatchEvent(i),i.defaultPrevented||$(()=>{let d=e.focusStartEl;ue(d)||(f(d),document.activeElement!==d&&(d="first")),d==="first"&&Re(ne(o),!0),(document.activeElement===a||d==="container")&&f(o)})}}}function K(){const o=v(s);if(o){o.removeEventListener(R,N);const a=new CustomEvent(D,{...j,detail:{focusReason:c.value}});o.addEventListener(D,oe),o.dispatchEvent(a),!a.defaultPrevented&&(c.value=="keyboard"||!De())&&f(n!=null?n:document.body),o.removeEventListener(D,N),Q.remove(p)}}return O(()=>{e.trapped&&x(),F(()=>e.trapped,o=>{o?x():K()})}),k(()=>{e.trapped&&K()}),{onKeydown:T}}});function Ie(e,t,s,n,r,c){return fe(e.$slots,"default",{handleKeydown:e.onKeydown})}var He=ce(ke,[["render",Ie],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{He as E,Ce as F,Te as P,g as f,Ke as o,Ye as t,Be as u};