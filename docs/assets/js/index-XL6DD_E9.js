import{a as v,_ as c}from"./index-VTHSqtH6.js";/* empty css               */import{I as m,F as d,x as n,as as x,t as y,r as V,v as g,A as a,L as _,u,J as i,at as w,au as b,a2 as l}from"./vue-render-BaYS_z1e.js";import{s as k,q as B}from"./element-plus-DzTveOOg.js";import{_ as C}from"./plugin-vue_export-helper-DlAUqK2U.js";const E={__name:"ImgView",props:{modelValue:{type:Boolean,default:!1},urlList:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(r,{emit:t}){const s=t;return(p,e)=>{const f=k;return r.modelValue?(n(),m(f,{key:0,"url-list":r.urlList,onClose:e[0]||(e[0]=o=>s("update:modelValue",!1))},null,8,["url-list"])):d("",!0)}}};function L(r){const t=document.createElement("div");t.classList.add("img-viewer-box"),document.body.append(t);const s=x(E,{modelValue:!0,urlList:r,"onUpdate:modelValue":p=>{p||(s.unmount(t),t.remove())}});s.mount(t)}const I={class:"page-svg"},N={class:"row-box"},P={class:"row-box"},$={class:"row-box"},A=y({name:"BaseCase"}),J=y({...A,setup(r){w(),b();const{hasPermission:t}=v(),s=V(["https://img2.baidu.com/it/u=2193238619,3962578777&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800","https://img0.baidu.com/it/u=2099628,2438611947&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500"]);return(p,e)=>{const f=c,o=B;return n(),g("div",I,[a("div",N,[e[1]||(e[1]=a("span",null,"svg-icon：",-1)),_(f,{name:"edit"})]),a("div",P,[e[6]||(e[6]=a("span",null,"按钮权限：",-1)),u(t)("add")?(n(),m(o,{key:0,type:"primary"},{default:i(()=>e[2]||(e[2]=[l("新增")])),_:1})):d("",!0),u(t)("edit")?(n(),m(o,{key:1,type:"primary"},{default:i(()=>e[3]||(e[3]=[l("编辑")])),_:1})):d("",!0),u(t)("delete")?(n(),m(o,{key:2,type:"primary"},{default:i(()=>e[4]||(e[4]=[l("删除")])),_:1})):d("",!0),u(t)("export")?(n(),m(o,{key:3,type:"primary"},{default:i(()=>e[5]||(e[5]=[l("导出")])),_:1})):d("",!0)]),a("div",$,[e[8]||(e[8]=a("span",null,"图片预览：",-1)),_(o,{type:"primary",onClick:e[0]||(e[0]=G=>u(L)(s.value))},{default:i(()=>e[7]||(e[7]=[l("预览")])),_:1})])])}}}),j=C(J,[["__scopeId","data-v-ed11ab4e"]]);export{j as default};
