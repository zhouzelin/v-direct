/* Automatically generated by './build/dist.js' */
import {humptoLine, overwrite} from 'utils/utils'
// databus
import Databus from 'utils/databus.js'
// directives
import clickOutside from './directives/clickOutside.js';
import copy from './directives/copy.js';
import countDown from './directives/countDown.js';
import debounce from './directives/debounce.js';
import draggable from './directives/draggable.js';
import ellipsis from './directives/ellipsis.js';
import focus from './directives/focus.js';
import formatter from './directives/formatter.js';
import fullScreen from './directives/fullScreen.js';
import infiniteScroll from './directives/infiniteScroll.js';
import lazyLoad from './directives/lazyLoad.js';
import limitText from './directives/limitText.js';
import longpress from './directives/longpress.js';
import marquee from './directives/marquee.js';
import permission from './directives/permission.js';
import watermarker from './directives/watermarker.js';

let databus = new Databus()

const directives = {
  clickOutside,
  copy,
  countDown,
  debounce,
  draggable,
  ellipsis,
  focus,
  formatter,
  fullScreen,
  infiniteScroll,
  lazyLoad,
  limitText,
  longpress,
  marquee,
  permission,
  watermarker
}

const zery = {
  use(useList) {
    if (useList) {
      this.useList = useList
    }
  },
  install(Vue) {
    if (!this.useList) {
      this.useList = Object.keys(directives)
    }
    this.useList.forEach(item => {
      if (directives[item]) {
        Vue.directive(humptoLine(item), directives[item])
      } else {
        throw new Error('不存在该指令')
      }
    })
    Vue.prototype.$zery = this
  },
  setOption(options) {
    if (options instanceof Object && !Array.isArray(options)) {
      databus = overwrite(databus, options)
    } else {
      throw new Error('type of options is invalid')
    }
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default zery
