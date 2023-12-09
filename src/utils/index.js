// 自动化导入
const contexts = import.meta.glob('./*.js', { eager: true })
const utils = {}

for (const key of Object.keys(contexts)) {
  if (key !== './index.js') {
    utils[key.replace(/(\.\/|\.js)/gi, '')] = contexts[key].default
  }
}

export default {
  ...utils
}