import { createApp } from 'vue';
import ImgView from '../imgView/ImgView.vue';

/**
 * 预览图片
 * @param urls 图片地址数组
 */
function viewImg(urls: string[]) {
  let div: HTMLElement | null = document.createElement('div');
  div.classList.add('img-viewer-box');
  document.body.append(div);

  const app = createApp(ImgView, {
    modelValue: true,
    urlList: urls,
    'onUpdate:modelValue': (val: string[]) => {
      // console.log(val)
      if (!val) {
        app.unmount();
        document.body.removeChild(div!);
        div = null;
      }
    }
  });
  app.mount(div);
}

export default viewImg;
