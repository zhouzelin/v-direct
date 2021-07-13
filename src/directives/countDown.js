// 倒计时
import {getAttr, emit} from '@/utils/utils'

const countDown = {
  bind(el, binding) {
    el.timer = null
    el.count = el.originCount = binding.value
    el.delay = getAttr(el, 'count-down-delay', 1000)
    el.countDownStop = stop.bind(el)
    el.countDownStart = start.bind(el)
    el.countDownReset = reset.bind(el)
  },
  inserted(el) {
    el.innerText = el.count
  },
  componentUpdated(el, binding) {
    el.count = binding.value
    el.delay = getAttr(el, 'count-down-delay', 1000)
    el.innerText = el.count
  }
}

function start() {
  emit(this, 'count-down-start')
  this.countDownStop()
  this.timer = setInterval(() => {
    if (this.count > 0) {
      --this.count
      this.innerText = this.count
    } else {
      emit(this, 'count-down-end')
      this.countDownStop()
    }
  }, this.delay)
}

function stop() {
  if (this.timer) {
    clearInterval(this.timer)
    this.timer = null
  }
}

function reset() {
  this.count = this.originCount
  this.innerText = this.count
}

export default countDown
