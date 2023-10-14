import { createApp } from 'vue'
import ImgViewer from './ImgViewer.vue'

function viewImg(urls) {
  const div = document.createElement('div')
  div.classList.add('img-viewer-box')
  document.body.append(div)

  const app = createApp(ImgViewer, {
    modelValue: true,
    urlList: urls,
    'onUpdate:modelValue': () => {
      app.unmount(div)
      div.remove()
    }
  })
  app.mount(div)
}

export default viewImg