import{r as b,p as g}from"./element-plus-BFcDWg1f.js";import{r as h,u as v,_ as w}from"./index-BSkCN0c1.js";import{u as x,b as V}from"./vue-router-eHBfJRM6.js";import{o as n,R as l,W as c,am as k,r as B,c as I,a as u,M as f,u as i,Q as m,d as C,U as p,an as E,ao as L}from"./@vue-MCHm96jj.js";import{_ as R}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./lodash-es-Rc7wuZoG.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BBkpAsxl.js";import"./@element-plus-BwAoTnwU.js";import"./@ctrl-r5W6hzzQ.js";import"./@popperjs-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-C7Q_MLg3.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./lazysizes-DIA6Q0hx.js";const N=h.currentRoute,S=v();function d(t,e){var s,a;return e||(e=N.value.path),!!(((a=(s=S.menuObj[e])==null?void 0:s.meta)==null?void 0:a.buttons)||[]).some(o=>o==t)}const $={__name:"ImgView",props:{modelValue:{type:Boolean,default:!1},urlList:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:e}){const r=e;return(s,a)=>{const o=b;return t.modelValue?(n(),l(o,{key:0,"url-list":t.urlList,onClose:a[0]||(a[0]=y=>r("update:modelValue",!1))},null,8,["url-list"])):c("",!0)}}};function P(t){const e=document.createElement("div");e.classList.add("img-viewer-box"),document.body.append(e);const r=k($,{modelValue:!0,urlList:t,"onUpdate:modelValue":s=>{s||(r.unmount(e),e.remove())}});r.mount(e)}const _=t=>(E("data-v-eb7fe810"),t=t(),L(),t),j={class:"page-svg"},A={class:"row-box"},G=_(()=>u("span",null,"svg-icon：",-1)),J={class:"row-box"},O=_(()=>u("span",null,"按钮权限：",-1)),U={class:"row-box"},M=_(()=>u("span",null,"公共组件：",-1)),Q=C({name:"BaseCase"}),T=Object.assign(Q,{setup(t){x(),V(),v();const e=B(["https://img2.baidu.com/it/u=2193238619,3962578777&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800","https://img0.baidu.com/it/u=2099628,2438611947&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500"]);return(r,s)=>{const a=w,o=g;return n(),I("div",j,[u("div",A,[G,f(a,{name:"edit"})]),u("div",J,[O,i(d)("add")?(n(),l(o,{key:0,type:"primary"},{default:m(()=>[p("新增")]),_:1})):c("",!0),i(d)("edit")?(n(),l(o,{key:1,type:"primary"},{default:m(()=>[p("编辑")]),_:1})):c("",!0),i(d)("delete")?(n(),l(o,{key:2,type:"primary"},{default:m(()=>[p("删除")]),_:1})):c("",!0),i(d)("export")?(n(),l(o,{key:3,type:"primary"},{default:m(()=>[p("导出")]),_:1})):c("",!0)]),u("div",U,[M,f(o,{type:"primary",onClick:s[0]||(s[0]=y=>i(P)(e.value))},{default:m(()=>[p("图片预览")]),_:1})])])}}}),re=R(T,[["__scopeId","data-v-eb7fe810"]]);export{re as default};
