import{C as d,U as k,V as w,W as E,o as h,k as y,a as u,u as f,X as R,Y as b,A as N,B as S,Z as U,l as x,t as L,w as g,b as M,Q as O,I as v}from"./vendor-e33c34b7.js";import{u as $}from"./index-bd0453d5.js";const A={class:"wang-editor"},D={__name:"BaseEditor",props:{modelValue:{Type:String,default:""},placeholder:{Type:String,default:"请输入内容..."},maxLength:{Type:Number,default:null},mode:{Type:String,default:"simple"}},emits:["update:modelValue"],setup(i,{expose:a,emit:l}){const n=i,p=l,r=d(n.modelValue);k(()=>n.modelValue,e=>{r.value=e});const t=w(),m=d({modalAppendToBody:!0}),_=d({placeholder:n.placeholder,maxLength:n.maxLength,autoFocus:!1,MENU_CONF:{uploadImage:{server:"/api/upload"},uploadVideo:{server:"/api/upload"}}});E(()=>{const e=t.value;e!=null&&e.destroy()});function s(e){t.value=e}function c(e){p("update:modelValue",e.getHtml())}function C(){const e=t.value;if(e!=null)return e.getHtml()}function T(){const e=t.value;if(e!=null)return e.getText()}function V(e){const o=t.value;o!=null&&o.setHtml(e)}function B(e){const o=t.value;o!=null&&o.insertText(e)}return a({getHtml:C,setHtml:V,getText:T,insertText:B}),(e,o)=>(h(),y("div",A,[u(f(R),{editor:t.value,defaultConfig:m.value,mode:i.mode},null,8,["editor","defaultConfig","mode"]),u(f(b),{style:{"overflow-y":"hidden"},modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=H=>r.value=H),defaultConfig:_.value,mode:i.mode,onOnCreated:s,onOnChange:c},null,8,["modelValue","defaultConfig","mode"])]))}},F={class:"page-editor"},I={style:{margin:"10px 0"}},X={__name:"index",setup(i){N(),S(),$();const a=d();let l=d("<p>老王编辑器</p>");function n(){a.value.setHtml(`<p>当前时间戳：${Date.now()}</p>`)}function p(){M.alert(a.value.getHtml(),"富文本",{confirmButtonText:"确定"})}function r(){a.value.insertText(`纯文本${Math.random()}`)}return(t,m)=>{const _=D,s=O;return h(),y("div",F,[u(_,{ref_key:"editorRef",ref:a,modelValue:f(l),"onUpdate:modelValue":m[0]||(m[0]=c=>U(l)?l.value=c:l=c),maxLength:1e3},null,8,["modelValue"]),x("div",I,L(f(l)),1),x("div",null,[u(s,{type:"primary",onClick:n},{default:g(()=>[v("设置富文本")]),_:1}),u(s,{type:"primary",onClick:p},{default:g(()=>[v("获取富文本")]),_:1}),u(s,{type:"primary",onClick:r},{default:g(()=>[v("插入纯文本")]),_:1})])])}}};export{X as default};
