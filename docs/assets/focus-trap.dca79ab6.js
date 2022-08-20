import{aE as V,c as R,u as p,aF as W,aG as q,r as K,o as U,i as k,m as B,a1 as J,j as G,p as z,w as g,_ as X,J as A,ac as Q,M as Z}from"./index.3a7a5440.js";import{i as ee}from"./button.ebb1883c.js";const te='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',ne=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ge=e=>Array.from(e.querySelectorAll(te)).filter(t=>oe(t)&&ne(t)),oe=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},ye=function(e,t,...n){let a;t.includes("mouse")||t.includes("click")?a="MouseEvents":t.includes("key")?a="KeyboardEvent":a="HTMLEvents";const s=document.createEvent(a);return s.initEvent(t,...n),e.dispatchEvent(s),e},Fe=(e,t,n,a=!1)=>{e&&t&&n&&(e==null||e.addEventListener(t,n,a))},Se=(e,t,n,a=!1)=>{e&&t&&n&&(e==null||e.removeEventListener(t,n,a))},Le=(e,t,{checkForDefaultPrevented:n=!0}={})=>s=>{const c=e==null?void 0:e(s);if(n===!1||!c)return t==null?void 0:t(s)},Ce=e=>t=>t.pointerType==="mouse"?e(t):void 0;var ae={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const se=e=>(t,n)=>re(t,n,p(e)),re=(e,t,n)=>W(n,e,e).replace(/\{(\w+)\}/g,(a,s)=>{var c;return`${(c=t==null?void 0:t[s])!=null?c:`{${s}}`}`}),ce=e=>{const t=R(()=>p(e).name),n=q(e)?e:K(e);return{lang:t,locale:n,t:se(e)}},we=()=>{const e=V("locale");return ce(R(()=>e.value||ae))};let f=[];const ie=e=>{const t=n=>{const a=n;a.key===J.esc&&f.forEach(s=>s(a))};U(()=>{f.length===0&&document.addEventListener("keydown",t),k&&f.push(e)}),B(()=>{f=f.filter(n=>n!==e),f.length===0&&k&&document.removeEventListener("keydown",t)})},$=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const s=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||s?NodeFilter.FILTER_SKIP:a.tabIndex>=0||a===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},D=(e,t)=>{for(const n of e)if(!ue(n,t))return n},ue=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},le=e=>{const t=$(e),n=D(t,e),a=D(t.reverse(),e);return[n,a]},de=e=>e instanceof HTMLInputElement&&"select"in e,d=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&de(e)&&t&&e.select()}};function O(e,t){const n=[...e],a=e.indexOf(t);return a!==-1&&n.splice(a,1),n}const fe=()=>{let e=[];return{push:a=>{const s=e[0];s&&a!==s&&s.pause(),e=O(e,a),e.unshift(a)},remove:a=>{var s,c;e=O(e,a),(c=(s=e[0])==null?void 0:s.resume)==null||c.call(s)}}},pe=(e,t=!1)=>{const n=document.activeElement;for(const a of e)if(d(a,t),document.activeElement!==n)return},P=fe(),y="focus-trap.focus-after-trapped",F="focus-trap.focus-after-released",x={cancelable:!0,bubbles:!1},M="focusAfterTrapped",I="focusAfterReleased",me=Symbol("elFocusTrap"),Ee=G({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[M,I,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const n=K();let a,s;ie(o=>{e.trapped&&!c.paused&&t("release-requested",o)});const c={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},m=o=>{if(!e.loop&&!e.trapped||c.paused)return;const{key:r,altKey:i,ctrlKey:u,metaKey:l,currentTarget:j,shiftKey:N}=o,{loop:_}=e,Y=r===J.tab&&!i&&!u&&!l,E=document.activeElement;if(Y&&E){const h=j,[T,b]=le(h);T&&b?!N&&E===b?(o.preventDefault(),_&&d(T,!0),t("focusout-prevented")):N&&[T,h].includes(E)&&(o.preventDefault(),_&&d(b,!0),t("focusout-prevented")):E===h&&(o.preventDefault(),t("focusout-prevented"))}};z(me,{focusTrapRef:n,onKeydown:m}),g(()=>e.focusTrapEl,o=>{o&&(n.value=o)},{immediate:!0}),g([n],([o],[r])=>{o&&(o.addEventListener("keydown",m),o.addEventListener("focusin",S),o.addEventListener("focusout",L)),r&&(r.removeEventListener("keydown",m),r.removeEventListener("focusin",S),r.removeEventListener("focusout",L))});const v=o=>{t(M,o)},H=o=>t(I,o),S=o=>{const r=p(n);if(!r)return;const i=o.target,u=i&&r.contains(i);u&&t("focusin",o),!c.paused&&e.trapped&&(u?s=i:d(s,!0))},L=o=>{const r=p(n);if(!(c.paused||!r))if(e.trapped){const i=o.relatedTarget;!ee(i)&&!r.contains(i)&&setTimeout(()=>{!c.paused&&e.trapped&&d(s,!0)},0)}else{const i=o.target;i&&r.contains(i)||t("focusout",o)}};async function C(){await A();const o=p(n);if(o){P.push(c);const r=document.activeElement;if(a=r,!o.contains(r)){const u=new Event(y,x);o.addEventListener(y,v),o.dispatchEvent(u),u.defaultPrevented||A(()=>{let l=e.focusStartEl;Q(l)||(d(l),document.activeElement!==l&&(l="first")),l==="first"&&pe($(o),!0),(document.activeElement===r||l==="container")&&d(o)})}}}function w(){const o=p(n);if(o){o.removeEventListener(y,v);const r=new Event(F,x);o.addEventListener(F,H),o.dispatchEvent(r),r.defaultPrevented||d(a!=null?a:document.body,!0),o.removeEventListener(F,v),P.remove(c)}}return U(()=>{e.trapped&&C(),g(()=>e.trapped,o=>{o?C():w()})}),B(()=>{e.trapped&&w()}),{onKeydown:m}}});function ve(e,t,n,a,s,c){return Z(e.$slots,"default",{handleKeydown:e.onKeydown})}var Ne=X(Ee,[["render",ve],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{Ne as E,me as F,Se as a,ge as b,Le as c,Fe as o,ye as t,we as u,Ce as w};