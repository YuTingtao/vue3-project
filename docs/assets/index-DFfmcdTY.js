import{Y as i,Z as a}from"./vender-BUKpy9yV.js";import{u as n,r as s}from"./index-D6zYgcpi.js";function o(t){a.closeAll(),a.error({message:t,duration:2e3})}function u(){const t=s.currentRoute;let e="/login";t.value.path!="/login"&&(e=`/login?redirect=${t.value.fullPath}`),s.push(e)}const r=i.create({});r.interceptors.request.use(t=>{const e=n();return t.headers["Content-Type"]="application/json",e.token&&(t.headers.token=e.token),t},t=>Promise.reject(t));r.interceptors.response.use(t=>{const e=n();return t.status===200?t.data instanceof Blob||t.data instanceof ArrayBuffer?t:(t.data.code!=="200"&&o(t.data.msg),t.data.code==="000001"&&(e.setLogout(),u()),t.data):Promise.reject(t.data)},t=>{if(t.response){switch(t.response.status){case 404:o("网络请求不存在");break;default:o("网络异常")}return Promise.reject(t)}else navigator.onLine||o("设备已断开网络")});const p={login(t){return r.request({url:"/api/login",method:"post",data:t,timeout:500})},logout(){return r.request({url:"/api/logout",method:"get"})}};export{p as l};
