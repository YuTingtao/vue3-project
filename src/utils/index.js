// 模块自动引入
const ctx = require.context('./', true, /\.js$/);
let utils = {};

ctx.keys().forEach(key => {
    if (key === './index.js') {
        return false;
    }
    let name = key.replace(/^\.\//, '').replace(/\.js/, '');
    utils[name] = ctx(key).default;
});

module.exports = utils;