import{ax as _,ay as i,az as p,af as u,x as g,F as l,B as c,G as v,a9 as f,k as h,aJ as x,aK as y}from"./index.37164a17.js";import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";function d(e,o="yyyy-MM-dd hh:mm:ss"){if(!e||typeof e=="object"&&!(e instanceof Date))return"";typeof e=="string"&&(e=e.replace(/-/g,"/")),e instanceof Date||(e=new Date(e));function s(a){return a<10?"0"+a:a}var n={"y+":e.getFullYear(),"M+":s(e.getMonth()+1),"d+":s(e.getDate()),"h+":s(e.getHours()),"m+":s(e.getMinutes()),"s+":s(e.getSeconds())},t;for(var r in n)t=new RegExp(r).exec(o),t&&(o=o.replace(t[0],n[r]));return o}const D=e=>(x("data-v-4c9a44b5"),e=e(),y(),e),I={class:"page-svg"},S={class:"icon-box"},b=D(()=>c("span",null," svg-icon\u6848\u4F8B",-1)),M={__name:"svgIcon",setup(e){return _(),i(),p(),(o,s)=>{const n=u("svg-icon",!0);return g(),l("div",I,[c("div",S,[v(n,{name:"case",size:"16px"}),b]),c("div",null,"\u8BBF\u95EE\u65F6\u95F4\uFF1A"+f(h(d)(Date.now())),1)])}}},R=m(M,[["__scopeId","data-v-4c9a44b5"]]);export{R as default};
