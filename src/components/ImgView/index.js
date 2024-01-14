import { createApp } from 'vue'
import ImgView from '../ImgView/index.vue'

function viewImg(urls) {
  const div = document.createElement('div')
  div.classList.add('img-viewer-box')
  document.body.append(div)

  const app = createApp(ImgView, {
    modelValue: true,
    urlList: urls,
    'onUpdate:modelValue': (val) => {
      // console.log(val)
      if (!val) {
        app.unmount(div)
        div.remove()
      }
    }
  })
  app.mount(div)
}

export default viewImg