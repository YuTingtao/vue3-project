import{p as h,A as x,B as i,R as k,o as y,k as N,l as g,a as e,w as a,J as I,S as B,D as E,T as R,U as S,V as q,W as F,X as U}from"./vendor-hgDvt3Dr.js";import{u as C}from"./index-avX39saA.js";import{l as L}from"./login-tokNfdOw.js";import{_ as T}from"./plugin-vue_export-helper-x3n3nnut.js";const A=s=>(R("data-v-777e5939"),s=s(),S(),s),j={class:"login-bg"},z={class:"login-box"},D=A(()=>g("h3",{class:"title"},"登录系统",-1)),J=I({name:"Login"}),M=Object.assign(J,{setup(s){const d=h(),c=x(),p=C(),r=i(),o=i({userName:"admin",password:"123456"}),v=k({userName:[{required:!0,message:"请输入账号/手机号/邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),t=i(!1);async function w(){r.value&&await r.value.validate(_=>{_&&(t.value=!0,L.login(o.value).then(()=>{t.value=!1,m()}).catch(()=>{t.value=!1,m()}))})}async function m(){p.setLogin({token:"Token-123456789",userInfo:{name:"admin",avatar:""}}),await p.getUserMenus(),c.query.redirect?d.replace(c.query.redirect):d.replace("/")}return(_,l)=>{const f=q,n=F,b=U,V=B;return y(),N("div",j,[g("div",z,[D,e(V,{model:o.value,ref_key:"formRef",ref:r,rules:v,size:"large"},{default:a(()=>[e(n,{label:"",prop:"userName"},{default:a(()=>[e(f,{modelValue:o.value.userName,"onUpdate:modelValue":l[0]||(l[0]=u=>o.value.userName=u),placeholder:"请输入账号/手机号/邮箱","prefix-icon":"user"},null,8,["modelValue"])]),_:1}),e(n,{label:"",prop:"password"},{default:a(()=>[e(f,{modelValue:o.value.password,"onUpdate:modelValue":l[1]||(l[1]=u=>o.value.password=u),placeholder:"请输入密码",type:"password","prefix-icon":"lock"},null,8,["modelValue"])]),_:1}),e(n,null,{default:a(()=>[e(b,{class:"row-btn",type:"primary",loading:t.value,onClick:w},{default:a(()=>[E("登 录")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])])}}}),H=T(M,[["__scopeId","data-v-777e5939"]]);export{H as default};