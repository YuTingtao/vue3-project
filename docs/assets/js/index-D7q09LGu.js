import{m as N,t as B,u as U,n as I,o as R,v as T,w as D,p as F,x as M}from"./element-plus-BD5AbnlQ.js";import{b as y,_ as P}from"./index-D_R0Ri2k.js";import{n as w,r as m,o as $,$ as t,Z as l,ao as n,Y as c,U as b,W as j,a1 as i,bl as q,bm as L,q as d}from"./vendor-CTpyaoXX.js";import{_ as O}from"./plugin-vue_export-helper-DlAUqK2U.js";const W={class:""},Y={class:"item-name"},Z=w({name:"SystemMenu"}),A=w({...Z,setup(G){q(),L();const o=m({keyword:"",status:void 0,pageNum:1,pageSize:10}),_=m([]),f=m(0);function r(){_.value=y,f.value=y.length}r();function g(){o.value.pageNum=1,r()}function k(){o.value={keyword:"",status:void 0,pageNum:1,pageSize:10},r()}return(H,e)=>{const E=R,s=I,v=D,S=T,u=F,V=N,x=P,p=M,z=B,C=U;return d(),$("div",W,[t(V,{class:"app-filter",model:o.value,"label-width":""},{default:l(()=>[t(s,{label:"关键词"},{default:l(()=>[t(E,{modelValue:o.value.keyword,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value.keyword=a),modelModifiers:{trim:!0},placeholder:"请输入菜单名称"},null,8,["modelValue"])]),_:1}),t(s,{label:"状态"},{default:l(()=>[t(S,{modelValue:o.value.status,"onUpdate:modelValue":e[1]||(e[1]=a=>o.value.status=a),placeholder:"请选择",clearable:""},{default:l(()=>[t(v,{label:"启用",value:1}),t(v,{label:"禁用",value:0})]),_:1},8,["modelValue"])]),_:1}),t(s,{style:{"margin-right":"auto"}},{default:l(()=>[t(u,{type:"primary",onClick:g},{default:l(()=>e[4]||(e[4]=[n("搜索")])),_:1}),t(u,{type:"primary",plain:"",onClick:k},{default:l(()=>e[5]||(e[5]=[n("重置")])),_:1})]),_:1}),t(s,null,{default:l(()=>[t(u,{type:"primary"},{default:l(()=>e[6]||(e[6]=[n("新增")])),_:1})]),_:1})]),_:1},8,["model"]),t(z,{data:_.value,border:"","row-key":"path","default-expand-all":""},{default:l(()=>[t(p,{prop:"meta.title",label:"菜单","min-width":"150"},{default:l(a=>[a.row.meta.icon?(d(),c(x,{key:0,name:a.row.meta.icon},null,8,["name"])):b("",!0),j("span",Y,i(a.row.meta.title),1)]),_:1}),t(p,{prop:"meta.type",label:"类型","min-width":"150"},{default:l(a=>[n(i(a.row.meta.type==0?"模块":"菜单"),1)]),_:1}),t(p,{prop:"meta.visible",label:"是否显示","min-width":"150"},{default:l(a=>[n(i(a.row.meta.visible?"是":"否"),1)]),_:1}),t(p,{prop:"",label:"操作","min-width":"150"},{default:l(a=>[a.row.meta.type==0?(d(),c(u,{key:0,type:"primary",link:""},{default:l(()=>e[7]||(e[7]=[n("新增")])),_:1})):b("",!0),t(u,{type:"primary",link:""},{default:l(()=>e[8]||(e[8]=[n("编辑")])),_:1}),t(u,{type:"primary",link:""},{default:l(()=>e[9]||(e[9]=[n("删除")])),_:1})]),_:1})]),_:1},8,["data"]),t(C,{"current-page":o.value.pageNum,"onUpdate:currentPage":e[2]||(e[2]=a=>o.value.pageNum=a),"page-size":o.value.pageSize,"onUpdate:pageSize":e[3]||(e[3]=a=>o.value.pageSize=a),layout:"total, sizes, prev, pager, next, jumper",background:!0,total:f.value,onSizeChange:g,onCurrentChange:r},null,8,["current-page","page-size","total"])])}}}),h=O(A,[["__scopeId","data-v-9a56fd9a"]]);export{h as default};
