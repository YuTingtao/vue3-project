import{U as a,g as s}from"./vendor-171d93a1.js";import{u as n,r as u}from"./index-a06e5195.js";function r(e){s.closeAll(),s.error({message:e,duration:2e3})}function i(){const e=u.currentRoute;let t="/login";e.value.path!="/login"&&(t=`/login?redirect=${e.value.fullPath}`),u.push(t)}const o=a.create({timeout:1e4});o.interceptors.request.use(e=>{const t=n();return e.headers["Content-Type"]="application/json",t.token&&(e.headers.token=t.token),e},e=>Promise.error(e));o.interceptors.response.use(e=>{const t=n();return e.status>=200&e.status<300?e.data instanceof Blob||e.data instanceof ArrayBuffer?e:(e.data.code!="000000"&&r(e.data.msg),e.data.code=="000001"&&(t.setLogout(),i()),e.data):Promise.reject(e)},e=>{if(e.response){switch(e.response.status){case 404:r("网络请求不存在");break;default:r("网络请求错误")}return Promise.reject(e)}else navigator.onLine||r("网络已断开，请检查网络")});const p={login(e){return o.request({url:"/api/user/login",method:"post",data:e,timeout:500})},logout(){return o.request({url:"/api/user/logout",method:"get"})},userMenus(){return o.request({url:"/api/user/userMenus",method:"get"})}};export{p as l};
