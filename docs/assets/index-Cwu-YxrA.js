import{ar as E,r as d,j as S,N as e,m as a,e as z,an as C,aq as h,o as N,al as i,B as V,as as B,R as L}from"./index-3pqlcbgx.js";import{E as R,a as T,b as U,c as j,d as I}from"./table-column-fwD5AVeI.js";import"./tooltip-DdJdDNYA.js";import{E as q,a as D}from"./form-item-DjjK5Ukx.js";import{a as F}from"./axios-upsvKRUO.js";import{_ as O}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./index-Dz1V-KSk.js";import"./index-DbJurYlH.js";import"./castArray-CTNZOjmg.js";import"./debounce-BAq4hNzC.js";const P={getList(_={}){return F.request({url:"/api/getList",method:"post",data:_})}},A={class:""},M=z({name:"TableCase"}),G=Object.assign(M,{setup(_){C(),h(),E();const l=d({keyword:"",status:null,pageNum:1,pageSize:10}),f=d([]),g=d(0);function r(){P.getList(l.value).then(n=>{var t,s;n=n.data,n.code==="200"&&(f.value=((t=n==null?void 0:n.data)==null?void 0:t.list)||[],g.value=((s=n==null?void 0:n.data)==null?void 0:s.total)||0)})}r();function b(){l.value.pageNum=1,r()}function w(){l.value={keyword:"",status:null,pageNum:1,pageSize:10},r()}return(n,t)=>{const s=B,m=D,v=U,c=j,u=L,y=q,p=I,k=R,x=T;return N(),S("div",A,[e(y,{class:"app-filter",model:l.value,"label-width":""},{default:a(()=>[e(m,{label:"关键词"},{default:a(()=>[e(s,{modelValue:l.value.keyword,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value.keyword=o),modelModifiers:{trim:!0},placeholder:"请输入名称"},null,8,["modelValue"])]),_:1}),e(m,{label:"状态"},{default:a(()=>[e(c,{modelValue:l.value.status,"onUpdate:modelValue":t[1]||(t[1]=o=>l.value.status=o),placeholder:"请选择",clearable:""},{default:a(()=>[e(v,{label:"启用",value:1}),e(v,{label:"禁用",value:0})]),_:1},8,["modelValue"])]),_:1}),e(m,{style:{"margin-right":"auto"}},{default:a(()=>[e(u,{type:"primary",onClick:b},{default:a(()=>t[4]||(t[4]=[i("搜索")])),_:1}),e(u,{type:"primary",plain:"",onClick:w},{default:a(()=>t[5]||(t[5]=[i("重置")])),_:1})]),_:1}),e(m,null,{default:a(()=>[e(u,{type:"primary"},{default:a(()=>t[6]||(t[6]=[i("新增")])),_:1})]),_:1})]),_:1},8,["model"]),e(k,{data:f.value,border:"","row-key":"id"},{default:a(()=>[e(p,{type:"index",label:"序号",align:"center",width:"55"}),e(p,{prop:"name",label:"姓名","min-width":"150","show-overflow-tooltip":""}),e(p,{prop:"sex",label:"性别","min-width":"150","show-overflow-tooltip":""},{default:a(o=>[i(V(o.row.sex==0?"男":o.row.sex==1?"女":""),1)]),_:1}),e(p,{prop:"age",label:"年龄","min-width":"150","show-overflow-tooltip":""}),e(p,{prop:"city",label:"城市","min-width":"150","show-overflow-tooltip":""}),e(p,{prop:"email",label:"邮箱","min-width":"150","show-overflow-tooltip":""}),e(p,{prop:"",label:"操作","min-width":"150"},{default:a(o=>[e(u,{type:"primary",link:""},{default:a(()=>t[7]||(t[7]=[i("编辑")])),_:1}),e(u,{type:"primary",link:""},{default:a(()=>t[8]||(t[8]=[i("删除")])),_:1})]),_:1})]),_:1},8,["data"]),e(x,{"current-page":l.value.pageNum,"onUpdate:currentPage":t[2]||(t[2]=o=>l.value.pageNum=o),"page-size":l.value.pageSize,"onUpdate:pageSize":t[3]||(t[3]=o=>l.value.pageSize=o),layout:"total, sizes, prev, pager, next, jumper",background:!0,total:g.value,onSizeChange:b,onCurrentChange:r},null,8,["current-page","page-size","total"])])}}}),te=O(G,[["__scopeId","data-v-781bfca5"]]);export{te as default};
