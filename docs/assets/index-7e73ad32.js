import{s as d,Y as k,Z as w,_ as E,o as h,k as y,a as u,u as f,$ as R,a0 as b,p as N,q as S,a1 as L,l as x,H as U,w as g,x as v,b as $,D}from"./vendor-171d93a1.js";import{u as M}from"./index-a06e5195.js";const O={class:"wang-editor"},F={__name:"BaseEditor",props:{modelValue:{Type:String,default:""},placeholder:{Type:String,default:"请输入内容..."},maxLength:{Type:Number,default:null},mode:{Type:String,default:"simple"}},emits:["update:modelValue"],setup(i,{expose:l,emit:a}){const n=i,p=a,r=d(n.modelValue);k(()=>n.modelValue,e=>{r.value=e});const t=w(),m=d({modalAppendToBody:!0}),_=d({placeholder:n.placeholder,maxLength:n.maxLength,autoFocus:!1,MENU_CONF:{uploadImage:{server:"/api/upload"},uploadVideo:{server:"/api/upload"}}});E(()=>{const e=t.value;e!=null&&e.destroy()});function s(e){t.value=e}function c(e){p("update:modelValue",e.getHtml())}function T(){const e=t.value;if(e!=null)return e.getHtml()}function C(){const e=t.value;if(e!=null)return e.getText()}function V(e){const o=t.value;o!=null&&o.setHtml(e)}function B(e){const o=t.value;o!=null&&o.insertText(e)}return l({getHtml:T,setHtml:V,getText:C,insertText:B}),(e,o)=>(h(),y("div",O,[u(f(R),{editor:t.value,defaultConfig:m.value,mode:i.mode},null,8,["editor","defaultConfig","mode"]),u(f(b),{style:{"overflow-y":"hidden"},modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=H=>r.value=H),defaultConfig:_.value,mode:i.mode,onOnCreated:s,onOnChange:c},null,8,["modelValue","defaultConfig","mode"])]))}},q={class:"page-editor"},A={style:{margin:"10px 0"}},Z={__name:"index",setup(i){N(),S(),M();const l=d();let a=d("<p>老王编辑器</p>");function n(){l.value.setHtml(`<p>当前时间戳：${Date.now()}</p>`)}function p(){$.alert(l.value.getHtml(),"富文本",{confirmButtonText:"确定"})}function r(){l.value.insertText(`纯文本${Math.random()}`)}return(t,m)=>{const _=F,s=D;return h(),y("div",q,[u(_,{ref_key:"editorRef",ref:l,modelValue:f(a),"onUpdate:modelValue":m[0]||(m[0]=c=>L(a)?a.value=c:a=c),maxLength:1e3},null,8,["modelValue"]),x("div",A,U(f(a)),1),x("div",null,[u(s,{type:"primary",onClick:n},{default:g(()=>[v("设置富文本")]),_:1}),u(s,{type:"primary",onClick:p},{default:g(()=>[v("获取富文本")]),_:1}),u(s,{type:"primary",onClick:r},{default:g(()=>[v("插入纯文本")]),_:1})])])}}};export{Z as default};
