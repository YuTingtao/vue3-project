import{A as v,S as D,a3 as _,o as j,j as z,k as g,a as h,w,a4 as P,a5 as Y,H as F,W as G,a6 as U,C as y}from"./vender-DDlItSG0.js";const q={class:"whiteboard-box"},J={class:"whiteboard-btns"},K={class:"whiteboard"},Q={__name:"index",setup(L){const u=v(),i=v(),s=v(),o=v(),a=D({drawType:"paint",lineWidth:1.5,color:"#ff0000",eraserWidth:20});function c(t){a.drawType=t}const S=v(["#ff0000","#0000ff"]);function X(){s.value=u.value.getContext("2d"),o.value=i.value.getContext("2d");let t=u.value.parentNode.clientWidth,e=u.value.parentNode.clientHeight,l=window.devicePixelRatio||1;u.value.width=Math.round(t*l),u.value.height=Math.round(e*l),u.value.style.width=t+"px",u.value.style.height=e+"px",i.value.width=Math.round(t*l),i.value.height=Math.round(e*l),i.value.style.width=t+"px",i.value.style.height=e+"px",s.value.scale(l,l),o.value.scale(l,l)}_(()=>{X()});const d=v(0),f=v(0),k=v(0),x=v(0),T=v(!1),m=v(!1),b=v();function W(t){a.drawType!="text"?(T.value=!0,d.value=t.offsetX,f.value=t.offsetY):m.value||(m.value=!0,d.value=t.offsetX,f.value=t.offsetY,k.value=t.pageX,x.value=t.pageY,setTimeout(()=>{b.value.focus()},20))}function C(t){T.value&&(a.drawType=="paint"?(I(d.value,f.value,t.offsetX,t.offsetY),d.value=t.offsetX,f.value=t.offsetY):a.drawType=="eraser"?s.value.clearRect(t.offsetX-.5*a.eraserWidth,t.offsetY-.5*a.eraserWidth,a.eraserWidth,a.eraserWidth):a.drawType=="rect"?R(d.value,f.value,t.offsetX-d.value,t.offsetY-f.value):a.drawType=="ellipse"?H(d.value,f.value,t.offsetX,t.offsetY):a.drawType=="arrow"&&B(d.value,f.value,t.offsetX,t.offsetY))}function M(){T.value&&(["rect","ellipse","arrow"].includes(a.drawType)&&E(),T.value=!1)}function I(t,e,l,n){s.value.beginPath(),s.value.moveTo(t,e),s.value.lineTo(l,n),s.value.lineWidth=a.lineWidth,s.value.strokeStyle=a.color,s.value.stroke()}function R(t,e,l,n){o.value.clearRect(0,0,i.value.width,i.value.height),o.value.beginPath(),o.value.lineWidth=a.lineWidth,o.value.strokeStyle=a.color,o.value.rect(t,e,l,n),o.value.stroke()}function H(t,e,l,n){o.value.clearRect(0,0,i.value.width,i.value.height),o.value.beginPath(),o.value.lineWidth=a.lineWidth,o.value.strokeStyle=a.color,o.value.ellipse(t+Math.abs(l-t)/2,e+Math.abs(n-e)/2,Math.abs(l-t),Math.abs(n-e),0,0,Math.PI*2,!1),o.value.stroke()}function B(t,e,l,n){o.value.clearRect(0,0,i.value.width,i.value.height),o.value.beginPath(),o.value.moveTo(t,e),o.value.lineTo(l,n),o.value.lineWidth=a.lineWidth,o.value.strokeStyle=a.color,o.value.stroke();let r=Math.atan2(n-e,l-t),p=parseInt(a.lineWidth*7,10),$=l+.5*p*Math.cos(r),A=n+.5*p*Math.sin(r);o.value.beginPath(),o.value.moveTo($,A),o.value.lineTo(l-p*Math.cos(r-Math.PI/6),n-p*Math.sin(r-Math.PI/6)),o.value.lineTo(l-p*Math.cos(r+Math.PI/6),n-p*Math.sin(r+Math.PI/6)),o.value.closePath(),o.value.fillStyle=a.color,o.value.fill()}function E(){let t=parseInt(u.value.style.width,10),e=parseInt(u.value.style.height,10);s.value.drawImage(i.value,0,0,i.value.width,i.value.height,0,0,t,e),o.value.clearRect(0,0,i.value.width,i.value.height)}function N(t){t.target.innerText.split(/\n\r|\n/).forEach((l,n)=>{s.value.fillStyle=a.color,s.value.font='14px "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif';let r=d.value+9,p=f.value-14+(n+1)*20;s.value.fillText(l,r,p)}),t.target.innerText="",m.value=!1}function V(){s.value.clearRect(0,0,u.value.width,u.value.height),a.drawType=="eraser"&&c("paint")}return(t,e)=>{const l=G,n=U;return j(),z("div",q,[g("div",J,[h(l,{type:a.drawType=="paint"?"primary":"",onClick:e[0]||(e[0]=r=>c("paint"))},{default:w(()=>e[7]||(e[7]=[y(" 画笔 ")])),_:1},8,["type"]),h(l,{type:a.drawType=="rect"?"primary":"",onClick:e[1]||(e[1]=r=>c("rect"))},{default:w(()=>e[8]||(e[8]=[y(" 矩形 ")])),_:1},8,["type"]),h(l,{type:a.drawType=="ellipse"?"primary":"",onClick:e[2]||(e[2]=r=>c("ellipse"))},{default:w(()=>e[9]||(e[9]=[y(" 椭圆 ")])),_:1},8,["type"]),h(l,{type:a.drawType=="arrow"?"primary":"",onClick:e[3]||(e[3]=r=>c("arrow"))},{default:w(()=>e[10]||(e[10]=[y(" 箭头 ")])),_:1},8,["type"]),h(l,{type:a.drawType=="text"?"primary":"",onClick:e[4]||(e[4]=r=>c("text"))},{default:w(()=>e[11]||(e[11]=[y(" 文本 ")])),_:1},8,["type"]),h(n,{modelValue:a.color,"onUpdate:modelValue":e[5]||(e[5]=r=>a.color=r),predefine:S.value},null,8,["modelValue","predefine"]),h(l,{type:a.drawType=="eraser"?"primary":"",onClick:e[6]||(e[6]=r=>c("eraser"))},{default:w(()=>e[12]||(e[12]=[y(" 橡皮擦 ")])),_:1},8,["type"]),h(l,{style:{"margin-left":"36px"},type:"",onClick:V},{default:w(()=>e[13]||(e[13]=[y("清空")])),_:1})]),g("div",K,[g("canvas",{ref_key:"canvas",ref:u,class:"whiteboard-canvas",width:"",height:"",onMousedown:W,onMousemove:C,onMouseup:M,onMouseleave:M},null,544),P(g("canvas",{ref_key:"canvasTemp",ref:i,class:"whiteboard-temp",width:"",height:"",onMousedown:W,onMousemove:C,onMouseup:M,onMouseleave:M},null,544),[[Y,["rect","ellipse","arrow"].includes(a.drawType)]]),P(g("div",{ref_key:"inputRef",ref:b,class:"whiteboard-input",contenteditable:"true",style:F({color:a.color,left:k.value+"px",top:x.value-16+"px"}),onBlur:N},null,36),[[Y,a.drawType=="text"&&m.value]])])])}}};export{Q as default};
