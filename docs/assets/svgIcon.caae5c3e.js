import{av as c,aw as i,ax as p,a3 as _,s as g,D as l,A as r,E as u,a9 as v,u as d,aH as m,aI as S}from"./index.931130d0.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";function x(e,o="YYYY-MM-DD HH:mm:ss"){let t=e;typeof e!="object"&&(typeof e=="string"&&(e=e.replace(/-/g,"/")),t=new Date(e));const s={"Y+":t.getFullYear().toString(),"M+":(t.getMonth()+1).toString(),"D+":t.getDate().toString(),"H+":t.getHours().toString(),"m+":t.getMinutes().toString(),"s+":t.getSeconds().toString()};let a;for(let n in s)a=new RegExp("("+n+")").exec(o),a&&(o=o.replace(a[1],a[1].length==1?s[n]:s[n].padStart(a[1].length,"0")));return o}const h=e=>(m("data-v-44574516"),e=e(),S(),e),D={class:"page-svg"},I={class:"icon-box"},y=h(()=>r("span",null," svg-icon\u6848\u4F8B",-1)),Y={__name:"svgIcon",setup(e){return c(),i(),p(),(o,t)=>{const s=_("svg-icon",!0);return g(),l("div",D,[r("div",I,[u(s,{name:"case",size:"16px"}),y]),r("div",null,"\u8BBF\u95EE\u65F6\u95F4\uFF1A"+v(d(x)(Date.now())),1)])}}};var M=f(Y,[["__scopeId","data-v-44574516"]]);export{M as default};